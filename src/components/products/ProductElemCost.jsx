import React, { Component } from 'react'
class ProductElemCost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: { color: 'rgb(0,0,255)' }
        }
        this.expenseColorization(this.state)
    }
    expenseColorization = (state) => {
        if (this.props.cost < 200) { state.color = { color: 'rgb(0,0,255)' } }
        else if (this.props.cost >= 200 && this.props.cost < 400) { state.color = { color: 'rgb(50,50,150)' } }
        else if (this.props.cost >= 400 && this.props.cost < 600) { state.color = { color: 'rgb(100,150,50)' } }
        else if (this.props.cost >= 600 && this.props.cost < 800) { state.color = { color: 'rgb(150,0,0)' } }
        else if (this.props.cost >= 800 && this.props.cost < 1000) { state.color = { color: 'rgb(200,50,0)' } }
        else if (this.props.cost >= 1000) { state.color = { color: 'rgb(255,0,0)' } }
    }
    render() {
        return (
            <>
                <span style={this.state.color}>${this.props.cost}</span>
            </>
        )
    }
}
export default ProductElemCost