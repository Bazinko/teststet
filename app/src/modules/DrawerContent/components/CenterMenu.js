import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { ListItem, Icon } from 'react-native-material-ui'

export default class DrawerCenterMenu extends Component {
  constructor (props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (item) {
    return (
      <ListItem
        key={`DrawerCenterMenu-${item.text}`}
        onPress={() => {
          this.props.onItemPress(item.route)
        }}
        leftElement={<Icon style={{ marginLeft: 10 }} name={item.icon} />}
        centerElement={{
          primaryText: item.text
        }}
      />
    )
  }

  render () {
    const { menu } = this.props

    return (
      <FlatList data={menu} renderItem={({ item }) => this.renderItem(item)} />
    )
  }
}
