import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'
import { authStore, ecommerceStore } from 'service'

const signIn = (data) => async dispatch => {
  dispatch(ToDoSuccess(types.SEND_SIGNIN_SUCCESS, data))
  return await serviceController(routes.postOTPSend, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_SIGNUP_SUCCESS, res))
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_SIGNUP_ERROR, error)))
}

const signInOTP = data => async dispatch => {
  dispatch(ToDoRequest(types.SEND_SIGNINOTP_REQUEST))
  return await serviceController(routes.postOTPVerify, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_SIGNINOTP_SUCCESS, res))
        authStore.setAuth(res.data)
        ecommerceStore.removeQuote()
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_SIGNINOTP_ERROR, error)))
}

const signUp = data => async dispatch => {
  dispatch(ToDoRequest(types.SEND_SIGNUP_REQUEST))
  return await serviceController(routes.postOTPSend, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_SIGNUP_SUCCESS, res))
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_SIGNUP_ERROR, error)))
}

const signUpOTP = data => async dispatch => {
  dispatch(ToDoRequest(types.SEND_SIGNUPOTP_REQUEST))
  return await serviceController(routes.postOTPVerify, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_SIGNUPOTP_SUCCESS, res))
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_SIGNUPOTP_ERROR, error)))
}

const sendAccountCreate = data => async dispatch => {
  dispatch(ToDoRequest(types.SEND_ACCOUNT_CREATE_REQUEST))
  return await serviceController(routes.postAccountCreate, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_ACCOUNT_CREATE_SUCCESS, res))
        authStore.setAuth(res.data)
        ecommerceStore.removeQuote()
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_ACCOUNT_CREATE_ERROR, error)))
}

const socialLogin = (data) => async dispatch => {
  dispatch(ToDoRequest(types.SEND_SOCIAL_REQUEST))
  return await serviceController(routes.postSocialLogin, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(ToDoSuccess(types.SEND_SOCIAL_SUCCESS, res))
        authStore.setAuth(res.data)
        ecommerceStore.removeQuote()
        return res
      } else {
        return res
      }
    })
    .catch(error => dispatch(ToDoError(types.SEND_SOCIAL_ERROR, error)))
}

const signOut = () => async dispatch => {
  dispatch(ToDoSuccess(types.SEND_SIGNINOTP_SUCCESS, null))
  dispatch(ToDoSuccess(types.SEND_ACCOUNT_CREATE_SUCCESS, null))
  dispatch(ToDoSuccess(types.SEND_SOCIAL_SUCCESS, null))
  authStore.removeAuth()
  ecommerceStore.removeQuote()
  // if (typeof window !== "undefined") {
  //   window.location.href = "/"
  // }
}

export const auth = {
  signIn,
  signInOTP,
  signUp,
  signUpOTP,
  signOut,
  socialLogin,
  sendAccountCreate
}