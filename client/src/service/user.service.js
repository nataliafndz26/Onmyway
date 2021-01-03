import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            // baseURL: `${process.env.REACT_APP_API_URL}/users`,
            baseURL: 'http://localhost:5000/api/users',
            withCredentials: true
        })
    }

    getUserInfo = userId => this.apiHandler.get(`/getuser/${userId}`)
    editUserInfo = (userId, userInfo) => this.apiHandler.put(`/edituser/${userId}`, userInfo)
    deleteUser = userId => this.apiHandler.delete (`/delete/${userId}`)

} 