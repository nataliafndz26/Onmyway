import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, timetable, _id, image}) => {
    return (
        <>
            <Card className="job-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='title' >{name}</Card.Title>
                    <Card.Text><strong>{location}</strong> </Card.Text>
                    <Card.Text>You will stay in a {accommodation}</Card.Text>
        
                            <Link className="btn btn-outline-success btn-block btn-sm" to={`/jobs/${_id}`}>Learn More</Link>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default JobCard