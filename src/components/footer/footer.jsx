import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Container className='p-2 m-3 mx-auto rounded shadow'>
                <Row>
                    <Col className=''>
                        <Row>
                            <Col sm={3} className='text-center'>
                                Home
                            </Col>
                            <Col sm={3} className='text-center'>
                                About
                            </Col>
                            <Col sm={3} className='text-center'>
                                Contacts
                            </Col>
                            <Col sm={3} className='text-center'>
                                To Top ^
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
         )
    }
}
export default Footer