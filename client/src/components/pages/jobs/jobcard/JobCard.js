import { BsArrowRight } from 'react-icons/bs'

import bin from './bin.png'
import pen from './pen.png'

import './JobCard.css'

import { Link } from 'react-router-dom'

const JobCard = ({ name, location, accommodation, _id, image, user, loggedInUser, deleteJob }) => {
    
    return (

        <section className="cards" >
            
                 <article className="card card--1" style={{height:'480px', marginTop:'40px'}}>
                     
                        <div className="card__img" style={{ backgroundImage: `url(${image})`}} ></div>
                       
                        <div className="card__img--hover" style={{ backgroundImage: `url(${image})` }} ></div>
                     
                       <div className="card__info">
                            <span className="card__category"><strong>{location}</strong></span>
                            <h3 className="card__title">{name}</h3>
                    <span className="card__by">You will stay in a <strong className="card__author"> {accommodation}</strong></span>
                    
                    {
                        user._id === loggedInUser._id || user === loggedInUser._id
                            
                            ?

                            <div className="card__info-hover host-ad" >
                                
                                <Link className="editjob-bt" style={{padding:'6px 7px'}} to={`/jobs/${_id}/editjob`}><img
                                        alt="pen"
                                        src={pen}
                                        width="24"
                                        height="24"
                                        className="d-inline-block align-top"
                                    /></Link>
                                <Link to="#" className="deletejob-bt" style={{padding:'6px 7px'}} onClick={deleteJob}><img
                                        alt="bin"
                                        src={bin}
                                        width="24"
                                        height="24"
                                        className="d-inline-block align-top"
                                    /></Link>
                               
                                </div>
                            :
                            null

                    }
        
                            <Link className="detailsjob-bt" style={{padding:'6px 20px', position:'absolute', bottom:'3px', marginLeft:'150px', fontWeight:'bold', fontSize: '15px'}} to={`/jobs/${_id}`}>Details <BsArrowRight size='20px' style={{ color: '#007c70', marginBottom:'4px' }}/></Link>
                </div>

                </article>
        </section>
    )
}



export default JobCard