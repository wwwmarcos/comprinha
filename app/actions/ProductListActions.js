import * as actionTypes from '../constants/ActionTypes'

export function addProduct(product){
  return {
    type: actionTypes.ADD_PRODUCT,
    product
  }
}