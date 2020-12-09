import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import AuthService from '../../../../service/auth.service'
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
        this.authService = new AuthService
    }

    componentDidMount = () => this.refreshJobs()

    refreshJobs = () => {
        this.jobsService
            .getJobs()
            .then(res => this.setState({ jobs: res.data }))
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