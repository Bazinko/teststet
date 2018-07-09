import React, { Component } from 'react'
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AvatarLoaderView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedImage: null
    }
    this.choosePicture = this.choosePicture.bind(this)
    this.saveCroppedImage = this.saveCroppedImage.bind(this)
    this.dismissCroppedImage = this.dismissCroppedImage.bind(this)
  }

  async choosePicture () {
    let res = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      // includeBase64: true,
      showCropGuidelines: false
    })
    console.log('res: ', res)
    this.setState({
      selectedImage: res
    })
  }

  saveCroppedImage () {
    console.log('save image')
  }

  dismissCroppedImage () {
    this.setState({
      selectedImage: null
    })
  }

  render () {
    let imageControls = null
    let uri = null
    const { selectedImage } = this.state
    if (selectedImage) {
      /* handlers to save or cancel uploaded and cropped image */
      imageControls = (
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Button title='Save' onPress={this.saveCroppedImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              color='red'
              title='Cancel'
              onPress={this.dismissCroppedImage}
            />
          </TouchableOpacity>
        </View>
      )
      /* set url of image */
      uri = this.state.selectedImage.path
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ marginBottom: 5 }}>
          <Button
            color='#ee7f06'
            title='Choose a picture'
            onPress={this.choosePicture}
          />
        </TouchableOpacity>

        <Image source={{ isStatic: true, uri }} style={styles.image} />
        {imageControls}
      </View>
    )
  }
}

AvatarLoaderView.displayName = 'AvatarLoaderView'
AvatarLoaderView.navigationOptions = {
  title: 'Avatar Loader',
  drawerIcon: () => <Icon name='face' size={24} color='black' />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  bottomContainer: {
    marginTop: 5,
    flexDirection: 'row'
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 50
  }
})

export default AvatarLoaderView
