import React, { Component } from 'react'

import Login from './../login/Login'
import Signup from './../signup/Signup'
import './Home.css'

import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            showModal1: false,
            showModal2: false
        }
    }

    handleModalLogin = visible => this.setState({
        showModal1: visible
    })
    handleModalSignup = visible => this.setState({
        showModal2: visible
    })
    
    render() {
        return (
            <>
                <Container>
                    <Row>
                        
                            <Button onClick={() => this.handleModalLogin(true)} className="login" variant="outline-success" size="sm">Login</Button>
                    
                            <Button onClick={() => this.handleModalSignup(true)} className= "signup" variant="outline-success" size="sm">Become a member</Button>
                        
                        
                        </Row>
                </Container>
                
                <Modal show={this.state.showModal1} onHide={() => this.handleModalLogin(false)}>
                    <Modal.Body>
                        <Login closeModal={() => this.handleModalLogin(false)}/>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showModal2} onHide={() => this.handleModalSignup(false)}>
                    <Modal.Body>
                        <Signup closeModal={() => this.handleModalSignup(false)}/>
                    </Modal.Body>
                </Modal>
                </>
        )
    }

}

export default Home

