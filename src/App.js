/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import LogCreate from './components/wordle/create_log'
import IndexLog from './components/wordle/index'
import IndexAllLog from './components/wordle/index_all'
import ShowLog from './components/wordle/show'
import EditLog from './components/wordle/edit'
import Home from './components/wordle/home'
import LoggedIn from './components/wordle/logged_in'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
	      <main className='container'>
	        <Route
            exact
            path='/'
            render={() => (
              <Home msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/hello'
            render={() => (
              <LoggedIn
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-log'
            render={() => (
              <LogCreate
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            exact
            user={user}
            path='/logs'
            render={() => (
              <IndexLog
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/alllogs'
            render={() => (
              <IndexAllLog
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/logs/:id'
            render={() =>
              <ShowLog
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />}
          />
          <AuthenticatedRoute
            user={user}
            path='/logs/:id/edit'
            render={() =>
              <EditLog
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user} />}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
