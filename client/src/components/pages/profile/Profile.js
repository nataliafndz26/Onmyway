import React, { Component } from 'react'
import './Profile.css'
import UserService from './../../../service/user.service'
import { Container, Row, Col, Button } from 'react-bootstrap'

class Profile extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            edit: false
        }

        this.userService = new UserService ()
    }

    buildProfile = () => {

        this.setState({ edit: true })
    }

    closeEdit = () => {
        this.setState({ edit: false })
    }

    render() {
        
       
        // return (
        //     <>
        //         {
        //             this.props.loggedInUser.role === 'USER' ?
        //         }
        //         </>
            
        // )
    }
}