import * as types from '../types'

const initialState = {
  error: null,
  isLoading: false,
  home_data: null,
  free_deli: 'show'
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        home_data: action.data
      }
    case types.GET_HOME_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case 'SET_FREE_DELI':
      return {
        ...state,
        free_deli: action.data
      }
    default:
      return state
  }
}

export default home