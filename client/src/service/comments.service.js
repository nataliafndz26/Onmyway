import axios from 'axios'

export default class CommentsService {

    constructor() {
        this.apiHandler = axios.create({
            //baseURL: `${process.env.REACT_APP_API_URL}/comments`,
            baseURL: 'http://localhost:5000/api/comments',
            withCredentials: true
        })
    }

    saveNewComment = (commentInfo, jobId) => this.apiHandler.post(`/newcomment/${jobId}`, commentInfo)
}