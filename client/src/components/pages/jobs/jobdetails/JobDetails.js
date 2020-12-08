import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import PreferencesService from '../../../../service/preferences.service'
import UserService from '../../../../service/user.service'

import './JobDetails.css'


import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class JobDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: undefined,
            favourites: this.props.loggedInUser ? this.props.loggedInUser.favourites : [],
            applied: this.props.loggedInUser ? this.props.loggedInUser.applied : [],
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

    saveFav = (jobId) => {
        const favourites = [...this.props.loggedInUser.favourites]
        favourites.push(jobId)
        const updatedFavourites = [...favourites]
        const updateUser = { ...this.props.loggedInUser, favourites: updatedFavourites }
        this.userService.editUserInfo(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))
        this.setState({ favourites: updateUser })
    }

    applyJob = (jobId) => {
        const applied = [...this.props.loggedInUser.applied]
        applied.push(jobId)
        const updatedApplied = [...applied]
        const updateUser = { ...this.props.loggedInUser, applied: updatedApplied }
        this.userService.editUserInfo(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
             
            })
            .catch(err => console.log(err))
        this.setState({ applied: updateUser })
        console.log(this.props.loggedInUser)
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

                             
                            <Button onClick={() => this.saveFav(this.state.job._id)} > Add to Favs</Button>
                            <Button onClick={() => this.applyJob(this.state.job._id)} > Apply</Button>

                            
                        </Row>
                        :
                        <Spinner animation="border" variant="primary" />
                }
            </Container>
        )
    }
}

export default JobDetails