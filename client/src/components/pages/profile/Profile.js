import React, { Component } from 'react'
import './Profile.css'
import UserService from './../../../service/user.service'
import JobService from './../../../service/jobs.service'
import JobCard from './../jobs/jobcard/JobCard'
import { Container, Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap'
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
        }
    }

    // getAll = () => {

    //     this.jobService.getJobs()
    //         .then(response => {
    //             const data = response.data
    //             switch (this.props.loggedInUser.role) {
    //                 case 'HOST':
    //                     const ownJob = data.filter(elm => elm.user._id === this.props.loggedInUser._id)
    //                     console.log(ownJob)
    //                     this.setState({ jobs: ownJob })
    //                     break;
    //                 case 'USER':
    //                     const favJobs = data.filter(elm => this.props.loggedInUser.favourites.includes(elm._id))
    //                     const appliedJobs = data.filter(elm => this.props.loggedInUser.applied.includes(elm._id))
    //                     this.setState({ favourites: favJobs, applied: appliedJobs })
    //                     break;
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

    getAll = () => {
        this.jobService
            .getUserJobs(this.props.loggedInUser._id)
            .then(response => {
                const data = response.data
                switch (this.props.loggedInUser.role) {
                    case 'HOST':
                        this.setState({ jobs: data.posted, favourites: data.favourites, applied: data.applied })
                        break;
                    case 'USER':
                        this.setState({ favourites: data.favourites, applied: data.applied })
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
            <div className="profile">
                <img className="bg-img" src="https://res.cloudinary.com/nataliafndz26/image/upload/v1607944984/Onmyway/BACKGROUND%20IMAGES/photo-1488646953014-85cb44e25828_y4djls.jpg" />
                {

                    this.props.loggedInUser ?
                        <Container>
                            
                                    <Row  style={{ display: "flex" }}>
                                        <Col lg={{ span: 3, offset: 0 }} style={{marginTop: '20px'}}>
                                        <img  className="rounded-circle z-depth-2" src={image} style={{width:'220px', marginTop:'60px'}}/>
                                        </Col>
                                <Col lg={{ span: 7, offset: 0 }} className="init" style={{marginTop: '50px'}}>
                                            <h2 className="name">Welcome back, {name}! </h2>
                                        <h5 className="description">{description}</h5>
                                        <div>
                                        <Link id="edit" className="editprofile"  style={{textDecoration: 'none'}} to={`/profile/edit/${id}`}>
                                        <svg width="277" height="62">
                                            <defs>
                                                <linearGradient id="grad1">
                                                    <stop offset="0%" stop-color="rgb(39, 176, 255)"/>
                                                    <stop offset="100%" stop-color="rgb(69, 102, 172)"/>
                                                </linearGradient>
                                            </defs>
                                            <rect x="5" y="7" rx="5" fill="none" stroke="url(#grad1)" width="150" height="40"></rect>
                                        </svg>
                                            <span>Edit your profile</span></Link>

                                        {this.props.loggedInUser.role === 'HOST' ?

                                            <Link className="newjob" style={{textDecoration: 'none'}} id="new" to={`profile/newjob`}>
                                            <svg width="277" height="62">
                                            <defs>
                                                <linearGradient id="grad2">
                                                    <stop offset="0%" stop-color="rgb(153, 0, 120)"/>
                                                    <stop offset="100%" stop-color="rgb(255, 18, 97)"/>
                                                </linearGradient>
                                            </defs>
                                            <rect x="5" y="7" rx="5" fill="none" stroke="url(#grad2)" width="150" height="40"></rect>
                                        </svg>
                                                <span>Create a new job</span></Link>
                                            
                                            :
                                            
                                            <Link id="edit-preferences" className="editpreferences" style={{ textDecoration: 'none' }} to={`/preferences`}>
                                            <svg width="277" height="62">
                                            <defs>
                                                <linearGradient id="grad2">
                                                    <stop offset="0%" stop-color="rgb(153, 0, 120)"/>
                                                    <stop offset="100%" stop-color="rgb(255, 18, 97)"/>
                                                </linearGradient>
                                            </defs>
                                            <rect x="5" y="7" rx="5" fill="none" stroke="url(#grad2)" width="150" height="40"></rect>
                                        </svg>
                                            <span>Edit preferences</span></Link>
                                            }
                                    
                                        
                                            </div>
                                        </Col>
                            </Row>


                            <Tabs defaultActiveKey={this.props.loggedInUser.role === "HOST" ? "posted" : "favourites"} id="noanim-tab-example" style={{ marginTop: '50px' }}>
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
            </div>
        )
    }
}

export default Profile

