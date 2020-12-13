import axios from 'axios'

class EmailService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/mail',
            withCredentials: true
        })
    }

    sendEmail = mailInfo => this.apiHandler.post('/sendEmail', mailInfo)
}

export default EmailService