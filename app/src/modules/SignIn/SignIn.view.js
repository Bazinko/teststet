import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { TextButton } from 'react-native-material-buttons'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.signIn = this.signIn.bind(this)
  }

  signIn () {
    const { email, password } = this.state

    const { signIn } = this.props
    signIn({ email, password })

  }

  handleChange (name) {
    return value => {
      this.setState(state => ({
        ...state,
        [name]: value
      }))
    }
  }

  render () {
    const { email, password } = this.state
    const logInDisabled = !(email.length > 0 && password.length > 0)

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'royalblue',
          padding: 40,
          paddingBottom: 80,
          justifyContent: 'flex-end'
        }}
      >
        <TextField
          textColor='white'
          tintColor='white'
          baseColor='white'
          label='Email'
          value={email}
          keyboardType='email-address'
          onChangeText={this.handleChange('email')}
        />
        <TextField
          textColor='white'
          tintColor='white'
          baseColor='white'
          label='Password'
          value={password}
          secureTextEntry
          onChangeText={this.handleChange('password')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25
          }}
        >
          <TextButton titleColor='white' title='Forgot password' />
          <TextButton
            onPress={this.signIn}
            disabled={logInDisabled}
            titleColor='white'
            title='Log in'
          />
        </View>
      </View>
    )
  }
}
