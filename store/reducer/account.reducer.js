import * as types from '../types'

const initialState = {
  error: null,
  isLoading: false,
  account_data: null,
  update_name_data: null,
  update_mobile_data: null,
  update_mobile_verify_data: null,
  collect_coupon_data: null,
  coupon_list_data: null,
  apply_coupon_data: null,
  cancel_coupon_data: null
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        account_data: action.data
      }
    case types.GET_ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.UPDATE_NAME_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_NAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        update_name_data: action.data
      }
    case types.UPDATE_NAME_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.UPDATE_MOBILE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_MOBILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        update_mobile_data: action.data
      }
    case types.UPDATE_MOBILE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.UPDATE_MOBILE_VERIFY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_MOBILE_VERIFY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        update_mobile_verify_data: action.data
      }
    case types.UPDATE_MOBILE_VERIFY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.COLLECT_COUPON_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.COLLECT_COUPON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collect_coupon_data: action.data
      }
    case types.COLLECT_COUPON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.GET_COUPON_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_COUPON_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coupon_list_data: action.data
      }
    case types.GET_COUPON_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.APPLY_COUPON_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.APPLY_COUPON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apply_coupon_data: action.data
      }
    case types.APPLY_COUPON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.CANCEL_COUPON_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.CANCEL_COUPON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cancel_coupon_data: action.data
      }
    case types.CANCEL_COUPON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case 'ACCOUNT_CLEAN_DATA':
      return {
        ...state,
        account_data: null
      }
    default:
      return state
  }
}

export default account