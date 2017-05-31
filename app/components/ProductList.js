import React, { Component, PropTypes } from 'react'
import { View, ListView } from 'react-native'
import ProductListItem from './ProductListItem'

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
})

export default class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: dataSource.cloneWithRows(props.products)
    }
  }

  renderRow = (product) => {
    return <ProductListItem product={product} />
  }

  updateDataSource = (products) => {
    this.setState({
      dataSource: dataSource.cloneWithRows(products)
    })
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.products)
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}
