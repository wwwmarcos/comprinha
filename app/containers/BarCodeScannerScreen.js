import React, { Component } from 'react'
import { AppRegistry,  StyleSheet, Text, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ShopListActions'
import BarCodeScanner from '../components/BarCodeScanner'

const BarCodeSnannerScreen = ({ onBarCodeRead, navigation }) =>  (
  <BarCodeScanner onBarCodeRead={ onBarCodeRead } />
)

const mapStateToProps = ( state ) => state

const mapDispatchToProps = (dispatch => ({
  onBarCodeRead(code) {
    Alert.alert(code.data)
    dispatch(addProduct({ code: code.data}))
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(BarCodeSnannerScreen)