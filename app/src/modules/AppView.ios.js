import React, { Component } from 'react'
import RootView from './RootViewContainer'
import PropTypes from 'prop-types'

class AppView extends Component {
  render () {
    return <RootView />
  }
}

AppView.displayName = 'AppView'
AppView.propTypes = {
  isReady: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default AppView
