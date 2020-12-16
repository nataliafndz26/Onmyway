import React, { Component } from 'react'
import PreferencesService from '../../../service/preferences.service'
import UserService from '../../../service/user.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Preferences.css'

class PreferencesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            interests: [],
            continent: '',
            skills: [],
            time: '',

        }
        this.userService = new UserService()
        this.preferencesService = new PreferencesService()
    }

    handleInputMultiple = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
        this.setState({ [e.target.name]: selected })
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })


    handleSubmit = e => {
        e.preventDefault()

        if (this.props.loggedInUser.preferences) {
            this.preferencesService
                .editPreferences(this.props.loggedInUser.preferences, this.state)
                .then(res => { 
                    this.props.setTheUser(res.data)
                    this.props.history.push('/jobs')
                }).catch(err => console.log(err))

        } else {

            this.preferencesService
                .savePreferences(this.state, this.props.loggedInUser._id)
                .then(res => {
                    this.props.setTheUser(res.data)
                    this.props.history.push('/jobs')
                })
                .catch(err => console.log(err))
        }
    }

    render() {

        return (
            <>
                <h1 style={{marginTop:'70px', fontSize:'30px', marginLeft: '30px'}}>Select the options you're interested in</h1>
                <hr />

                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="interests">
                                    <Form.Label>Interests</Form.Label>
                                    <Form.Control className="form myselect" as="select" custom multiple name="interests" onChange={this.handleInputMultiple}>
                                        <option className="option sy" >Sabbatical Year</option>
                                        <option className="option pd">Professional Development</option>
                                        <option className="option sk">Self-knowledge</option>
                                        <option className="option ta">Travel Alone</option>
                                        <option className="option ct">Couple Travel</option>
                                        <option className="option dn">Digital Nomadism</option>
                                        <option className="option ll">Learn Languages</option>
                                        <option className="option b">Backpacker</option>
                                        <option className="option tnf">Try New Foods</option>
                                        <option className="option sd">Spiritual Development</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="skills">
                                    <Form.Label>Skills</Form.Label>
                                    <Form.Control className="form myselect" as="select" custom multiple name="skills" onChange={this.handleInputMultiple}>
                                        <option className="option wwg">Working with guests</option>
                                        <option className="option cl">Cleaning</option>
                                        <option className="option te">Teaching</option>
                                        <option className="option co">Cooking</option>
                                        <option className="option cw">Community work</option>
                                        <option className="option wwa">Working with animals</option>
                                        <option className="option it">IT</option>
                                        <option className="option ea">Ecological activities</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="Continent">
                                    <Form.Label>Continent</Form.Label>
                                    <Form.Control className="form" as="select" custom value={this.state.continent} name="continent" onChange={this.handleInputChange}>
                                        <option className="option">Europe</option>
                                        <option className="option">South America</option>
                                        <option className="option">Central America</option>
                                        <option className="option">North America</option>
                                        <option className="option">Asia</option>
                                        <option className="option">Africa</option>
                                        <option className="option">Oceania</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="time">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control className="form" as="select" custom value={this.state.time} name="time" onChange={this.handleInputChange}>
                                        <option className="option">0-6 months</option>
                                        <option className="option">6 months-1 year</option>
                                        <option className="option">More than 1 year</option>
                                    </Form.Control>
                                </Form.Group>
                                <Link className="magic" style={{textDecoration: 'none'}} type="submit">
                                <svg width="277" height="62">
                                            <defs>
                                                <linearGradient id="grad2">
                                                    <stop offset="0%" stop-color="rgb(153, 0, 120)"/>
                                                    <stop offset="100%" stop-color="rgb(255, 18, 97)"/>
                                                </linearGradient>
                                            </defs>
                                            <rect x="5" y="7" rx="5" fill="none" stroke="url(#grad2)" width="183" height="40"></rect>
                                        </svg>
                                            <span>Show me the magic!</span>
                            </Link>
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </>
        )
    }
}

export default PreferencesForm