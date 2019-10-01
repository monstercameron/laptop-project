import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import ProdCost from '../products/ProductElemCost'
import './style.css'
class ProductListElem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.slugTrimmer()
        }
    }
    slugTrimmer = () => {
        if (this.props.slug.length > 400) return this.props.slug.slice(0, 400).trimRight().concat('...')
        else return this.props.slug
    }
    render() {
        return (
            <Row className='border p-0 m-1 bg-white shadow expand'>
                <Col sm={2} className='p-1'>
                    <Link to={`/products/${this.props._id}`}>
                        <img src={this.props.imgUrl} alt='' className='img-fluid img-img-thumbnail' />
                    </Link>
                </Col>
                <Col sm={10} className=''>
                    <Row>
                        <Col sm={2} className='text-center'>
                            {this.props.date}
                        </Col>
                        <Col sm={8} className='text-center text-capitalize'>
                            <Link to={`/products/${this.props._id}`}>{this.props.title}</Link>
                        </Col>
                        <Col sm={2} className='text-center'>
                            <ProdCost cost={this.props.cost} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='border-top'>
                            {this.state.slug}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductListElem