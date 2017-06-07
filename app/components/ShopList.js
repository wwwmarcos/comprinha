import React, { PropTypes } from 'react'
import { View, ListView, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import ShopListItem from './ShopListItem'

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
})

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})

const ShopList = ({ shops, onItemPress, onLongPress }) => {

  const rows = dataSource.cloneWithRows(shops)

  const renderRow = (shop) => (
    <ShopListItem shop={ shop } onItemPress={ onItemPress } onLongPress={ onLongPress } />
  )

  return (
    <View>
        <ListView
        dataSource={ rows }
        renderRow={ renderRow }
        enableEmptySections={ true }
        automaticallyAdjustContentInsets={ false }
        renderSeparator={() => <View style={ styles.separator } />}
        />
    </View>
  )
}

ShopList.propTypes = {
  shops: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired
}

export default ShopList