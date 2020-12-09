import React, { Component } from 'react'
import PreferencesService from './../../../service/preferences.service'
import UserService from './../../../service/user.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import './preferences.css'

class PreferencesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            interests: [],
            continent: '',
            skills: [],
            time: '',
            
        }
        this.userService= new UserService() 
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
        
        this.preferencesService
            .savePreferences(this.state)
            .handleSubmit2(preference._id)
            .then(res => this.props.history.push('/jobs'))
            .catch(err => console.log(err))
    }

    handleSubmit2 = (preferenceId) => {
        const preferences = [...this.props.loggedInUser.preferences]
        preferences.push(preferenceId)
        const updatedPreference = [...preferences]
        const updateUser = { ...this.props.loggedInUser, preferences: updatedPreference }
        this.userService.editUserInfo(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))   
    }


    render() {

        return (
            <>
                <h1>Select all the options that you're interested in</h1>
                <hr />

                <Container>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="interests">
                            <Form.Label>Interests</Form.Label>
                            <Row>
                                <Form.Control className="form myselect" as="select" custom multiple name="interests" onChange={this.handleInputMultiple}>
                                    <option className="option" >Sabbatical Year</option>
                                    <option className="option">Professional Development</option>
                                    <option className="option">Self-knowledge</option>
                                    <option className="option">Travel Alone</option>
                                    <option className="option">Couple Travel</option>
                                    <option className="option">Digital Nomadism</option>
                                    <option className="option">Learn Languages</option>
                                    <option className="option">Backpacker</option>
                                    <option className="option">Try New Foods</option>
                                    <option className="option">Spiritual Development</option>

                                </Form.Control>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="Continent">
                            <Form.Label>Continent</Form.Label>
                            <Row>
                                <Form.Control className="form" as="select" custom value={this.state.continent} name="continent" onChange={this.handleInputChange}>
                                    <option className="option">Europe</option>
                                    <option className="option">South America</option>
                                    <option className="option">Central America</option>
                                    <option className="option">North America</option>
                                    <option className="option">Asia</option>
                                    <option className="option">Africa</option>
                                    <option className="option">Oceania</option>
                                </Form.Control>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="skills">
                            <Form.Label>Skills</Form.Label>
                            <Row>
                                <Form.Control className="form" as="select" custom multiple name="skills" onChange={this.handleInputMultiple}>
                                    <option className="option">Working with guests</option>
                                    <option className="option">Cleaning</option>
                                    <option className="option">Teaching</option>
                                    <option className="option">Cooking</option>
                                    <option className="option">Community work</option>
                                    <option className="option">Working with animals</option>
                                    <option className="option">IT</option>
                                    <option className="option">Ecological activities</option>
                                </Form.Control>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Row>
                                <Form.Control className="form" as="select" custom value={this.state.time} name="time" onChange={this.handleInputChange}>
                                    <option className="option">0-6 months</option>
                                    <option className="option">6 months-1 year</option>
                                    <option className="option">More than 1 year</option>
                                </Form.Control>
                            </Row>
                        </Form.Group>
                        <Button variant="dark" type="submit">Show me the magic!</Button>
                    </Form>
                </Container>

            </>
        )
    }
}

export default PreferencesForm


{/* <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="interests">
                        <Form.Label>Interests</Form.Label>
                        <Form.Control type="select" name="interests" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="continent">
                        <Form.Label>Continent</Form.Label>
                        <Form.Control type="select" name="continent" value={this.state.continent} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="skills">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="select" name="skills" value={this.state.skills} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="select" name="time" value={this.state.time} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">Show me the magic!</Button>
                </Form> */}