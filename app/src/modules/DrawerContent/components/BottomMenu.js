import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem, Icon, Divider } from 'react-native-material-ui'

export default class DrawerBottomMenu extends Component {
  constructor (props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem ({ text, icon, onClick = () => console.log('not present') }) {
    return (
      <ListItem
        key={`DrawerBottomMenu-${text}`}
        onPress={() => onClick()}
        leftElement={<Icon style={{ marginLeft: 10 }} name={icon} />}
        centerElement={{
          primaryText: text
        }}
      />
    )
  }

  render () {
    const { menu } = this.props

    return (
      <View>
        <Divider />
        <FlatList
          data={menu}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    )
  }
}
