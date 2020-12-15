import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            selected: "name"
        }
    }

    inputSearch = e => {
        const { value } = e.target
        this.setState({ search: value }, () => this.props.searchFor(e.target.value, this.state.selected))
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })


    render() {
        return (
            <Form style={{ padding: '0px 15px', width: '900px', marginTop: '20px', display: 'flex' }}>
                <Col lg={8}>
                    <Form.Control type="text" placeholder="Search..." value={this.state.search} onChange={this.inputSearch} />
                </Col>
                <Col lg={4}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="selected" onChange={this.handleInputChange}>
                            <option value="name" >name</option>
                            <option value="location" >location</option>
                            <option value="accommodation">accommodation</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form>
        )
    }
}

export default SearchBar