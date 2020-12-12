import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './navBar.css'

import AuthService from './../../../service/auth.service'


class NavBar extends Component {


    constructor(props) {
        super(props)
        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(res => this.props.setTheUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Navbar className="nav" expand="md" style={{ marginBottom: '50px' }}>
                <Link to="/travel">
                    <Navbar.Brand >
                        <img
                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}OnmyWay</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/preferences">
                            <Nav.Link as="div">Preferences</Nav.Link>
                        </Link>
                        <Link to="/jobs">
                            <Nav.Link as="div">Jobs</Nav.Link>
                        </Link>
                        <Link to="/" onClick={this.logout}>
                            <Nav.Link as="div">Log out</Nav.Link>
                        </Link>
                        <Link to="/profile">
                            <Nav.Link as="div">Profile</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBar