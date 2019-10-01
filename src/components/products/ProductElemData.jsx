import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
class ProductElementData extends Component {
    state = {}
    render() {
        return (
            <Col lg={12}>
                <Row className='p-0 m-0' style={this.props.style}>
                    <Col sm={3} className='border-right text-center'>{this.props.keyProp}</Col>
                    <Col sm={9} className='text-center'>{this.props.value}</Col>
                </Row>
            </Col>
        )
    }
}
export default ProductElementData