import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import './Signup.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    
    handleSubmit = e => {

        e.preventDefault()
        
        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.setTheUser(theLoggedInUser.data)
                this.props.history.push('/preferences')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Container>

            <Row>
                <Col>
                    <h1>Do you want to join our community?</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button className="signup-bt" size="sm" type="submit">Become a member</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        )
    }
}

export default Signup