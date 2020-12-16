import React, { Component } from 'react'

import JobsService from '../../../../service/jobs.service'
import PreferencesService from '../../../../service/preferences.service'
import UserService from '../../../../service/user.service'

import EmailForm from '../../email/EmailForm'
import PopUp from '../../../shared/popUp/PopUp'
import Comment from '../../comments/Comments'

import mail from './mail.png'
import mailSuccess from './mail-success.png'
import favourite from './favourite.png'
import favourited from './favourited.png'

import benIcon from './benefitsicon.png'
import intIcon from './interestsicon.png'
import skillIcon from './skillsicon.png'
import star from './star.png'

import './JobDetails.css'


import { Container, Row, Col, Card, Spinner, Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class JobDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: undefined,
            favourites: this.props.loggedInUser ? this.props.loggedInUser.favourites : [],
            applied: this.props.loggedInUser ? this.props.loggedInUser.applied : [],
            showModal: false,

        }
        this.jobsService = new JobsService()
        this.preferencesService = new PreferencesService()
        this.userService = new UserService()
    }

    componentDidMount = () => {
        const job_id = this.props.match.params.id

        this.jobsService
            .getOneJob(job_id)
            .then(res => this.setState({ job: res.data }))
            .catch(err => console.log(err))
    }

    updateComment = (comments) => {

        this.setState({ job: {...this.state.job, comments: comments } })
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
                    <>
                        <Row>

                            <Col  lg={12}>
                                <img variant="top" className='job-image' style={{ width: '100%', marginTop:'71px' }} src={this.state.job.image} />
                            </Col>
                            <Col className='job-title' lg={12}>
                                <h3 className='title-info'>{this.state.job.name}</h3>
                                <p className='description-job'>{this.state.job.description}</p>
                                <p className='description-job'><small>{this.state.job.timetable}<br></br>You will stay in a {this.state.job.accommodation} in {this.state.job.location} </small></p>
                                

                                <PopUp show={this.state.showModal} onHide={() => this.handleModal(false)}>
                                        <EmailForm hideModal={this.handleModal}  {...this.props} hostInfo={this.state.job.user} userInfo={this.props.loggedInUser} closeModal={() => this.handleModal(false)} />
                                </PopUp>

                            </Col>
                                <div className="buttons">



                                   
                                        {this.props.loggedInUser.favourites.includes(this.state.job._id)

                                            ?

                                    <Link className="remove-fav" onClick={() => this.removeFav(this.state.job._id)}><img
                                        alt="Logotipo"
                                        src={favourited}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    /></Link>

                                            :

                                    <Link className="fav" onClick={() => this.saveFav(this.state.job._id)}><img
                                        alt="Logotipo"
                                        src={favourite}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    /></Link>
                                        }


                                        {this.props.loggedInUser.applied.includes(this.state.job._id)

                                            ?

                                    <Link className="applied" disabled><img
                                        alt="Logotipo"
                                        src={mailSuccess}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    /></Link>

                                            :

                                            <Link className="apply" onClick={() => {
                                                this.applyJob(this.state.job._id)
                                                this.handleModal(true)

                                    }}><img
                                            alt="Logotipo"
                                            src={mail}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                        /></Link>

                                        }
            

                                </div>

                            <Col lg={{ span: 8, offset: 2 }} style={{ justifyContent: 'center'}}>
                                <Card className="job-card-info" >
                                    <Card.Body>
                                        <Card.Text className='job-info'>
                                            <div className='host'>
                                                <img
                                                    alt="Logotipo"
                                                    src={this.state.job.user.image}
                                                    width="40"
                                                    height="40"
                                                    className="user-pic"
                                                />
                                                <p style={{ paddingTop: '14px' }}><strong>{this.state.job.user.name}</strong> will be your host!</p>
                                            </div>
                                            <hr></hr>
                                            <Row>
                                            <Col lg={4}>
                                                    <img
                                                        alt="Logotipo"
                                                        src={benIcon}
                                                        width="70"
                                                        height="60"
                                                        className="d-inline-block align-top"
                                                    />
                                                    <h5 className="pref-title"><strong> What do we offer you? </strong></h5>
                                            <ul>
                                                {this.state.job.benefits.map(elm =>
                                                    <li className="benefits" key={elm}>{elm}</li>
                                                )}
                                                </ul>
                                            </Col>
                                            <Col lg={4}>
                                                    <img
                                                        alt="Logotipo"
                                                        src={intIcon}
                                                        width="70"
                                                        height="60"
                                                        className="d-inline-block align-top"
                                                    />
                                                    <h5 className="pref-title"><strong> This job fits you if you are interested in... </strong></h5>
                                            <ul>
                                                {this.state.job.preferences.interests.map(elm =>
                                                    <li className="interests" key={elm}>{elm}</li>
                                                )}
                                                </ul>
                                            </Col>
                                            <Col lg={4}>
                                                    <img
                                                        alt="Logotipo"
                                                        src={skillIcon}
                                                        width="60"
                                                        height="60"
                                                        className="d-inline-block align-top"
                                                    />
                                                    <h5 className="pref-title"><strong> What do you need to work with us?</strong></h5>
                                            <ul>
                                                {this.state.job.preferences.skills.map(elm =>
                                                    <li className="skills" key={elm}>{elm}</li>
                                                )}
                                                </ul>
                                                </Col>
                                            </Row>

                                        </Card.Text>

                                    </Card.Body>

                                </Card>
                            </Col>

                            </Row>
                            
                            <Row style={{marginTop:'350px', justifyContent:'center'}}>
                                {this.props.loggedInUser.applied.includes(this.state.job._id)
                                    ?
                                <Col lg={6}>
                                <Comment updateComment={this.updateComment} job={this.state.job} {...this.props} setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} />
                                </Col>
                                    : 
                                    null
                                 }
                                
                                <Col lg={6} style={{ marginTop: '50px' }}>
                                    <h3 style={{ paddingLeft: '15px' }}>Reviews of our guests</h3>
                                {this.state.job.comments.map(elm => {

                                   return ( <>
                                    <Col log={3}>
                                           <Card style={{marginTop: '20px'}}>
                                               <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}><p>{elm.title}</p><p><img
                                                   alt="Logotipo"
                                                   src={star}
                                                   width="20"
                                                   height="20"
                                                   className="d-inline-block align-top"
                                               />{elm.rating}</p></Card.Header>
                                            <Card.Body>
                                            
                                            <Card.Text>
                                            {elm.text}
                                             </Card.Text>
                                            </Card.Body>
                                           </Card>
                                       </Col>
                                   

                                   </> )

                                })}
                                </Col>
                            </Row>

                        </>
            
                        :

                        <Spinner animation="border" variant="primary" />
                }
            </Container>
        )
    }
}

export default JobDetails




{/* <Form.Group controlId="text">
                                    
<Form.Control as="textarea" rows={3} placeholder="Leave it here!" type="text" name="comments" value={this.state.comments} onChange={this.handleInputChange} />

</Form.Group> */}




