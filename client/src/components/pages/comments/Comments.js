import React, { Component } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import CommentsService from '../../../service/comments.service'
import UserService from '../../../service/user.service'

import './Comments.css'


class Comments extends Component{

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            text: '',
            rating: '',
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.commentsService = new CommentsService()
        this.userService = new UserService()
        
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.commentsService
            .saveNewComment(this.state, this.props.job._id)
            .then(res => {
                console.log (res)
                this.props.updateComment(res.data.comments)
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                    <Row style={{marginTop: '50px'}}>
                        <Col lg={8} style={{marginTop: '50px'}}>
                        <h3>Do you want to leave any comment to this user?</h3>
                        {/* {this.state.jobs.comments} */}
                            </Col>
                             <Col md={12}>
                                
                        <Form className="form" onSubmit={this.handleSubmit}>
                            
                        <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="text">
                                <Form.Label>Text</Form.Label>
                                <Form.Control placeholder="Leave your comment here!" type="text" as="textarea" name="text" value={this.state.text} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control name="rating" as="select" custom  onChange={this.handleInputChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                    
                                <Button className="bt-comment" style={{marginBottom: '30px'}} type="submit">Publish</Button>
                                
                            </Form>
                        
                        </Col>
                    </Row>
            </Container>
        )
    }
  
}

export default Comments