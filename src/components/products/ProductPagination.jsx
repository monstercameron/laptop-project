import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
class ProductPagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: this.props.currentPage,
            pages: this.howManyPages(),
            pagination: null,
            paginationPreview: 4,
            updateMe: false
        }
    }
    static getDerivedStateFromProps = (props, state) => {
        if (props.currentPage !== state.currentPage) {
            return {
                currentPage: props.currentPage,
                updateMe: !state.updateMe
            }
        }
        return null
    }
    componentDidMount = () => {
        this.setState({ pagination: this.paginator() })
    }
    componentDidUpdate = () => {
        if (this.state.updateMe) {
            this.setState({ pagination: this.paginator(), updateMe: !this.state.updateMe })
        }
    }
    howManyPages = () => {
        return this.props.count <= 10 ? 1 : Math.ceil(this.props.count / 10)
    }
    paginator = () => {
        let pages = []
        // back button
        if (this.state.currentPage > 1) {
            pages.push(<Col onClick={this.updatePageInSteps} className='text-center' key={'previous'}>{'<'}</Col>)
        }
        // single page indicator
        if (this.state.currentPage === 1 && this.state.pages === 1) {
            pages.push(<Col className='text-center' key={'only'}>1</Col>)
        }
        // multipage indicator
        let paginationPreview = 0
        let startingPagination = this.state.currentPage
        if (Math.abs(this.state.pages - this.state.currentPage < this.state.paginationPreview)) {
            startingPagination = this.state.pages - this.state.paginationPreview + 1
        }
        for (let index = startingPagination; index <= this.state.pages; index++ , ++paginationPreview) {
            if (paginationPreview >= this.state.paginationPreview) {
                break
            }
            if (index === this.state.currentPage) {
                pages.push(<Col onClick={this.updatePage} className={`text-center bg-dark text-white`} key={index}>{index}</Col>)
            } else {
                pages.push(<Col onClick={this.updatePage} className='text-center' key={index}>{index}</Col>)
            }
        }
        // last and next page options
        if (Math.abs(this.state.pages - this.state.currentPage) > this.state.paginationPreview) {
            pages.push(<Col className='text-center' key={'span'}>...</Col>)
            pages.push(<Col onClick={this.updatePage} className='text-center' key={'last'}>{this.state.pages}</Col>)
            pages.push(<Col onClick={this.updatePageInSteps} className='text-center' key={'next'}>></Col>)
        }
        // this.setState({ pagination: pages })
        return pages
    }
    updatePage = (e) => {
        if (this.props.currentPage !== parseInt(e.target.innerHTML)) {
            this.props.changePage(parseInt(e.target.innerHTML))
        }
    }
    updatePageInSteps = (e) => {
        switch (e.target.innerHTML) {
            case '&gt;':
            case '>': this.props.changePage(this.props.currentPage + 1)
                break
            case '&lt;':
            case '<': this.props.changePage(this.props.currentPage - 1)
                break
            default: return
        }
    }
    render() {
        return (
            <Row className='p-0 m-1 mt-2 border bg-white shadow'>
                <Col sm={6} className='mx-auto border'>
                    <Row>
                        {this.state.pagination}
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductPagination