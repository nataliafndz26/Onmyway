import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './NavBar.css'

import AuthService from '../../../service/auth.service'


class NavBar extends Component {


    constructor(props) {
        super(props)
        this.state = {
            navBackground: 'transparent'
        }

        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(res => this.props.setTheUser(undefined))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        document.addEventListener('scroll', () => {
            const backgroundcolor = window.scrollY < 20 ? 'transparent' : 'rgba(255, 255, 255, 0.6)';
            this.setState({navBackground: backgroundcolor})
        })
    }


    render() {

        return (
            <Navbar className="navbar" style={{ zIndex: '1000', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' , backgroundColor: this.state.navBackground}}  expand="md" fixed="top">
                <Link to="/travel">
                    <Navbar.Brand className="omw">
                        <img
                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}OnmyWay</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="hover" to="/preferences">
                            <Nav.Link style={{color:'black'}}  as="div">Preferences</Nav.Link>
                        </Link>
                        <Link className="hover" to="/jobs">
                            <Nav.Link style={{color:'black'}} as="div">Jobs</Nav.Link>
                        </Link>
                        <Link className="hover" to="/statistics">
                            <Nav.Link style={{ color: 'black' }} as="div">Statistics</Nav.Link>
                        </Link>
                        <Link className="hover" to="/" onClick={this.logout}>
                            <Nav.Link style={{color:'black'}}as="div">Log out</Nav.Link>
                        </Link>
                        <Link className="hover" to="/profile">
                            <Nav.Link style={{color:'black'}} as="div">Profile</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBar