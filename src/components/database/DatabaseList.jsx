import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Vars from '../../variables/vars'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Col, Row, Button } from 'reactstrap'
class DatabaseList extends Component {
    cols = {
        link: {
            Header: "ID",
            columns: [
                {
                    Header: "ID",
                    accessor: "_id"
                },
                {
                    Header: "Link",
                    accessor: "link"
                }
            ]
        },
        brand: {
            Header: "Brand",
            columns: [
                {
                    Header: "Manufacturer",
                    accessor: "mfg"
                },
                {
                    Header: "Family",
                    accessor: "family"
                },
                {
                    Header: "SKU",
                    accessor: "sku"
                },
                {
                    Header: "Price",
                    accessor: "price"
                }
            ]
        },
        cpu: {
            Header: "CPU",
            columns: [
                {
                    Header: "Manufacturer",
                    accessor: "mfg-cpu"
                },
                {
                    Header: "Family",
                    accessor: "family-cpu"
                },
                {
                    Header: "SKU",
                    accessor: "sku-cpu"
                },
                {
                    Header: "Cores",
                    accessor: "cores"
                },
                {
                    Header: "Clock Speed Base",
                    accessor: "base-spd-cpu"
                },
                {
                    Header: "Clock Speed Turbo",
                    accessor: "turbo-spd-cpu"
                }
            ]
        },
        gpu: {
            Header: "GPU",
            columns: [
                {
                    Header: "Manufacturer",
                    accessor: "mfg-gpu"
                },
                {
                    Header: "Family",
                    accessor: "family-gpu"
                },
                {
                    Header: "SKU",
                    accessor: "sku-gpu"
                },
                {
                    Header: "shaders",
                    accessor: "shaders"
                },
                {
                    Header: "Clock Speed Base",
                    accessor: "base-spd-gpu"
                },
                {
                    Header: "Clock Speed Turbo",
                    accessor: "turbo-spd-gpu"
                }
            ]
        },
        ram: {
            Header: "RAM",
            columns: [
                {
                    Header: "clock speed",
                    accessor: "ram-spd"
                },
                {
                    Header: "capacity",
                    accessor: "ram-cap"
                },
                {
                    Header: "slots/upgradeable",
                    accessor: "ram-slots"
                }
            ]
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    mfg: 'Hp',
                    family: 'envy',
                    price: 999.99,
                    sku: 'envy90210',
                    _id: 1,
                    link: null
                },
                {
                    mfg: 'Microsoft',
                    family: 'surface',
                    price: 1999.99,
                    sku: 'envy33156',
                    _id: 2,
                    link: null
                }
            ],
            link: true,
            brand: true,
            cpu: true,
            gpu: false,
            ram: false,
            storage: false,
            wireless: false,
            ports: false,
            misc: false,
            selectedCols: []
        }
        this.state.selectedCols = this.addCols()
        this.state.data = this.addLinksTodata(this.state)
        document.title = `${Vars.brand} | Database`
    }
    addCols = () => {
        let selectedCols = [
            this.cols.link
        ]
        if (this.state.brand) selectedCols.push(this.cols.brand)
        if (this.state.cpu) selectedCols.push(this.cols.cpu)
        if (this.state.gpu) selectedCols.push(this.cols.gpu)
        if (this.state.ram) selectedCols.push(this.cols.ram)
        return selectedCols
    }
    addLinksTodata = (state) => {
        return state.data.map((data, index) => {
            data.link = <Link to={`/products/item/${data._id}`}><Button>Open</Button></Link>
            return data
        })
    }
    handleCheckBox = (e) => {
        this.setState({ [e.target.dataset.checked]: !this.state[e.target.dataset.checked] })
    }
    applyFilter = () => {
        this.setState({ selectedCols: this.addCols() })
    }
    render() {
        // console.log(this.state)
        return (
            <>
                <Row className='p-3 m-1 border bg-white shadow'>
                    <Col sm={2}>
                        <Row>
                            <Col sm={2} className=''>
                                <Button onClick={this.applyFilter} size='sm' color='primary' className='text-capitalize'>
                                    apply columns
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='brand' onChange={this.handleCheckBox} defaultChecked /> Brand
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='cpu' onChange={this.handleCheckBox} defaultChecked /> CPU
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='gpu' onChange={this.handleCheckBox} /> GPU
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='ram' onChange={this.handleCheckBox} /> RAM
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='storage' onChange={this.handleCheckBox} /> Storage
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='wireless' onChange={this.handleCheckBox} /> Wireless
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='ports' onChange={this.handleCheckBox} /> Ports
                            </Col>
                            <Col sm={3} className=''>
                                <input type='checkbox' data-checked='misc' onChange={this.handleCheckBox} /> Misc
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='p-3 m-1 border bg-white shadow'>
                    <Col>
                        <ReactTable
                            data={this.state.data}
                            columns={this.state.selectedCols}
                            defaultPageSize={20}
                            className="-striped -highlight"
                        />
                    </Col>
                </Row>
            </>
        )
    }
}
export default DatabaseList