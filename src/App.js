import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import HomePage from './layouts/HomePage'
import ProductList from './layouts/ProductList'
import ProductPage from './layouts/ProductPage'
import ProdElem from './components/products/ProductElem'
import DBList from './components/database/DatabaseList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] }
  }
  addToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] })
  }
  passFnsToChild = () => {
    return {
      addToCart: this.addToCart
    }
  }
  render() {
    console.log('state', this.state)
    return (
      <Router>
        <Route exact path="/" component={() => <HomePage {...this.passFnsToChild()} />} />
        <Route exact path="/products" component={() => <Redirect exact to='/products/page/1' />} />
        <Route exact path="/products/page/:page" component={() => <ProductList {...this.passFnsToChild()} />} />
        <Route exact path="/products/item/:id" component={() => <ProductPage {...this.passFnsToChild()} content={ProdElem} />} />
        <Route exact path="/database" component={() => <ProductPage {...this.passFnsToChild()} content={DBList} />} />
        <Route exact path="/database/:id" component={() => <ProductPage {...this.passFnsToChild()} content={ProdElem} />} />
        <Route path="/about" component={() => <div>about</div>} />
        <Route path="/topics" component={() => <div>topics</div>} />
      </Router>
    )
  }
}
export default App
