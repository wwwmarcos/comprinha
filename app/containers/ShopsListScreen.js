import React from 'react'
import { connect } from 'react-redux'
import { View, ListView, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import ShopList from '../components/ShopList'
import AddButton from '../components/AddButton'

const ShopsListScreen = ({ shopList, createList, navigation }) => {
  
  const onItemPress = (shop) => {
    Alert.alert('fire')
  }

  const onLongPress = (shop) => {
    Alert.alert('looong fire')
  }

  const goToBarCodeScanner = () => {
    navigation.navigate('BarCodeScannerScreen')
  }

  return (
    <View>
      <AddButton onPress={ goToBarCodeScanner } title='Adicionar Produto' /> 
      <ShopList shops={ shopList } onItemPress={ onItemPress } onLongPress={ onLongPress } />
    </View>
  )
}

const mapStateToProps = ({ shopList }) => shopList

export default connect(mapStateToProps)(ShopsListScreen)