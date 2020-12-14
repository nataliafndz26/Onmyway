import React, { Component } from 'react'

import Login from './../login/Login'
import Signup from './../signup/Signup'
import './Home.css'
import Video from './video/video2.mov'
import PopUp from './../../shared/popUp/PopUp'

import { Container, Row, Button } from 'react-bootstrap'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            isloggingIn: false,
        }
    }

    handleModalLogin = visible => this.setState({
        showModal: visible,
        isloggingIn: true
    })
    handleModalSignup = visible => this.setState({
        showModal: visible,
        isloggingIn: false
    })

    
    
    render() {
        return (
            <>
                <video autoPlay='autoplay' playsInline loop style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover",  transform: "translate (-50%, -50%)", zIndex: "-1" }}>
                    <source src={Video} type="video/mp4" />
                </video>   
                <div className="typewriter">
                    <p><strong>OnmyWay</strong> is a collaborative network for those looking for a unique travel experience. Develop skills, learn languages and meet others through cultural immersion with local hosts.</p>
                </div>
                <Container className="home">
                    
                    <Row>
                        
                        <Button onClick={() => this.handleModalLogin(true)} className="login" variant="light" size="sm">Login</Button>
                    
                        <Button onClick={() => this.handleModalSignup(true)} className= "signup" variant="outline-light" size="sm">Become a member</Button>

                     </Row>
                </Container>
                
                <PopUp show={this.state.showModal} onHide={() => this.handleModalLogin(false)}>
                    
                        {this.state.isloggingIn ?
                         <Login {...this.props} setTheUser={this.props.setTheUser} closeModal={() => this.handleModalLogin(false)}/>
                         :
                         <Signup {...this.props} closeModal={() => this.handleModalSignup(false)}/>
                         }
                  
                </PopUp>
                </>
        )
    }

}

export default Home

