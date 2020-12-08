import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import AuthService from './../../../service/auth.service'


class NavBar extends Component {


    constructor() {
        super()
        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '50px' }}>
                <Link to="/">
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
                        <Link to="/Jobs">
                            <Nav.Link as="div">Jobs</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link as="div" onClick={this.logout}>Log out</Nav.Link>
                        </Link>
                        <Link to="/profile">
                            <Nav.Link as="div">Profile</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}


export default NavBar