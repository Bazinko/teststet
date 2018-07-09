import React, { Component } from 'react'
import { ListItem, Avatar } from 'react-native-material-ui'

export default class DrawerHeader extends Component {
  render () {
    const { user } = this.props
    const image = this.props.avatar ? this.props.avatar : null
    const avatar = <Avatar image={image} icon='person' />

    return (
      <ListItem
        leftElement={avatar}
        onPress={() => {
          this.props.onItemPress()
        }}
        centerElement={{
          primaryText: user.name,
          secondaryText: user.email
        }}
      />
    )
  }
}
