import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
class ProductListFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row className='border p-0 m-1'>
                <Col className='p-1 m-0'>
                    <Row>
                        <Col className='text-center'>
                            <Row className='p-0 m-0'>
                                <Col className='border'>
                                    <h2>CV/Resume</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>contact us</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>technology</h2>
                                </Col>
                                <Col className='border'>
                                    <h2>to top</h2>
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