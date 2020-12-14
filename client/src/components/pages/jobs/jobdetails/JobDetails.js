import React, { Component } from 'react'
import JobsService from '../../../../service/jobs.service'
import PreferencesService from '../../../../service/preferences.service'
import UserService from '../../../../service/user.service'

import EmailForm from '../../email/EmailForm'

import './JobDetails.css'


import { Container, Row, Col, Card, Spinner, Button, Modal } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class JobDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: undefined,
            favourites: this.props.loggedInUser ? this.props.loggedInUser.favourites : [],
            applied: this.props.loggedInUser ? this.props.loggedInUser.applied : [],
            showModal: false
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
    }

    removeFav = (jobId) => {
        const favourites = [...this.props.loggedInUser.favourites]
        let updatedFavourites = favourites.filter(job => job !== jobId)
        const updateUser = { ...this.props.loggedInUser, favourites: updatedFavourites }
        this.userService.editUserInfo(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))
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
    }

    handleModal = visible => this.setState({
        showModal: visible
    })

    render() {
        return (
            <Container>
                {
                    this.state.job
                        ?
                        <Row>

                            <Col className='job-image' lg={6}>
                                <img variant="top" style={{ width: '100%' }} src={this.state.job.image} />
                            </Col>
                            <Col className='job-title' lg={6}>
                                <h3 className='title'>{this.state.job.name}</h3>
                                <p className='description'>{this.state.job.description}</p>

                                <div className="buttons">



                                   
                                        {this.props.loggedInUser.favourites.includes(this.state.job._id)

                                            ?

                                            <Link className="remove-fav" onClick={() => this.removeFav(this.state.job._id)}>Remove Fav</Link>

                                            :

                                            <Link className="fav" onClick={() => this.saveFav(this.state.job._id)}> Add to Fav</Link>
                                        }


                                        {this.props.loggedInUser.applied.includes(this.state.job._id)

                                            ?

                                            <Link className="applied" disabled>Applied</Link>

                                            :

                                            <Link className="apply" onClick={() => {
                                                this.applyJob(this.state.job._id)
                                                this.handleModal(true)

                                            }}>Apply now!</Link>

                                        }
                                    







                                </div>

                                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                                    <Modal.Body>
                                        <EmailForm hideModal={this.handleModal}  {...this.props} hostInfo={this.state.job.user} userInfo={this.props.loggedInUser} closeModal={() => this.handleModal(false)} />
                                    </Modal.Body>
                                </Modal>

                            </Col>

                            <Col lg={12}>
                                <Card className="job-card">
                                    <Card.Body>
                                        <Card.Text className='job-info'>
                                            <h5>You will stay in a {this.state.job.accommodation} in {this.state.job.location}</h5>
                                            <p>Your timetable will be: {this.state.job.timetable}</p>
                                            <p>{this.state.job.user.name} will be your host!</p>
                                            <h5 className="pref-title">What do we offer you?</h5>
                                            <ul>
                                                {this.state.job.benefits.map(elm =>
                                                    <li className="benefits" key={elm}>{elm}</li>
                                                )}
                                            </ul>
                                            <h5 className="pref-title">This job fits you if you are interested in...</h5>
                                            <ul>
                                                {this.state.job.preferences.interests.map(elm =>
                                                    <li className="interests" key={elm}>{elm}</li>
                                                )}
                                            </ul>
                                            <h5 className="pref-title">What do you need to work with us?</h5>
                                            <ul>
                                                {this.state.job.preferences.skills.map(elm =>
                                                    <li className="skills" key={elm}>{elm}</li>
                                                )}
                                            </ul>

                                        </Card.Text>

                                    </Card.Body>

                                </Card>
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