import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'

import NavBar from './layout/navBar/navBar'
import Home from './pages/home/Home'
import AllJobs from './pages/jobs/alljobs/AllJobs'
import JobDetails from './pages/jobs/jobdetails/JobDetails'
import Profile from './pages/profile/Profile'
import PreferencesForm from './pages/preferences/preferences'
import JobForm from './pages/jobs/jobform/JobForm'
import JobFormEdit from './pages/jobs/jobformedit/JobFormEdit'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices()
  }

  componentDidMount = () => {
    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('The new estate of App is:', this.state))

  render() {
    return (
      <>
        {this.state.loggedInUser
          ?
          <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
          :
          null}
        <main>
          <Switch>
            <Route path="/" exact render={props => <Home storeUser={this.setTheUser}{...props}/>} />
            <Route path="/jobs" exact render={props => <AllJobs {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/>} />
            <Route path="/jobs/:job_id" exact render={props => <JobDetails {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
            <Route path="/jobs/:job_id/editjob" render={props => <JobFormEdit {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
            <Route path="/preferences" exact render={props => <PreferencesForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
            <Route path="/profile" exact render={props => <Profile {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
            <Route path="/profile/newjob" render={props => <JobForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
    
          </Switch>
          </main>
      </>
    )
  }
}

export default App;
