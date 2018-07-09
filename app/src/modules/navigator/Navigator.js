import React from 'react'

import { DrawerNavigator, StackNavigator } from 'react-navigation'

import CounterViewContainer from '../counter/CounterViewContainer'
import ColorViewContainer from '../colors/ColorViewContainer'
import AvatarLoaderViewContainer from '../avatarloader/AvatarLoaderViewContainer'

import DrawerContent from '../DrawerContent'
import { IconToggle } from 'react-native-material-ui'

const headerColor = '#39babd'
const activeColor = 'white'

// DrawerNavigator is nested inside StackNavigator
export const MainScreenNavigator = DrawerNavigator(
  {
    Counter: { screen: CounterViewContainer },
    Color: { screen: ColorViewContainer },
    AvatarLoader: { screen: AvatarLoaderViewContainer }
  },
  {
    contentComponent: props => <DrawerContent settings={props} />
  }
)

MainScreenNavigator.navigationOptions = ({ navigation }) => ({
  title: 'Pepperoni App Template',
  headerTitleStyle: { color: activeColor },
  headerLeft: (
    <IconToggle
      color={activeColor}
      style={{ marginLeft: 10 }}
      name='menu'
      onPress={() => navigation.navigate('DrawerToggle')}
    />
  ),
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
})

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: { screen: MainScreenNavigator }})

export default AppNavigator
