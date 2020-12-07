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

        const userName = this.props.loggedInUser ? this.props.loggedInUser.userName : ""
        const name = this.props.loggedInUser ? this.props.loggedInUser.name : ""
        const role = this.props.loggedInUser ? this.props.loggedInUser.role : ""
        const image = this.props.loggedInUser ? this.props.loggedInUser.image : ""
        const description = this.props.loggedInUser ? this.props.loggedInUser.description : ""
        const id = this.props.loggedInUser ? this.props.loggedInUser._id : ""


       
        return (
            <>
                {

                    this.props.loggedInUser ?
                        <Container>
                            this.props.loggedInUser.role === 'USER' ?
                            </Container>
                 }
                </>
            
        )
    }
}

export default Profile