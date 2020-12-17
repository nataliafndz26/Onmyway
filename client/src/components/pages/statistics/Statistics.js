import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import JobService from './../../../service/jobs.service'

import ContinentPie from './ContinentStats'
import TimePie from './TimeStats'

import './Statistics.css'

class Statistics extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Europe: undefined,
            Asia: undefined,
            Africa: undefined,
            Oceania: undefined,
            SouthAmerica: undefined,
            NorthAmerica: undefined,
            CentralAmerica: undefined,
            ShortPeriod: undefined,
            MediumPeriod: undefined,
            LongPeriod: undefined
        }

        this.jobService = new JobService()
    }

    componentDidMount = () => {
            this.getAll()
    
    }

    getAll = () => {
        this.jobService
            .getJobs()
            .then(response => {
                const Eurdata = response.data.filter(elm => elm.preferences.continent.includes('Europe')).length
                const Asiadata = response.data.filter(elm => elm.preferences.continent.includes('Asia')).length 
                const Africadata = response.data.filter(elm => elm.preferences.continent.includes('Africa')).length 
                const Ocedata = response.data.filter(elm => elm.preferences.continent.includes('Oceania')).length 
                const NAdata = response.data.filter(elm => elm.preferences.continent.includes('North America')).length 
                const SAdata = response.data.filter(elm => elm.preferences.continent.includes('South America')).length 
                const CAdata = response.data.filter(elm => elm.preferences.continent.includes('Central America')).length 
                const SPdata = response.data.filter(elm => elm.preferences.time.includes('0-6 months')).length 
                const MPdata = response.data.filter(elm => elm.preferences.time.includes('6 months-1 year')).length 
                const LPdata = response.data.filter(elm => elm.preferences.time.includes('More than 1 year')).length 

                this.setState({ Europe: Eurdata, Asia: Asiadata, Africa: Africadata, Oceania: Ocedata, NorthAmerica: NAdata, SouthAmerica: SAdata, CentralAmerica: CAdata, ShortPeriod: SPdata, MediumPeriod: MPdata, LongPeriod: LPdata })
        } )
            .catch(err => console.log(err))
    }

    render () {
    
        return (

            <div> 
                
                <img className="stats-bg" src="https://www.segurosredondo.es/wp-content/uploads/2020/01/656670.jpg"/>
        
            <Container>
                
                <Row>
                    
                    <Col className="stats statcard" lg={{ span: 5, offset: 1}} style={{marginTop: '120px', marginBottom: '30px'}}>
                        
                        <ContinentPie {...this.state} />

                    </Col>
                    <Col className="stats statcard" lg={5} style={{marginTop: '120px', marginBottom: '10px'}}>
                        
                        <TimePie {...this.state} />

                    </Col>

                </Row>

                </Container>
                
                </div>
        
    )
    
    
    }

    
}



export default Statistics