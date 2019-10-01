import React, { Component } from 'react'
import { Col, Row, Container, Button } from 'reactstrap'
import Carousel from '../components/carousel/carousel'
import Footer from '../components/footer/footer'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: '11111' }
    }
    addToCart = (e) => {
        if (this.state.selected) this.props.addToCart(this.state.selected)
    }
    render() {
        console.log('props', this.props)
        return (
            <React.Fragment>
                <Container>
                    {/* image slider */}
                    <Row>
                        <Col className='border'>
                            <Carousel />
                        </Col>
                    </Row>
                    {/* product purchase */}
                    <Row>
                        <Col className='border'>
                            product purchase link
                        </Col>
                    </Row>
                    {/* product description */}
                    <Row>
                        <Col className='border'>
                            product details/specs
                        </Col>
                    </Row>
                    {/* product use casses */}
                    <Row>
                        <Col className='border'>
                            product use cases
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}
export default HomePage