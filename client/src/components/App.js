import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'

import Home from './pages/home/Home'
import AllJobs from './pages/jobs/AllJobs'




class App extends Component {
  constructor() {
    super()
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
        <main>
          <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/jobs" exact render={() => <AllJobs />} />
          
            
          </Switch>
          </main>
      </>
    )
  }
}

export default App;
