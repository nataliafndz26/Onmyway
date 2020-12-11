import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import AuthService from '../../../../service/auth.service'
import PreferenceService from '../../../../service/preferences.service'
import JobCard from '../jobcard/JobCard'

import './AllJobs.css'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

class AllJobs extends Component {
    constructor() {
        super()
        this.state = {
            jobs: undefined,
        }
        this.jobsService = new JobsService()
        this.authService = new AuthService()
        this.preferenceService = new PreferenceService()
    }

    componentDidMount = () => this.refreshJobs()

    // refreshJobs = () => {
    //     this.jobsService
    //         .getJobs()
    //         .then(res => this.setState({ jobs: res.data }))
    //         .catch(err => console.log(err))
    // }

    refreshJobs = () => {
        let allJobs
        this.jobsService
            .getJobs()
            .then(res => {
                allJobs = res.data
                return this.preferenceService.getOnePreference(this.props.loggedInUser.preferences)
            })
            .then(response => {
                const filtered = allJobs.filter(elm => elm.preferences.continent.includes(response.data.continent) && elm.preferences.time.includes(response.data.time))
                const total = filtered.filter(elm => elm.preferences.interests.some(e => response.data.interests.includes(e)) || elm.preferences.skills.some(e => response.data.skills.includes(e)))

                console.log('holi', filtered)
                console.log(this.props.loggedInUser.preferences)
                console.log('hola', total)

                this.setState({ jobs: total })
            })

            .catch(err => console.log(err))
    }

    deleteJob = (jobId) => {
        this.jobsService
            .deleteJob(jobId)
            .then((response) => {
                const updateJob = this.state.jobs.filter(job => job._id !== jobId)
                this.setState({ jobs: updateJob })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <>
                <Container>
                    <h1>All jobs</h1>
                    <Row>
                        
                            {
                                this.state.jobs
                                    ?
                                this.state.jobs.map(elm => {
                                        return(
                                        <Col lg={3}>
                                                <JobCard key={elm._id} {...elm} deleteJob={() => this.deleteJob(elm._id)} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser}/>
                                        </Col>
                                )})
                                    :
                                    <Spinner animation="border" variant="primary" />
                            }
                        
                    </Row>
                </Container>
            </>
        )
    }
}

export default AllJobs