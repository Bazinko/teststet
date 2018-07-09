import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import store from '../redux/store'
import { NavigationActions } from 'react-navigation'
import RootView from './RootViewContainer'

export default class AppView extends Component {
  navigateBack () {
    const navigatorState = store.getState().navigatorState

    const currentStackScreen = navigatorState.index
    const currentTab = navigatorState.routes[0].index

    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back())
      return true
    }

    // otherwise let OS handle the back button action
    return false
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.navigateBack)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.navigateBack);
  }

  render () {
    return <RootView />
  }
}

AppView.displayName = 'AppView'
