import * as actionTypes from '../constants/ActionTypes';

export default function productList(state= {}, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return [...state, action.product ]
    default:
      return state;
  }
}