import React, { Component } from 'react'
import './Profile.css'
import UserService from './../../../service/user.service'
import JobService from './../../../service/jobs.service'
import JobCard from './../jobs/jobcard/JobCard'
import JobForm from './../jobs/jobform/JobForm'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Profile extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            edit: false,
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
            .catch(err => console.log (err)) 
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
        .catch (err => console.log (err))
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

    buildProfile = () => {

        this.setState({ edit: true })
    }

    closeEdit = () => {
        this.setState({ edit: false })
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
                                            <Button id="edit" variant="outline-success" onClick={this.buildProfile}>Edit your profile</Button>

                                        {this.props.loggedInUser.role === 'HOST' ? 
                                            
                                            <Link id="new" to={`profile/newjob`} >Create a new job</Link>
                                            :
                                            <Link id="edit-profile" className="outline-success" to={`/preferences`}>Edit preferences</Link>
                                            }
                                    
                                        
                                            </div>
                                        </Col>
                            </Row>
                            

                            {this.props.loggedInUser.role === 'HOST' ? 
                                
                            <>
                                            
                                <h1 style={{ marginTop: '50px' }}>POSTED</h1>
                                
                                {this.state.jobs.map(elm => <JobCard key={elm._id} {...elm} />)}
                                </>
                            
                                :
                                <Row>
                                    <Col lg={{ span:4, offset:1 }}>
                                        <h1 style={{ marginTop: '50px' }}>FAVOURITES</h1>
                                        {this.state.favourites.map (elm => <JobCard key= {elm.id} {...elm}/>)}
                                    </Col> 
                                    <Col lg={{ span:4, offset:1 }}>
                                        <h1 style={{ marginTop: '50px' }}>APPLIED</h1>
                                        {this.state.applied.map (elm => <JobCard key= {elm.id} {...elm}/>)}
                                   </Col> 
                                </Row>
                                
                            }
                            <>
                                </>

                        </Container>
                        :
                        <h1>YOU ARE NOT AUTHORIZED</h1>
                }
                
                {/* <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <JobForm {...this.props} closeModal={() => this.handleModal(false)} updateList={this.refreshJobs} loggedInUser={this.props.loggedInUser} />
                    </Modal.Body>
                </Modal> */}

                </>
        )
    }
}

export default Profile

