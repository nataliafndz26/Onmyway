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
            console.log(this.state.navBackground)
            const backgroundcolor = window.scrollY < 20 ? 'transparent' : 'rgba(255, 255, 255, 0.6)';
            this.setState({navBackground: backgroundcolor})
        })
    }


    render() {

        return (
            <Navbar className="navbar" style={{ zIndex: '1000', borderBottom: '1px solid rgba(0, 0, 0, 0.4)' , backgroundColor: this.state.navBackground}}  expand="md" fixed="top">
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
                        <Link className="preferences" to="/preferences">
                            <Nav.Link  as="div">Preferences</Nav.Link>
                        </Link>
                        <Link className="jobs" to="/jobs">
                            <Nav.Link as="div">Jobs</Nav.Link>
                        </Link>
                        <Link className="logout" to="/" onClick={this.logout}>
                            <Nav.Link as="div">Log out</Nav.Link>
                        </Link>
                        <Link className="profile-nav" to="/profile">
                            <Nav.Link as="div">Profile</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBar