import React, { Component } from 'react'
import JobsService from '../../../service/jobs.service'
import PreferencesService from '../../../service/preferences.service'
import UserService from '../../../service/user.service'

import './JobDetails.css'


import { Container, Row, Col, Spinner } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class JobDetails extends Component {
    constructor() {
        super()
        this.state = {
            job: undefined
        }
        this.jobsService = new JobsService()
        this.preferencesService = new PreferencesService()
        this.userService = new UserService()
    }

    componentDidMount = () => {
        const job_id = this.props.match.params.job_id

        this.jobsService
            .getOneJob(job_id)
            .then(res => this.setState({ job: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {
                    this.state.job
                        ?
                        <Row>
                            <img className="img" src={this.state.job.image} />
                            <Col className='job-info' md={12}>
                                <p>Location: {this.state.job.location}</p>
                                <p>Accommodation: {this.state.job.accommodation}</p>
                                <p>Timetable: {this.state.job.timetable}</p>
                                <p>Host:{this.state.job.user.name}</p>
                                <p>Description: {this.state.job.description}</p>
                                <p>Benefits:</p>
                                <ul>
                                    {this.state.job.benefits.map(elm =>
                                        <li key={elm}>{elm}</li>
                                    )}
                                </ul>
                                <p>Interests:</p>
                                <ul>
                                    {this.state.job.preferences.interests.map(elm =>
                                        <li key={elm}>{elm}</li>
                                    )}
                                </ul>
                                <p>Skills Required</p>
                                <ul>
                                    {this.state.job.preferences.skills.map(elm =>
                                        <li key={elm}>{elm}</li>
                                    )}
                                </ul>


                            </Col>
                        </Row>
                        :
                        <Spinner animation="border" variant="primary" />
                }
            </Container>
        )
    }
}

export default JobDetails