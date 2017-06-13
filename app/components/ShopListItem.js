import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { WHITE_COLOR, BLACK_COLOR } from '../constants/AppColors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 22,
    backgroundColor: WHITE_COLOR,
  },
  text: {
    textAlign: 'center',
    marginLeft: 12,
    fontSize: 16,
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 0.5,
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
  },
  price: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
  },
  subText: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 2
  }
})

const ShopListItem = ({ shop, onItemPress, onLongPress }) => (
  <View>
    <TouchableHighlight onPress={ () => onItemPress(shop) } onLongPress={ () => onLongPress(shop) }>
    <View style={ styles.container }>
    <Text style={ styles.title }>
      { shop.name }
    </Text>
    <Text style={ styles.price }>
      R$ { shop.price }
    </Text>
    <Text style={ styles.subText }>
      { shop.code }
    </Text>
    </View>
    </TouchableHighlight>
    <View style={styles.hr}/>
  </View>
)

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired
}

export default ShopListItem