import { ButtonGroup, Button, Card } from 'react-bootstrap'

import './JobCard.css'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, _id, image, user, loggedInUser, deleteJob }) => {
    
    return (
        <>
            <Card bsPrefix="job-card" key={_id}>
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title className='title' >{name}</Card.Title>
                    <Card.Text><strong>{location}</strong> </Card.Text>
                    <Card.Text>You will stay in a {accommodation}</Card.Text>

                    {
                        user._id === loggedInUser._id 
                            ?

                            <div className="btn-group">
                                
                                <Link className="detailsjob-bt" style={{padding:'6px 20px'}} to={`/jobs/${_id}`}>Details</Link>
                                <Link className="editjob-bt" style={{padding:'6px 20px'}} to={`/jobs/${_id}/editjob`}>Edit</Link>
                                <Link className="deletejob-bt" style={{padding:'6px 20px'}} onClick={deleteJob}>Delete</Link>

                                </div>
                           
                            :

                            <Link className="detailsjob-bt" style={{padding:'6px 20px'}} to={`/jobs/${_id}`}>Details</Link>
                    }
        
                    
                </Card.Body>
            </Card>
                
        </>
    )
}

export default JobCard