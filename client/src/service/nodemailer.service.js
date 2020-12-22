import axios from 'axios'

class EmailService {
    constructor() {
        this.apiHandler = axios.create({
            //baseURL: `${process.env.REACT_APP_API_URL}/mail`,
            baseURL: 'http://localhost:5000/api/mail',
            withCredentials: true
        })
    }

    sendEmail = mailInfo => this.apiHandler.post('/sendEmail', mailInfo)
}

export default EmailService