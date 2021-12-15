import * as types from '../types'
import serviceController, { routes } from '../../controller'
import { ToDoRequest, ToDoSuccess, ToDoError } from './typehandle.action'
import { authStore } from 'service'

const getAccount = (lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_ACCOUNT_REQUEST))
  return await serviceController(routes.getAccount, lang)
    .then(res => {
      if (res.data.id) {
        dispatch(ToDoSuccess(types.GET_ACCOUNT_SUCCESS, res?.data))
      } else {
        authStore.removeAuth();
        dispatch(ToDoError(types.GET_ACCOUNT_ERROR, res?.data))
      }
    })
    .catch(error => {
      authStore.removeAuth();
      dispatch(ToDoError(types.GET_ACCOUNT_ERROR, error.message))
    })
}

const updateName = (data) => async dispatch => {
  dispatch(ToDoRequest(types.UPDATE_NAME_REQUEST))
  return await serviceController(routes.updateName, data)
    .then(res => {
      if (res.status === 200) {
        dispatch(ToDoSuccess(types.UPDATE_NAME_SUCCESS, res))
        return res  
      } else {
        return null
      }
    })
    .catch(error => {
      dispatch(ToDoError(types.UPDATE_NAME_ERROR, error.message))
    })
}

const updateMobile = (data) => async dispatch => {
  dispatch(ToDoRequest(types.UPDATE_MOBILE_REQUEST))
  return await serviceController(routes.postOTPSend, data)
    .then(res => {
      dispatch(ToDoSuccess(types.UPDATE_MOBILE_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.UPDATE_MOBILE_ERROR, error.message)))
}

const updateMobileVerify = (data) => async dispatch => {
  dispatch(ToDoRequest(types.UPDATE_MOBILE_VERIFY_REQUEST))
  return await serviceController(routes.postOTPVerify, data)
    .then(res => {
      dispatch(ToDoSuccess(types.UPDATE_MOBILE_VERIFY_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.UPDATE_MOBILE_VERIFY_ERROR, error.message)))
}

const collectCoupon = (data) => async dispatch => {
  dispatch(ToDoRequest(types.COLLECT_COUPON_REQUEST))
  return await serviceController(routes.collectCoupon, data)
    .then(res => {
      dispatch(ToDoSuccess(types.COLLECT_COUPON_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.COLLECT_COUPON_ERROR, error.message)))
}

const getCoupon = () => async dispatch => {
  dispatch(ToDoRequest(types.GET_COUPON_LIST_REQUEST))
  return await serviceController(routes.getCoupon)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_COUPON_LIST_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_COUPON_LIST_ERROR, error.message)))
}

const applyCoupon = (quoteId, couponCode) => async dispatch => {
  dispatch(ToDoRequest(types.APPLY_COUPON_REQUEST))
  return await serviceController(`${routes.applyCoupon}/${quoteId}/coupons/${couponCode}`)
    .then(res => {
      dispatch(ToDoSuccess(types.APPLY_COUPON_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.APPLY_COUPON_ERROR, error.message)))
}

const cancelCoupon = (quoteId) => async dispatch => {
  dispatch(ToDoRequest(types.CANCEL_COUPON_REQUEST))
  return await serviceController(`${routes.cancelCoupon}/${quoteId}/coupons`)
    .then(res => {
      dispatch(ToDoSuccess(types.CANCEL_COUPON_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CANCEL_COUPON_ERROR, error.message)))
}

const cleanData = (type, data) => {
  return ({
    type,
    data
  })
}

export const account = {
  getAccount,
  cleanData,
  updateName,
  updateMobile,
  updateMobileVerify,
  collectCoupon,
  getCoupon,
  applyCoupon,
  cancelCoupon
}