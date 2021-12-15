import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'

const getHome = (lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_HOME_REQUEST))
  return await serviceController(`${routes.getHome}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_HOME_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_HOME_ERROR, error.message)))
}

const setFreeDeli = (type, data) => { 
  return ({
    type,
    data
  })
}

export const home = {
  getHome,
  setFreeDeli
}