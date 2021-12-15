import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoRequest, ToDoSuccess, ToDoError } from '../actions/typehandle.action'
import { ecommerceStore } from 'service'

const generateQuoteGuest = (data) => async dispatch => {
  dispatch(ToDoRequest(types.CREATE_QUOTE_REQUEST))
  return await serviceController(`${routes.generateQuoteGuest}`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CREATE_QUOTE_SUCCESS, res.data))
      ecommerceStore.setQuote(res.data)
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CREATE_QUOTE_ERROR, error.message)))
}

const generateQuoteUser = (data) => async dispatch => {
  dispatch(ToDoRequest(types.CREATE_QUOTE_REQUEST))
  return await serviceController(`${routes.generateQuoteUser}`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CREATE_QUOTE_SUCCESS, res.data))
      ecommerceStore.setQuote(res.data)
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CREATE_QUOTE_ERROR, error.message)))
}

const addToCartGuest = (cartId, data) => async dispatch => {
  dispatch(ToDoRequest(types.CREATE_CART_REQUEST))
  return await serviceController(`${routes.addToCartGuest}/${cartId}/items`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CREATE_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CREATE_CART_ERROR, error.message)))
}

const addToCartUser = (data) => async dispatch => {
  dispatch(ToDoRequest(types.CREATE_CART_REQUEST))
  return await serviceController(routes.addToCartUser, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CREATE_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CREATE_CART_ERROR, error.message)))
}

const getCartGuest = (data) => async dispatch => {
  dispatch(ToDoRequest(types.GET_CART_REQUEST))
  return await serviceController(`${routes.getCartGuest}/${data}/items`)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_CART_ERROR, error.message)))
}

const getCartUser = () => async dispatch => {
  dispatch(ToDoRequest(types.GET_CART_REQUEST))
  return await serviceController(`${routes.getCartUser}`)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_CART_ERROR, error.message)))
}

const updateCartUser = (cartId, data) => async dispatch => {
  dispatch(ToDoRequest(types.UPDATE_CART_REQUEST))
  return await serviceController(`${routes.updateCartUser}/${cartId}`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.UPDATE_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.UPDATE_CART_ERROR, error.message)))
}

const deleteCart = (cartId) => async dispatch => {
  dispatch(ToDoRequest(types.DELETE_CART_REQUEST))
  return await serviceController(`${routes.deleteCart}/${cartId}`)
    .then(res => {
      dispatch(ToDoSuccess(types.DELETE_CART_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.DELETE_CART_ERROR, error.message)))
}

const getTownship = () => async dispatch => {
  dispatch(ToDoRequest(types.GET_TOWNSHIP_REQUEST))
  return await serviceController(`${routes.getTownship}`)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_TOWNSHIP_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_TOWNSHIP_ERROR, error.message)))
}

const createAddress = (data) => async dispatch => {
  dispatch(ToDoRequest(types.CREATE_ADDRESS_REQUEST))
  return await serviceController(`${routes.createAddress}`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CREATE_ADDRESS_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CREATE_ADDRESS_ERROR, error.message)))
}

const deleteAddress = (id) => async dispatch => {
  dispatch(ToDoRequest(types.DELETE_ADDRESS_REQUEST))
  return await serviceController(`${routes.deleteAddress}/${id}`)
    .then(res => {
      dispatch(ToDoSuccess(types.DELETE_ADDRESS_SUCCESS, res))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.DELETE_ADDRESS_ERROR, error.message)))
}

const estShippingMethod = (data) => async dispatch => {
  dispatch(ToDoRequest(types.EST_SHIPPING_METHOD_REQUEST))
  return await serviceController(routes.estShippingMethod, data)
    .then(res => {
      dispatch(ToDoSuccess(types.EST_SHIPPING_METHOD_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.EST_SHIPPING_METHOD_ERROR, error.message)))
}

const setShippingMethod = (data) => async dispatch => {
  dispatch(ToDoRequest(types.SET_SHIPPING_METHOD_REQUEST))
  return await serviceController(routes.setShippingMethod, data)
    .then(res => {
      dispatch(ToDoSuccess(types.SET_SHIPPING_METHOD_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.SET_SHIPPING_METHOD_ERROR, error.message)))
}

const placeOrder = (data) => async dispatch => {
  dispatch(ToDoRequest(types.PLACE_ORDER_REQUEST))
  return await serviceController(routes.placeOrder, data)
    .then(res => {
      dispatch(ToDoSuccess(types.PLACE_ORDER_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.PLACE_ORDER_ERROR, error.message)))
}

const setCartAnimate = (type, data) => {
  return ({
    type,
    data
  })
}

const setEcommerceStore = (type, data) => {
  return ({
    type,
    data
  })
}

const setCheckedAddress = (type, data) => {
  return ({
    type,
    data
  })
}

export const ecommerce = {
  generateQuoteGuest,
  generateQuoteUser,
  addToCartGuest,
  addToCartUser,
  getCartGuest,
  getCartUser,
  updateCartUser,
  deleteCart,
  getTownship,
  setCartAnimate,
  setEcommerceStore,
  createAddress,
  deleteAddress,
  setCheckedAddress,
  estShippingMethod,
  setShippingMethod,
  placeOrder
}