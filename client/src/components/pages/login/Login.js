import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import './Login.css'

import Toastie from './../../shared/toast/Toast'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''    
            },
            showToast: false,
            toastText: ''

        }

        this.authService = new AuthService()
    }    

    handleInputChange = e => this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })

    handleSubmit = e => {

        e.preventDefault()
        
        this.authService
            .login(this.state.user)
            .then(theLoggedInUser => {
                this.props.setTheUser(theLoggedInUser.data)
                this.props.history.push('/travel')
            })
            .catch(err => this.setState({ showToast: true, toastText: err.response.data.message }))
    }

    handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })

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
                <Toastie show={this.state.showToast} handleToast={this.handleToast} toastText={this.state.toastText} />

        </Container>
        )
    }
}

export default Login


    
    
