import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ProdHeader from '../components/header/ProductListHeader'
import ProdFooter from '../components/footer/ProductListFooter'
class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <>
                <Container>
                    <ProdHeader />
                    <this.props.content/>
                    <ProdFooter />
                </Container>
            </>
         )
    }
}
 
export default ProductPage