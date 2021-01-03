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
                <div className="email-div" style={{display:'flex', alignItems:'baseline'}}>
                    <img className="email" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png" style={{ width: '33px', height: '28px', marginLeft:'4px' }} alt="Gmail icon"></img><h2 style={{fontWeight:'bold'}}>Email</h2>
                    </div>
                <h5 style={{marginTop:'18px', marginBottom:'25px'}}>If you are interested in this job offer, you can apply by sending an email to {this.state.hostName} ;) </h5>
                <Form.Group controlId="from">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="email" name="from" value={`${this.state.userName}`} disabled />
                </Form.Group>
                <Form.Group controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="email" name="to" value={`${this.state.hostName}`} disabled />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={this.state.subject} onChange={this.handleInput} />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" as="textarea" name="message" value={this.state.message} onChange={this.handleInput} />
                </Form.Group>
                <Button className="email-bt" type="submit" block>Send email</Button>
            </Form>
        )
    }
}

export default Email