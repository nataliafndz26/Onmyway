import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

import EmailService from './../../../service/nodemailer.service'

class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: this.props.userInfo.email,
            userName: this.props.userInfo.name,
            hostEmail: this.props.hostInfo.email,
            hostName: this.props.hostInfo.name,
            subject: "Hey! I´m interested in your job offer",
            message: ""
        }
        this.emailService = new EmailService()
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        this.sendEmail()
        this.props.hideModal()
    }

    sendEmail = () => {
        this.emailService
            .sendEmail(this.state)
            .then(res => console.log('EMAIL SENT', res))
            .catch(err => console.log('Error Email', err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="from">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="email" name="from" value={`${this.state.userName} <${this.state.userEmail}>`} disabled />
                </Form.Group>
                <Form.Group controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="email" name="to" value={`${this.state.hostName} <${this.state.hostEmail}>`} disabled />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={this.state.subject} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" as="textarea" name="message" value={this.state.message} onChange={this.handleInput} />
                </Form.Group>
                <Button variant="secondary" type="submit" block>Submit</Button>
            </Form>
        )
    }
}

export default Email