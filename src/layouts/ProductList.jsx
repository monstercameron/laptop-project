import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import ProdHeader from '../components/header/ProductListHeader'
import ProdFooter from '../components/footer/ProductListFooter'
import ProdElem from '../components/products/ProductListElem'
import ProdPage from '../components/products/ProductPagination'
import Vars from '../variables/vars'
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: parseInt(this.props.match.params.page),
            pageCount: 105,
            products: [
                {
                    _id: '1',
                    date: '2/8/10',
                    title: 'Hp envy',
                    cost: 999.99,
                    imgUrl: 'https://via.placeholder.com/200',
                    slug: `a short blurb goes herea short blurb goes herea short blurb 
                    goes herea short blurb goes herea short blurb goes herea short blur
                    b goes herea short blurb goes herea short blurb goes herea short b
                    lurb goes here a short blurb goes herea short blurb goes herea short
                     blurb goes herea short blurb goes herea short blurb goes herea short
                      blurb goes herea short blurb goes herea short blurb goes herea short
                      a short blurb goes herea short blurb goes herea short blurb goes herea
                       short blurb goes here blurb goes here`
                },
                {
                    _id: '2',
                    date: '2/8/19',
                    title: 'hp touchsmart',
                    cost: 329.99,
                    imgUrl: 'https://via.placeholder.com/200',
                    slug: 'a short blurb goes here'
                },
            ]
        }
        document.title = `${Vars.brand} | Products`
    }
    listOfProducts = () => {
        return this.state.products.map((product, index) => {
            return <ProdElem key={index} {...product} />
        })
    }
    changePage = (page) => {
        this.props.history.push(`/products/page/${page}`)
        this.setState({currentPage: page})
    }
    render() {
        return (
            <>
                <Container className=''>
                    <ProdHeader />
                    {this.listOfProducts()}
                    <ProdPage count={this.state.pageCount} currentPage={this.state.currentPage} changePage={this.changePage} />
                    <ProdFooter />
                </Container>
            </>
        )
    }
}
export default withRouter(ProductList)