import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

export default class ProductListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: props.product
    }
  }

  render(){
    return ( 
      <View>
        <Text>
          {this.state.product.wow} {this.state.product.id}
        </Text>
      </View>
    )
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
}