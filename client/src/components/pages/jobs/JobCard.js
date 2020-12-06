import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, time, _id, image, loggedUser }) => {
    return (
        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src="df" />
                <Card.Body>
                    <Card.Title>Holii</Card.Title>
        
                            <Link className="btn btn-dark btn-block btn-sm" to={`/jobs/${_id}`}>Ver detalles</Link>
                    
                </Card.Body>
            </Card>
        </Col>
    )
}

export default JobCard