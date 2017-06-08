import { ADD_PRODUCT } from '../constants/ActionTypes'
import { END_POINT } from '../constants/Urls'
import axios from 'axios'

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: axios.get(END_POINT)
  }
}