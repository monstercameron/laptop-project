import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
class ProductListElem extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className='border p-0 m-1'>
                <Col sm={2} className='p-1'>
                    <img src='https://via.placeholder.com/200' alt='' className='img-fluid img-img-thumbnail' />
                </Col>
                <Col sm={10} className=''>
                    <Row>
                        <Col sm={2} className=' text-center'>
                            date
                        </Col>
                        <Col sm={8} className=' text-center'>
                            title
                        </Col>
                        <Col sm={2} className=' text-center'>
                            cost
                        </Col>
                    </Row>
                    <Row>
                        <Col className=''>
                            blurb about new product
                        </Col>
                    </Row>
                </Col>
            </Row>
         )
    }
}
export default ProductListElem