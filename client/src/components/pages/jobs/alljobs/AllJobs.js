import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import AuthService from '../../../../service/auth.service'
import PreferenceService from '../../../../service/preferences.service'
import JobCard from '../jobcard/JobCard'

import './AllJobs.css'

import { Container, Row, Col, Spinner, Tab, Tabs } from 'react-bootstrap'

class AllJobs extends Component {
    constructor() {
        super()
        this.state = {
            jobs: undefined,
            filteredjobs: [],
        }
        this.jobsService = new JobsService()
        this.authService = new AuthService()
        this.preferenceService = new PreferenceService()
    }

    componentDidMount = () => {
        this.refreshJobs()
        this.refreshfilteredJobs()
    }

    refreshJobs = () => {
        this.jobsService
            .getJobs()
            .then(res => this.setState({ jobs: res.data }))
            .catch(err => console.log(err))
    }

    refreshfilteredJobs = () => {
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
                this.setState({ filteredjobs: total })
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
            <div>
                <img className="all" src="https://images.unsplash.com/photo-1586436400105-7d828e374d28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80"/>
                    <Container >
                    <h1>All jobs</h1>
                        
                            {
                                this.state.jobs
                                    ?
                                <Tabs defaultActiveKey="alljobs" id="noanim-tab-example" style={{ marginTop: '50px' }}>
                                    
                                        
                                        <Tab eventKey="alljobs" title="All jobs">
                                            <Row>
                                                {this.state.jobs.map(elm => {
                                                    return (
                                                        <Col lg={4}>
                                                            <JobCard key={elm._id} {...elm} deleteJob={() => this.deleteJob(elm._id)} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser} />
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab>
                                        
                                    
                                    <Tab eventKey="filteredjobs" title="Jobs for you">
                                        <Row>
                                            {this.state.filteredjobs.map(elm => {
                                                return (
                                                    <Col lg={4} >
                                                        <JobCard key={elm.id} {...elm} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser} />
                                                    </Col>
                                                )
                                            })
                                            }
                                        </Row>
                                    </Tab>
                                </Tabs>
                                    :
                                    <Spinner animation="border" variant="primary" />
                            }
                        

                </Container>
                    
            </div>
        )
    }
}

export default AllJobs