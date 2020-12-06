import axios from 'axios'

export default class JobsService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/jobs',
            withCredentials: true
        })
    }

    getJobs = () => this.apiHandler.get('/allJobs') //prefe
    getOneJob = jobId => this.apiHandler.get(`/getOneJob/${jobId}`)
    saveNewJob = jobInfo => this.apiHandler.post(`/newJob/`, jobInfo)
    editJob = (jobId, jobInfo) => this.apiHandler.put(`/editJob/${jobId}`, jobInfo) //prefe
    deleteJob = jobId => this.apiHandler.delete(`/editJob/${jobId}`)
}