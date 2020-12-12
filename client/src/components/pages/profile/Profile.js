import React, { Component } from 'react'
import './Profile.css'
import UserService from './../../../service/user.service'
import JobService from './../../../service/jobs.service'
import JobCard from './../jobs/jobcard/JobCard'
import JobForm from './../jobs/jobform/JobForm'
import { Container, Row, Col, Button, Tabs, Tab, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jobs: [],
            favourites: [],
            applied: [],
        }

        this.userService = new UserService()
        this.jobService = new JobService()
    }

    componentDidMount = () => {
        if (this.props.loggedInUser) {
            this.getAll()
            this.refreshJobs()
        }
    }

    refreshJobs = () => {
        this.jobService
            .getJobs()
            .then(response => {
                const data = response.data
                const ownJob = data.filter(elm => elm.user._id === this.props.loggedInUser._id)
                this.setState({ jobs: ownJob })
            })
            .catch(err => console.log(err))
    }

    getAll = () => {

        this.jobService.getJobs()
            .then(response => {
                const data = response.data
                switch (this.props.loggedInUser.role) {
                    case 'HOST':
                        const ownJob = data.filter(elm => elm.user._id === this.props.loggedInUser._id)
                        console.log(ownJob)
                        this.setState({ jobs: ownJob })
                        break;
                    case 'USER':
                        const favJobs = data.filter(elm => this.props.loggedInUser.favourites.includes(elm._id))
                        const appliedJobs = data.filter(elm => this.props.loggedInUser.applied.includes(elm._id))
                        this.setState({ favourites: favJobs, applied: appliedJobs })
                        break;
                }
            })
            .catch(err => console.log(err))
    }

    deleteJob = (jobId) => {
        this.jobService
            .deleteJob(jobId)
            .then((response) => {
                const updateJob = this.state.jobs.filter(job => job._id !== jobId)
                this.setState({ jobs: updateJob })
            })
            .catch(err => console.log(err))

    }


    render() {

        const username = this.props.loggedInUser ? this.props.loggedInUser.username : ""
        const name = this.props.loggedInUser ? this.props.loggedInUser.name : ""
        const role = this.props.loggedInUser ? this.props.loggedInUser.role : ""
        const image = this.props.loggedInUser ? this.props.loggedInUser.image : ""
        const description = this.props.loggedInUser ? this.props.loggedInUser.description : ""
        const id = this.props.loggedInUser ? this.props.loggedInUser._id : ""



        return (
            <>
                {

                    this.props.loggedInUser ?
                        <Container>
                            
                                    <Row style={{ display: "flex" }}>
                                        <Col lg={{ span: 3, offset: 0 }} style={{marginTop: '20px'}}>
                                        <img  className="rounded-circle z-depth-2" src={image} style={{width:'200px'}}/>
                                        </Col>
                                        <Col style={{marginTop: '50px'}}>
                                            <h2>Welcome back {name}! </h2>
                                            <h3>You are a {role}</h3>
                                        <h5>{description}</h5>
                                        <div>
                                        <Link id="edit" className="editprofile" to={`/profile/edit/${id}`}>Edit your profile</Link>

                                        {this.props.loggedInUser.role === 'HOST' ?

                                            <Link id="new" to={`profile/newjob`} >Create a new job</Link>
                                            :
                                            <Link id="edit-preferences" className="editpreferences" to={`/preferences`}>Edit preferences</Link>
                                            }
                                    
                                        
                                            </div>
                                        </Col>
                            </Row>


                            <Tabs defaultActiveKey="posted" id="noanim-tab-example" style={{ marginTop: '50px' }}>
                                {this.props.loggedInUser.role === 'HOST'
                                    ?
                                    <Tab eventKey="posted" title="Posted">
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
                                    :
                                    null}
                                <Tab eventKey="favourites" title="Favourites">
                                    <Row>
                                        {this.state.favourites.map(elm => {
                                            return (
                                                <Col lg={4} >
                                                    <JobCard key={elm.id} {...elm} setTheUser={this.setTheUser} loggedInUser={this.props.loggedInUser} />
                                                </Col>
                                            )
                                        })
                                        }
                                    </Row>
                                </Tab>
                                <Tab eventKey="applied" title="Applied" >
                                    <Row>
                                        {this.state.applied.map(elm => {
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


                        </Container>
                        :
                        <h1>YOU ARE NOT AUTHORIZED</h1>
                }
            </>
        )
    }
}

export default Profile

