import * as types from '../types'
import { ecommerceStore } from 'service'

const initialState = {
  error: null,
  isLoading: false,
  isCartLoading: false,
  isOrderLoading: false,
  quote_data: ecommerceStore.getQuote() || null,
  createcart_data: null,
  cart_data: null,
  update_cart_data: null,
  deletecart_data: null,
  township_data: null,
  create_address_data: null,
  delete_address_data: null,
  est_shipping_method_data: null,
  shipping_method_data: null,
  animated_data: false,
  checked_address: null,
  place_order_data: null,
}

const ecommerce = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_QUOTE_REQUEST: // genereate quote
      return {
        ...state,
        isLoading: true
      }
    case types.CREATE_QUOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quote_data: action.data
      }
    case types.CREATE_QUOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.CREATE_CART_REQUEST: // createCart
      return {
        ...state,
        isLoading: true
      }
    case types.CREATE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createcart_data: action.data
      }
    case types.CREATE_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.GET_CART_REQUEST: // getCart
      return {
        ...state,
        isCartLoading: true
      }
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isCartLoading: false,
        cart_data: action.data
      }
    case types.GET_CART_ERROR:
      return {
        ...state,
        isCartLoading: false,
        error: action.error
      }
    case types.UPDATE_CART_REQUEST: // updateCart
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        update_cart_data: action.data
      }
    case types.UPDATE_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.DELETE_CART_REQUEST: // deleteCart
      return {
        ...state,
        isLoading: true
      }
    case types.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deletecart_data: action.data
      }
    case types.DELETE_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.GET_TOWNSHIP_REQUEST: // get township lists
      return {
        ...state,
        isLoading: true
      }
    case types.GET_TOWNSHIP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        township_data: action.data
      }
    case types.GET_TOWNSHIP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.CREATE_ADDRESS_REQUEST: // CREATE_ADDRESS_INFO
      return {
        ...state,
        isLoading: true
      }
    case types.CREATE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        create_address_data: action.data
      }
    case types.CREATE_ADDRESS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.DELETE_ADDRESS_REQUEST: // DELETE_ADDRESS_INFO
      return {
        ...state,
        isLoading: true
      }
    case types.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        delete_address_data: action.data
      }
    case types.DELETE_ADDRESS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.EST_SHIPPING_METHOD_REQUEST: // est shipping method
      return {
        ...state,
        isLoading: true
      }
    case types.EST_SHIPPING_METHOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        est_shipping_method_data: action.data
      }
    case types.EST_SHIPPING_METHOD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SET_SHIPPING_METHOD_REQUEST: // set shipping method
      return {
        ...state,
        isLoading: true
      }
    case types.SET_SHIPPING_METHOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shipping_method_data: action.data
      }
    case types.SET_SHIPPING_METHOD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.PLACE_ORDER_REQUEST: // getPaymentList
      return {
        ...state,
        isOrderLoading: true
      }
    case types.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        isOrderLoading: false,
        place_order_data: action.data
      }
    case types.PLACE_ORDER_ERROR:
      return {
        ...state,
        isOrderLoading: false,
        error: action.error
      }
    case 'ANIMATED':
      return {
        ...state,
        animated_data: action.data
      }
    case 'REMOVE_STORE_DATA':
      return {
        ...state,
        quote_data: null,
        cart_data: null,
      }
    case 'CHECKED_ADDRESS':
      return {
        ...state,
        checked_address: action.data,
      }
    default:
      return state
  }
}

export default ecommerce