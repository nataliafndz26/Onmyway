import React, { Component } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import UserService from './../../../service/user.service'

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            username: '',
            name: '',
            image: '',
            description: '',
            role: '',
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.userService
            .getUserInfo(this.props.loggedInUser._id)
            .then(res => this.setState({ _id: res.data._id, username: res.data.username, name: res.data.name, image: res.data.image, description: res.data.description, role: res.data.role }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const editedUser = {
            username: this.state.username,
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            role: this.state.role,
        }

        this.userService
            .editUserInfo(this.state._id, editedUser)
            .then(user => this.userService.getUserInfo(user.data._id))
            .then(user => {
                this.props.setTheUser(user.data)
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1>Edit profile</h1>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image (URL)</Form.Label>
                                <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Describe yourself</Form.Label>
                                <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="time">
                                <Form.Label>Time</Form.Label>
                                <Form.Control className="form" as="select" custom value={this.state.role} name="role" onChange={this.handleInputChange}>
                                    <option >USER</option>
                                    <option >HOST</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="dark" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )

    }

}

export default EditUser