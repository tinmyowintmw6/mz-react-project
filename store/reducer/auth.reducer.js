import * as types from '../types'
import { authStore } from 'service'

const initialState = {
  error: null,
  isLoading: false,
  sentSignIn_data: null,
  sentSignInOTP_data: authStore.getAuth() || null,
  sentSignUp_data: null,
  sentSignUpOTP_data: null,
  sentAccountCreate_data: authStore.getAuth() || null,
  sentSocial_data: null,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentSignIn_data: action.data
      }
    case types.SEND_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SEND_SIGNINOTP_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_SIGNINOTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentSignInOTP_data: action.data
      }
    case types.SEND_SIGNINOTP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SEND_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentSignUp_data: action.data
      }
    case types.SEND_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SEND_SIGNUPOTP_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_SIGNUPOTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentSignUpOTP_data: action.data
      }
    case types.SEND_SIGNUPOTP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SEND_ACCOUNT_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_ACCOUNT_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentAccountCreate_data: action.data
      }
    case types.SEND_ACCOUNT_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.SEND_SOCIAL_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.SEND_SOCIAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sentSocial_data: action.data
      }
    case types.SEND_SOCIAL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default auth