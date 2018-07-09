import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import NavigatorViewContainer from './navigator/NavigatorViewContainer'
import * as snapshotUtil from '../utils/snapshot'
import * as SessionStateActions from '../modules/session/SessionState'
import store from '../redux/store'
import DeveloperMenu from '../components/DeveloperMenu'
import SignIn from '../modules/SignIn'
import { ThemeProvider } from 'react-native-material-ui'
import {getAuthenticationToken, setAuthenticationToken} from '../utils/authentication';
import {resetConnection} from './session/SessionState';
import {socket} from '../redux/middleware/socketMiddleware';
import { AsyncStorage } from 'react-native'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
})

console.disableYellowBox = true

/* by moving that file here we avoid code duplication */

export default class RootView extends Component {
  async componentDidMount () {
    AsyncStorage.clear()
    socket.on('connect', () => {
      getAuthenticationToken().then(token => {
        socket.emit('token', token);
      });
    });
    socket.on('token', token => {
      setAuthenticationToken(token).then();
    });
    socket.on('disconnect', () => {
      this.props.dispatch(resetConnection());
    });

    const snapshot = await snapshotUtil.resetSnapshot()
    const { dispatch } = this.props

    if (snapshot) {
      dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot))
    } else {
      dispatch(SessionStateActions.initializeSessionState())
    }

    store.subscribe(() => {
      snapshotUtil.saveSnapshot(store.getState())
    })
  }



  render () {
    const { isReady, isLoggedIn } = this.props.session
    if (!isReady) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator style={styles.centered} />
        </View>
      )
    }

    let SetView = <SignIn />
    if (isLoggedIn) {
      SetView = (<ThemeProvider>
          <NavigatorViewContainer />
        </ThemeProvider>)
    }

    return (
      <View style={{ flex: 1 }}>
        {SetView}
        {__DEV__ && <DeveloperMenu />}
      </View>
    )
  }
}
