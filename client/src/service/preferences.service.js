import axios from 'axios'

export default class PreferencesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/preferences',
            withCredentials: true
        })
    }
}

getPreferences = () => this.apiHandler.get('./allPreferences')
getOnePreference = preferencesId => this.apiHandler.get(`/preference/${preferencesId}`)
editPreferences = (preferencesId, preferencesInfo) => this.apiHandler.put (`/editPreferences/${preferencesId}`, preferencesInfo)