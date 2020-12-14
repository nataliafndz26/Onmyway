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
import EditUser from './pages/profile/editProfile'
import Carousel from './pages/travel/travel'




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
            <Route path="/" exact render={props => <Home setTheUser={this.setTheUser}{...props} />} />
            <Route path="/travel" render={() => this.state.loggedInUser ? <Carousel /> : <Redirect to='/' />} />
            
            <Route exact path="/jobs" render={props => this.state.loggedInUser ? <AllJobs {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
            <Route path="/jobs/:id" exact render={props => this.state.loggedInUser ? <JobDetails {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />: <Redirect to='/' />} />
            <Route path="/jobs/:id/editjob" render={props => this.state.loggedInUser ? <JobFormEdit {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
            <Route path="/preferences" exact render={props => this.state.loggedInUser ? <PreferencesForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
            
            <Route path="/profile" exact render={props => this.state.loggedInUser ? <Profile {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
            <Route path="/profile/edit/:id" exact render={props => this.state.loggedInUser ? <EditUser {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
            <Route path="/profile/newjob" render={props => this.state.loggedInUser ? <JobForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Redirect to='/' />} />
    
          </Switch>
          </main>
      </>
    )
  }
}

export default App;
