import * as types from '../types'

const initialState = {
  error: null,
  isCateLoading: false,
  isFilterLoading: false,
  category_data: null,
  filter_data: null,
  car_brand: [],
  model_car: [],
  year_car: [],
  retail_brand: [],
  size: [],
  color: [],
  condition: [],
  cate_breadcrum_data: [],
  sort_order: [],
  min_max_price: [],
  product_price: []
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_REQUEST:
      return {
        ...state,
        isCateLoading: true
      }
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isCateLoading: false,
        category_data: action.data
      }
    case types.GET_CATEGORY_ERROR:
      return {
        ...state,
        isCateLoading: false,
        error: action.error
      }
    case types.GET_FILTER_TYPE_REQUEST:
      return {
        ...state,
        isFilterLoading: true
      }
    case types.GET_FILTER_TYPE_SUCCESS:
      return {
        ...state,
        isFilterLoading: false,
        filter_data: action.data
      }
    case types.GET_FILTER_TYPE_ERROR:
      return {
        ...state,
        isFilterLoading: false,
        error: action.error
      }
    case 'CATE_BREADCRUM':
      return {
        ...state,
        cate_breadcrum_data: action.data
      }
    case 'CAR_BRAND':
      return {
        ...state,
        car_brand: action.data
      }
    case 'MODEL_CAR':
      return {
        ...state,
        model_car: action.data
      }
    case 'YEAR_CAR':
      return {
        ...state,
        year_car: action.data
      }
    case 'RETAIL_BRAND':
      return {
        ...state,
        retail_brand: action.data
      }
    case 'SIZE':
      return {
        ...state,
        size: action.data
      }
    case 'COLOR':
      return {
        ...state,
        color: action.data
      }
    case 'CONDITION':
      return {
        ...state,
        condition: action.data
      }
    case 'SORT_ORDER':
      return {
        ...state,
        sort_order: action.data
      }
    case 'PRODUCT_PRICE':
      return {
        ...state,
        product_price: action.data
      }
    case 'MIN_MAX_PRICE':
      return {
        ...state,
        min_max_price: action.data
      }
    case 'RESET_FILTER':
      return {
        ...state,
        car_brand: [],
        model_car: [],
        year_car: [],
        retail_brand: [],
        size: [],
        color: [],
        sort_order: [],
        condition: [],
      }
    default:
      return state
  }
}

export default category