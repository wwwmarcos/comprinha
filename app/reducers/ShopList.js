import {
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_FULFILLED,
  PRODUCTS_REJECTED
} from '../constants/ActionTypes'

const initialState = {
  shopList: [],
  error: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_PENDING:
      return state

    case ADD_PRODUCT_FULFILLED:
      return {
        ...state,
        shopList: [...state.shopList, action.payload.data]
      }

    case PRODUCTS_REJECTED:
      return {
        ...state,
        error: action.payload.message
      }

    default:
      return state
  }
}