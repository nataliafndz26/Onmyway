import { Col, Card, } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, timetable, _id, image}) => {
    return (
        <Col lg={{ span: 3, offset: 0 }}>
            <Card className="job-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='title' >{name}</Card.Title>
                    <Card.Text><strong>{location}</strong> </Card.Text>
                    <Card.Text>You will stay in a {accommodation}</Card.Text>
        
                            <Link className="btn btn-outline-success btn-block btn-sm" to={`/jobs/${_id}`}>Learn More</Link>
                    
                </Card.Body>
            </Card>
        </Col>
    )
}

export default JobCard