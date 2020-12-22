import axios from 'axios'

export default class JobsService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/jobs`,
            // baseURL: 'http://localhost:5000/api/jobs',
            withCredentials: true
        })
    }

    getJobs = () => this.apiHandler.get('/allJobs') 
    getOneJob = jobId => this.apiHandler.get(`/getOneJob/${jobId}`)
    getUserJobs = userId  => this.apiHandler.get(`/getUserJobs/${userId}`)
    saveNewJob = jobInfo => this.apiHandler.post('/newJob', jobInfo)
    editJob = (jobId, jobInfo) => this.apiHandler.put(`/editJob/${jobId}`, jobInfo)
    deleteJob = jobId => this.apiHandler.delete(`/deleteJob/${jobId}`)
}