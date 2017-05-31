import * as actionTypes from '../constants/ActionTypes'

const initialState = {
  products: [],
}

export default function productList(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return [...state, action.product ]
    default:
      return state
  }
}