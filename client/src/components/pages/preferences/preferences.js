import React, { Component } from 'react'
import PreferencesService from './../../../service/preferences.service'

import { Form, Button } from 'react-bootstrap'

class PreferencesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            interests: [],
            continent: '',
            skills: [],
            time: '',
        }
        this.preferencesService = new PreferencesService()
    }

    handleInputChange = e => {

        const { name } = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.preferencesService
            .savePreferences(this.state)
            .then(res => this.props.history.push('/jobs'))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>Select all the options that you're interested in</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="interests">
                        <Form.Label>Interests</Form.Label>
                        <Form.Control type="checkbox" name="interests" value={this.state.interests} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="continent">
                        <Form.Label>Continent</Form.Label>
                        <Form.Control type="checkbox" name="continent" value={this.state.continent} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="skills">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="checkbox" name="skills" value={this.state.skills} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="checkbox" name="time" value={this.state.time} onChange={this.handleInputChange} />
                    </Form.Group>
                    
                    <Button variant="dark" type="submit">Show me the magic!</Button>
                </Form>
            </>
        )
    }
}

export default PreferencesForm