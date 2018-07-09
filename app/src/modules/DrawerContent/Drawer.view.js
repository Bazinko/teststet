import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import CenterMenu from './components/CenterMenu'
import BottomMenu from './components/BottomMenu'
import { Divider } from 'react-native-material-ui'

export default class DrawerContent extends Component {
  constructor (props) {
    super(props)

    this.onMenuItemPress = this.onMenuItemPress.bind(this)
    this.signOut = this.signOut.bind(this)
    this.icons = {
      Color: 'color-lens',
      AvatarLoader: 'face',
      Counter: 'plus-one'
    }
  }

  onMenuItemPress (route) {
    const { navigate } = this.props.settings.navigation
    navigate(route)
  }

  getCenterMenu (items) {
    return items.map(item => {
      return {
        text: item.key,
        icon: this.icons[item.key],
        route: item.routeName
      }
    })
  }

  signOut () {
    const { signOut } = this.props
    signOut()
  }

  render () {
    const centerMenu = this.getCenterMenu(this.props.settings.items)

    /* for bottom onclick handlers may be not the same */
    const bottomMenu = [
      { text: 'Settings', icon: 'settings' },
      { text: 'Sign out', icon: 'exit-to-app', onClick: this.signOut }
    ]

    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <Header
            user={{
              name: 'John Doe',
              email: 'johndoe@mail.com'
            }}
            onItemPress={this.onMenuItemPress}
          />
          <Divider />
          <CenterMenu menu={centerMenu} onItemPress={this.onMenuItemPress} />
        </View>
        <View>
          <Divider />
          <BottomMenu menu={bottomMenu} />
        </View>
      </View>
    )
  }
}
