import * as actionTypes from '../constants/ActionTypes'

const initialState = {
  shopList: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        shopList: [...state.shopList, action.product]
      }
    default:
      return state
  }
}