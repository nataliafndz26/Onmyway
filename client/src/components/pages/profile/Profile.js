import React, { Component } from 'react'
import './Profile.css'
import UserService from './../../../service/user.service'
import JobService from './../../../service/jobs.service'
import JobCard from './../jobs/JobCard'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Profile extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            edit: false,
            jobs: []
        }

        this.userService = new UserService()
        this.jobService = new JobService()
    }

    getAll = () => {
        this.jobService.getJobs()
            .then(response => {
                const data = response.data
                const ownJob = data.filter(elm => elm.user === this.props.loggedInUser._id)
                this.setState({ jobs: ownJob })
            })
        .catch (err => console.log (err))

    }

    componentDidMount = () => {
        if (this.props.loggedInUser) {
            this.getAll()
        }
    }

    buildProfile = () => {

        this.setState({ edit: true })
    }

    closeEdit = () => {
        this.setState({ edit: false })
    }

    render() {

        const username = this.props.loggedInUser ? this.props.loggedInUser.userName : ""
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
                                            
                                            <Link id="create" className="outline-success" to={`profile/newjob`}>Create a new job</Link>
                                            :
                                            <Link id="edit-profile" className="outline-success" to={`profile/editpreferences`}>Edit preferences</Link>
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
                                
                                 <Link id="edit-profile" className="outline-success" to={`profile/editpreferences`}>Edit preferences</Link>
                                            }
                                    
                            

                        </Container>
                        :
                        <h1>YOU ARE NOT AUTHORIZED</h1>
                 }
                </>
            
        )
    }
}

export default Profile

//  this.props.loggedInUser.role === 'USER' ?