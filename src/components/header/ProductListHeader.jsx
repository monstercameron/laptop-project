import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
class ProductListHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row className='border p-0 m-1'>
                <Col className='p-1 m-0'>
                    <Row className='m-0 p-0'>
                        <img src='https://via.placeholder.com/768x190' alt='' width='100%' className='img-fluid' />
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <Row className='p-0 m-0'>
                                <Col className='border'>
                                    <h2>home</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>Database</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>Add Device</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>contact us</h2>
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