import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import { Form, Button } from 'react-bootstrap'

class JobFormEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {

            job: {
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
        }

        this.jobService = new JobsService()
    }

    componentDidMount = () => {

        const job_id = this.props.match.params.job_id
        
        this.jobService
            .getOneJob(job_id)
            .then(res => this.setState({ job: res.data }))
        .catch(err => console.log (err))
    }

    handleInputChange = e => this.setState({ job: { ...this.state.job, [e.target.name]: e.target.value } })
    
    handleSubmit = e => {
        
        const job_id = this.props.match.params.job_id
        e.preventDefault()
        
        this.jobService

            .editJob(job_id, this.state.job)
            .then(res => {
            this.props.history.push ('/jobs')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                 <h1>Edit this job</h1>

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
                    <Form.Group controlId="benefits">
                        <Form.Label>Benefits</Form.Label>
                    <Form.Control name="benefits" as="select" custom multiple  value={this.state.benefits} onChange={this.handleInputMultiple}>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Health Insurance</option>
                        <option>Shared Bedroom</option>
                        <option>Individual Bedroom</option>
                        <option>Some extra money</option>
                        <option>Laundry</option>
                        </Form.Control>
                    </Form.Group>
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
                    <Button variant="outline-success" type="submit">Edit job</Button>
                </Form>
                            
                </>
        )
    }

}

export default JobFormEdit
