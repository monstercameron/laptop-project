import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ProdHeader from '../components/header/ProductListHeader'
import ProdFooter from '../components/footer/ProductListFooter'
import ProdElem from '../components/products/ProductListElem'
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <Container>
                    <ProdHeader />
                </Container>
                <Container>
                    <ProdElem />
                    <ProdElem />
                </Container>
                <Container>
                    <ProdFooter />
                </Container>
            </>
        )
    }
}
export default ProductList