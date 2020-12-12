import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import { Container,Row, Form, Button } from 'react-bootstrap'
import FilesService from './../../../../service/upload.service'

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
                preferences: {
                    interests: [],
                    continent: '',
                    skills: [],
                    time: ''
                },
                user: this.props.loggedInUser ? this.props.loggedInUser._id : ''

            }
        }

        this.jobService = new JobsService()
        this.filesService = new FilesService()
    }

    componentDidMount = () => {

        const job_id = this.props.match.params.job_id

        console.log(this.props)

        this.jobService
            .getOneJob(job_id)
            .then(res => this.setState({ job: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ job: { ...this.state.job, [e.target.name]: e.target.value } })

    handlePrefInputChange = e => {
        const jobCopy = { ...this.state.job }
        jobCopy.preferences[e.target.name] = e.target.value
        this.setState({ job: jobCopy })
    }

    handleBenefitsInput = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
        const jobCopy = { ...this.state.job }
        jobCopy.benefits = selected
        this.setState({ job: jobCopy })
    }

    handleInputMultiple = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
        const jobCopy = { ...this.state.job }
        jobCopy.preferences[e.target.name] = selected
        this.setState({ job: jobCopy })

    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])


        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    job: { ...this.state.job, image: response.data.secure_url }
                })
            })
            .catch(err => console.log(err))
    }


    handleSubmit = e => {

        const job_id = this.props.match.params.job_id
        e.preventDefault()

        this.jobService

            .editJob(job_id, this.state.job)
            .then(res => {
                this.props.history.push('/jobs')
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.job.preferences)
        return (
            <div>
                <img className="bg-img" src="https://images.unsplash.com/photo-1491131346874-e9854a44e6ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                <Container className="ed-form">
                    <h1 style={{ textAlign: 'center' }}>Edit this job</h1>
                    <Row style={{ justifyContent: 'center' }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.job.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" name="location" value={this.state.job.location} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="accommodation">
                                <Form.Label>Accommodation</Form.Label>
                                <Form.Control type="text" name="accommodation" value={this.state.job.accommodation} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="timetable">
                                <Form.Label>Timetable</Form.Label>
                                <Form.Control type="text" name="timetable" value={this.state.job.timetable} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="benefits">
                                <Form.Label>Benefits</Form.Label>
                                <Form.Control name="benefits" as="select" custom multiple onChange={this.handleBenefitsInput}>
                                    <option selected={this.state.job.benefits.includes("Breakfast") ? true : false}>Breakfast</option>
                                    <option selected={this.state.job.benefits.includes("Lunch") ? true : false}>Lunch</option>
                                    <option selected={this.state.job.benefits.includes("Dinner") ? true : false}>Dinner</option>
                                    <option selected={this.state.job.benefits.includes("Health insurance") ? true : false}>Health Insurance</option>
                                    <option selected={this.state.job.benefits.includes("Shared bedroom") ? true : false}>Shared Bedroom</option>
                                    <option selected={this.state.job.benefits.includes("Individual bedroom") ? true : false}>Individual Bedroom</option>
                                    <option selected={this.state.job.benefits.includes("Some extra money") ? true : false}>Some extra money</option>
                                    <option selected={this.state.job.benefits.includes("Laundry") ? true : false}>Laundry</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" value={this.state.job.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="interests">
                                <Form.Label>Interests</Form.Label>
                                <Form.Control name="interests" as="select" custom multiple onChange={this.handleInputMultiple}>
                                    <option selected={this.state.job.preferences.interests.includes("Sabbatical Year") ? true : false}>Sabbatical Year</option>
                                    <option selected={this.state.job.preferences.interests.includes("Professional Development") ? true : false}>Professional Development</option>
                                    <option selected={this.state.job.preferences.interests.includes("Self-knowledge") ? true : false}>Self-knowledge</option>
                                    <option selected={this.state.job.preferences.interests.includes("Travel Alone") ? true : false}>Travel Alone</option>
                                    <option selected={this.state.job.preferences.interests.includes("Couple Travel") ? true : false}>Couple Travel</option>
                                    <option selected={this.state.job.preferences.interests.includes("Digital Nomadism") ? true : false}>Digital Nomadism</option>
                                    <option selected={this.state.job.preferences.interests.includes("Learn Languages") ? true : false}>Learn Languages</option>
                                    <option selected={this.state.job.preferences.interests.includes("Backpacker") ? true : false}>Backpacker</option>
                                    <option selected={this.state.job.preferences.interests.includes("Try New Foods") ? true : false}>Try New Foods</option>
                                    <option selected={this.state.job.preferences.interests.includes("Spiritual Development") ? true : false}>Spiritual Development</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="continent">
                                <Form.Label>Continent</Form.Label>
                                <Form.Control type="text" name="continent" as="select" onChange={this.handlePrefInputChange} >
                                    <option>Select one</option>
                                    <option selected={this.state.job.preferences.interests.includes("Europe") ? true : false}>Europe</option>
                                    <option selected={this.state.job.preferences.interests.includes("South America") ? true : false}>South America</option>
                                    <option selected={this.state.job.preferences.interests.includes("Central America") ? true : false}>Central America</option>
                                    <option selected={this.state.job.preferences.interests.includes("North America") ? true : false}>North America</option>
                                    <option selected={this.state.job.preferences.interests.includes("Asia") ? true : false}>Asia</option>
                                    <option selected={this.state.job.preferences.interests.includes("Africa") ? true : false}>Africa</option>
                                    <option selected={this.state.job.preferences.interests.includes("Oceania") ? true : false}>Oceania</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="skills">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control name="skills" as="select" custom multiple onChange={this.handleInputMultiple}>
                                    <option selected={this.state.job.preferences.skills.includes("Working with guests") ? true : false}>Working with guests</option>
                                    <option selected={this.state.job.preferences.skills.includes("Cleaning") ? true : false}>Cleaning</option>
                                    <option selected={this.state.job.preferences.skills.includes("Teaching") ? true : false}>Teaching</option>
                                    <option selected={this.state.job.preferences.skills.includes("Cooking") ? true : false}>Cooking</option>
                                    <option selected={this.state.job.preferences.skills.includes("Community work") ? true : false}>Community work</option>
                                    <option selected={this.state.job.preferences.skills.includes("Working with animals") ? true : false}>Working with animals</option>
                                    <option selected={this.state.job.preferences.skills.includes("IT") ? true : false}>IT</option>
                                    <option selected={this.state.job.preferences.skills.includes("Ecological activities") ? true : false}>Ecological activities</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="time">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="text" name="time" as="select" onChange={this.handlePrefInputChange} >
                                    <option>Select one</option>
                                    <option selected={this.state.job.preferences.time.includes("0-6 months") ? true : false}>0-6 months</option>
                                    <option selected={this.state.job.preferences.time.includes("6 months-1 year") ? true : false}>6 months-1 year</option>
                                    <option selected={this.state.job.preferences.time.includes("More than 1 year") ? true : false}>More than 1 year</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="outline-success" type="submit">Edit job</Button>
                        </Form>
                    </Row>
                </Container>

            </div>
        )
    }

}

export default JobFormEdit
