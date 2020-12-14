import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import './Login.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.authService = new AuthService()
    }    

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        console.log (this.authService.baseUrl)

        e.preventDefault()
        
        this.authService
            .login(this.state)
            .then(theLoggedInUser => {
                console.log(this.props)
                this.props.setTheUser(theLoggedInUser.data)
                this.props.history.push('/travel')
            })
            .catch(err => console.log(err))
    }

    render() {
        
        return (

            <Container>

            <Row>
                <Col>
                    <h1>Hi again!</h1>
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
                        <Button className="login-bt" size="sm" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Login


    
    
