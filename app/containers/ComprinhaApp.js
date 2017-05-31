import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert  
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  centerLine: {
    textAlign: 'center',
    color: '#F22613',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

import Camera from 'react-native-camera'

export default class ComprinhaApp extends Component {
  
  onBarCodeRead = (data) => {
    console.log(data)
    Alert.alert(data.data)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WOOWOWoh
        </Text>
        <Camera
          ref="cam"
          style={styles.container}
          onBarCodeRead={this.onBarCodeRead}
        >
        <Text style={styles.centerLine}>
          ____________________________________________________
          </Text>
        </Camera>
      </View>
    )
  }
  
}

