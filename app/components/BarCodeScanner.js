import React, { Component, PropTypes } from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centerLine: {
    textAlign: 'center',
    color: '#F22613',
  }
})

export default class BarCodeScanner extends Component {
  constructor(props) {
    super(props)
    this.onBarCodeRead = props.onBarCodeRead
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref="cam"
          style={styles.container}
          onBarCodeRead={this.onBarCodeRead}>
          <Text style={styles.centerLine}>
            ____________________________________________________
          </Text>
        </Camera>
      </View>
    )
  }
}

BarCodeScanner.propTypes = {
  onBarCodeRead: PropTypes.func.isRequired
}
