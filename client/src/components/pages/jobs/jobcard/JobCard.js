import { ButtonGroup, Button, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, _id, image, user, loggedInUser, deleteJob }) => {
    
    return (
        <>
            <Card className="job-card" key={_id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='title' >{name}</Card.Title>
                    <Card.Text><strong>{location}</strong> </Card.Text>
                    <Card.Text>You will stay in a {accommodation}</Card.Text>

                    {
                        user._id === loggedInUser._id 
                            ?
                            <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                                <Link className="btn btn-light btn-sm" to={`/jobs/${_id}/editjob`}>Edit</Link>
                                <Button onClick={deleteJob} className="btn btn-light btn-sm">Delete</Button>
                                <Link className="btn btn-outline-success  btn-sm" to={`/jobs/${_id}`}>Learn More</Link>
                            </ButtonGroup>
                            :
                            <Link className="btn btn-outline-success btn-block btn-sm" to={`/jobs/${_id}`}>Details</Link>
                    }
        
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default JobCard