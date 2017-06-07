import React, { PropTypes } from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hr: {
    backgroundColor: '#F22613',
    height: 1.5,
    marginLeft: 0,
    marginRight: 0,
  }
})

const BarCodeScanner = ({ onBarCodeRead }) => (
  <View style={ styles.container }>
    <Camera
      style={ styles.container }
      onBarCodeRead={ onBarCodeRead }>
      <View style={ styles.hr }></View>
    </Camera>
  </View>
)

BarCodeScanner.propTypes = {
  onBarCodeRead: PropTypes.func.isRequired
}

export default BarCodeScanner
