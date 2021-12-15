import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'

const getCategory = (lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_CATEGORY_REQUEST))
  return await serviceController(`${routes.getCategory}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_CATEGORY_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_CATEGORY_ERROR, error.message)))
}

const getFilterType = (cateId, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_FILTER_TYPE_REQUEST))
  return await serviceController(`${routes.getFilterType}/${cateId}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_FILTER_TYPE_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_FILTER_TYPE_ERROR, error.message)))
}

const getFilterItem = (type, data) => { 
  return ({
    type,
    data
  })
}

export const category = {
  getCategory,
  getFilterType,
  getFilterItem
}