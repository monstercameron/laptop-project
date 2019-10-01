import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
class ProductPagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: this.howManyPages()
        }
    }
    howManyPages = () => {
        return this.props.count <= 10 ? 1 : Math.ceil(this.props.count / 10)
    }
    paginator = () => {
        let pages = []
        if (this.props.currentPage > 0) {
            pages.push(<Col className='text-center' key={this.props.currentPage - 1}>{'<'}</Col>)
        }
        let i = this.props.currentPage || 0
        for (; i < this.state.pages; i++) {
            if (i > 4) {
                pages.push(<Col className='text-center' key={i}>></Col>)
                pages.push(<Col className='text-center' key={i + 1}>...</Col>)
                pages.push(<Col className='text-center' key={i + 2}>{this.state.pages}</Col>)
                break
            }
            pages.push(<Col className={`text-center ${i === this.props.currentPage ? 'border' : ''}`} key={i}>{i + 1}</Col>)
        }
        return pages
    }
    render() {
        console.log(this.props)
        return (
            <Row className='p-0 m-1 mt-2 border bg-white shadow'>
                <Col sm={6} className='mx-auto border'>
                    <Row>
                        {this.paginator()}
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductPagination