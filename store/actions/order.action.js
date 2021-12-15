import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'
import { routeFilter } from 'src/components/utils'

const getOrder = (params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_ORDER_REQUEST))
  return await serviceController(`${routes.getOrder}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_ORDER_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_ORDER_ERROR, error.message)))
}

const getOrderDetail = (order_id, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_ORDER_DETAIL_REQUEST))
  return await serviceController(`${routes.getOrderDetail}?order_id=${order_id}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_ORDER_DETAIL_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_ORDER_DETAIL_ERROR, error.message)))
}

const cancelOrder = (order_id, data) => async dispatch => {
  dispatch(ToDoRequest(types.CANCEL_ORDER_REQUEST))
  return await serviceController(`${routes.cancelOrder}/${order_id}/cancel`, data)
    .then(res => {
      dispatch(ToDoSuccess(types.CANCEL_ORDER_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.CANCEL_ORDER_ERROR, error.message)))
}

export const order = {
  getOrder,
  getOrderDetail,
  cancelOrder
}