import React, { Component } from 'react'
import JobsService from '../../../service/jobs.service'
import JobCard from './JobCard'

import './AllJobs.css'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

class AllJobs extends Component {
    constructor() {
        super()
        this.state = {
            jobs: undefined,
        }
        this.jobsService = new JobsService()
    }

    componentDidMount = () => this.refreshJobs()

    refreshJobs = () => {
        this.jobsService
            .getJobs()
            .then(res => this.setState({ jobs: res.data }))
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
                                            <JobCard key={elm._id} {...elm} />
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