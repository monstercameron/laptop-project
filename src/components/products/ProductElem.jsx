import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import KeyData from './ProductElemData'
class ProductElem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    keyDataList = () => {
        const dataSet = [
            {keyProp:'brand', value:'hp'},
            {keyProp:'brand', value:'acer'},
            {keyProp:'brand', value:'microsoft'}
        ]
        const style = {
            backgroundColor:'rgba(0,0,0,0.05)'
        }
        return dataSet.map((data, index) => {
            if (index % 2 === 0) return <KeyData key={index} keyProp={data.keyProp} value={data.value} styleProp={style}/>
            else return <KeyData key={index} keyProp={data.keyProp} value={data.value}/>
        })
    }
    render() {
        return (
            <Row className='p-0 pb-1 m-1 border bg-white expand'>
                <Col lg={12} className='p-1 m-0'>
                        <img src='https://via.placeholder.com/960x540' alt='' width='100%' className='img-fluid' />
                </Col>
                {this.keyDataList()}
            </Row>
        )
    }
}
export default ProductElem