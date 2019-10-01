import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import './style.css'
class ProductListFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row className='border p-0 m-1 mt-2 bg-white shadow'>
                <Col className='p-1 m-0'>
                    <Row>
                        <Col className='text-center text-capitalize'>
                            <Row className='p-0 m-0'>
                                <Col className='border pt-2 footer-menu-option'>
                                    <a href='http://www.earlcameron.com/' target='_new'><h3 className='text-dark'>CV/Resume</h3></a>
                                </Col>
                                <Col className='border pt-2 footer-menu-option'>
                                    <Link to='/contact' ><h3 className='text-dark'>contact us</h3></Link>
                                </Col>
                                <Col className='border pt-2 footer-menu-option'>
                                    <Link to='/tech' ><h3 className='text-dark'>technology</h3></Link>
                                </Col>
                                <Col className='border pt-2 footer-menu-option'>
                                    <a href='#top' ><h3 className='text-dark'>to top</h3></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductListFooter