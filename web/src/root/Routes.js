import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFoundPage from './../components/NotFoundPage'
import SignIn from './../modules/SignIn'
import { WithAuth, userIsNotAuthenticated } from './Auth'
import GCFP from './../modules/GCFP';

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={userIsNotAuthenticated(SignIn)} />
        <WithAuth>
          <Route path='/gcfcPanel' component={GCFP} />
        </WithAuth>
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
