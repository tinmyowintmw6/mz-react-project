import * as types from '../types'

const initialState = {
  error: null,
  isLoading: false,
  isDetailLoading: false,
  isCancelLoading: false,
  order_data: null,
  order_detail_data: null,
  cancel_order_data: null,
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDER_REQUEST: // GETORDER
      return {
        ...state,
        isLoading: true
      }
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order_data: action.data
      }
    case types.GET_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.GET_ORDER_DETAIL_REQUEST: // GETORDERBYID
      return {
        ...state,
        isDetailLoading: true
      }
    case types.GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        isDetailLoading: false,
        order_detail_data: action.data
      }
    case types.GET_ORDER_DETAIL_ERROR:
      return {
        ...state,
        isDetailLoading: false,
        error: action.error
      }
    case types.CANCEL_ORDER_REQUEST: // cancel order
      return {
        ...state,
        isCancelLoading: true
      }
    case types.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        isCancelLoading: false,
        cancel_order_data: action.data
      }
    case types.CANCEL_ORDER_ERROR:
      return {
        ...state,
        isCancelLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default order