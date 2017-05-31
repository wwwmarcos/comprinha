import React, { Component } from 'react'
import { AppRegistry,  StyleSheet, Text, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ProductListActions'
import ProductList from '../components/ProductList'
import BarCodeScanner from '../components/BarCodeScanner'

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
  }
})

class ComprinhaApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: props.products,
      onBarCodeRead: props.onBarCodeRead
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WOOWOWohss
        </Text>
        <BarCodeScanner onBarCodeRead={this.state.onBarCodeRead} />
        <ProductList style={styles.welcome} products={this.state.products} />
      </View>
    )
  }
} 

const mapStateToProps = (state) => state.productList

const mapDispatchToProps = (dispatch => ({
  onBarCodeRead(code) {
    dispatch(addProduct({name: 'wow', id: code.data}))
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(ComprinhaApp)