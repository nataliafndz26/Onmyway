import React, { Component } from 'react'

import { Form, Button } from 'react-bootstrap'
import JobsService from '../../../../service/jobs.service'

class JobForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            location: '',
            accommodation: '',
            timetable: '',
            benefits: [], 
            image: '',
            description: '',
            preferences: [],
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }

        this.jobService = new JobsService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    // handleInputMultiple = e => {
    //     console.log(e)
    //     const selected = []
    //     e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
    //     this.setState({ [e.target.name]: selected })
    // }
    
    handleSubmit = e => {
        e.preventDefault()

        this.jobService
            .saveNewJob(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (

            <>
                <h1>Create a new job</h1>

                <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" name="location" value={this.state.location} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="accommodation">
                            <Form.Label>Accommodation</Form.Label>
                            <Form.Control type="text" name="accommodation" value={this.state.accommodation} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="timetable">
                            <Form.Label>Timetable</Form.Label>
                            <Form.Control type="text" name="timetable" value={this.state.timetable} onChange={this.handleInputChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="benefits">
                            <Form.Label>Benefits</Form.Label>
                        <Form.Control name="benefits" custom multiple onChange={this.handleInputChange}>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Health Insurance</option>
                            <option>Shared Bedroom</option>
                            <option>Individual Bedroom</option>
                            <option>Some extra money</option>
                            <option>Laundry</option>
                            </Form.Control>
                        </Form.Group> */}
                        <Form.Group controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="preferences">
                            <Form.Label>Preferences</Form.Label>
                            <Form.Control type="text" name="preferences" value={this.state.preferences} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button variant="outline-success" type="submit">Create job</Button>
                    </Form>
                </>
            )
    }
    
}

export default JobForm