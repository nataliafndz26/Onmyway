import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import JobsService from './../../../../service/jobs.service'
import FilesService from './../../../../service/upload.service'

import './JobForm.css'


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
            preferences: {
                interests: [],
                continent: '',
                skills: [],
                time: ''
            },
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }

        this.jobService = new JobsService()
        this.filesService = new FilesService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handlePrefInputChange = e => this.setState({ preferences: { ...this.state.preferences, [e.target.name]: e.target.value } })

    handleBenefitsInput = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected && selected.push(e.value))
        this.setState({ [e.target.name]: selected })
    }

    handleInputMultiple = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
        this.setState({ preferences: { ...this.state.preferences, [e.target.name]: selected } })
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])


        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({ image: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.jobService
            .saveNewJob(this.state)
            .then(res => this.props.history.push('/profile'))
            .catch(err => console.log(err))

    }


    render() {

        return (

            <div>
                <img className="bg-img" src="https://res.cloudinary.com/nataliafndz26/image/upload/v1607944606/Onmyway/BACKGROUND%20IMAGES/photo-1498307833015-e7b400441eb8_vgwewv.jpg" />
                <Container className="cr-form">
                    <h2 style={{ textAlign: 'center', paddingTop: '70px', paddingBottom: '10px' }}>Do you want to contribute to our community with a new job?</h2>
                    <h3 style={{ textAlign: 'center' }}>Tell us more about it! ;)</h3>
                    <Row style={{ justifyContent: 'center' }}>
                        <Col className="col-form" lg={{ span: 5 }}>
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
                                    <Form.Control name="benefits" as="select" custom multiple onChange={this.handleBenefitsInput}>
                                        <option>Breakfast</option>
                                        <option>Lunch</option>
                                        <option>Dinner</option>
                                        <option>Health insurance</option>
                                        <option>Shared bedroom</option>
                                        <option>Individual bedroom</option>
                                        <option>Some extra money</option>
                                        <option>Laundry</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" onChange={this.handleImageUpload} />
                                </Form.Group>


                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="interests">
                                    <Form.Label>Interests</Form.Label>
                                    <Form.Control name="interests" as="select" custom multiple onChange={this.handleInputMultiple}>
                                        <option>Sabbatical Year</option>
                                        <option>Professional Development</option>
                                        <option>Self-knowledge</option>
                                        <option>Travel Alone</option>
                                        <option>Couple Travel</option>
                                        <option>Digital Nomadism</option>
                                        <option>Learn Languages</option>
                                        <option>Backpacker</option>
                                        <option>Try New Foods</option>
                                        <option>Spiritual Development</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="continent">
                                    <Form.Label>Continent</Form.Label>
                                    <Form.Control type="text" name="continent" as="select" value={this.state.preferences.continent} onChange={this.handlePrefInputChange} >
                                        <option>Select one</option>
                                        <option>Europe</option>
                                        <option>South America</option>
                                        <option>Central America</option>
                                        <option>North America</option>
                                        <option>Asia</option>
                                        <option>Africa</option>
                                        <option>Oceania</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="skills">
                                    <Form.Label>Skills</Form.Label>
                                    <Form.Control name="skills" as="select" custom multiple onChange={this.handleInputMultiple}>
                                        <option>Working with guests</option>
                                        <option>Cleaning</option>
                                        <option>Teaching</option>
                                        <option>Cooking</option>
                                        <option>Community work</option>
                                        <option>Working with animals</option>
                                        <option>IT</option>
                                        <option>Ecological activities</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="time">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type="text" name="time" as="select" value={this.state.preferences.time} onChange={this.handlePrefInputChange} >
                                        <option>Select one</option>
                                        <option>0-6 months</option>
                                        <option>6 months-1 year</option>
                                        <option>More than 1 year</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button className="form-bt" type="submit">Create job</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }

}

export default JobForm