import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import './style.css'
class ProductListHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row id='top' className='border shadow p-0 m-1 mb-2 bg-white'>
                <Col className='p-1 m-0'>
                    <Row className='m-0 p-0'>
                        <img src='https://via.placeholder.com/768x190' alt='' width='100%' className='img-fluid' />
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <Row className='p-0 m-0'>
                                <Col sm={3} className='border pt-2 header-menu-option'>
                                    <Link to='/products'><h2 className='text-capitalize text-dark'>home</h2></Link>
                                </Col>
                                <Col sm={3} className='border pt-2 header-menu-option'>
                                    <Link to='/products'><h2 className='text-capitalize text-dark'>database</h2></Link>
                                </Col>
                                <Col sm={3} className='border pt-2 header-menu-option'>
                                    <Link to='/products'><h2 className='text-capitalize text-dark'>add device</h2></Link>
                                </Col>
                                <Col sm={3} className='border pt-2 header-menu-option'>
                                    <Link to='/products'><h2 className='text-capitalize text-dark'>contact us</h2></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductListHeader