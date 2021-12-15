import * as types from '../types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'
import { routeFilter } from 'src/components/utils'

const getProduct = (cate_id, params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PRODUCT_REQUEST))
  return await serviceController(`${routes.getProduct}/${cate_id}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_PRODUCT_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_PRODUCT_ERROR, error.message)))
}

const getSearchProduct = (params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PRODUCT_SEARCH_REQUEST))
  return await serviceController(`${routes.getSearchProduct}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_PRODUCT_SEARCH_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_PRODUCT_SEARCH_ERROR, error.message)))
}

const getPromotionProduct = (lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PRODUCT_PROMOTION_REQUEST))
  return await serviceController(`${routes.getPromotionProduct}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_PRODUCT_PROMOTION_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_PRODUCT_PROMOTION_ERROR, error.message)))
}

const getCustomProduct = (type, params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PRODUCT_CUSTOM_REQUEST))
  return await serviceController(`${routes.getCustomProduct}/${type}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_PRODUCT_CUSTOM_SUCCESS, res.data))
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_PRODUCT_CUSTOM_ERROR, error.message)))
}

const getProductDetail = (params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PRODUCT_DETAIL_REQUEST))
  return await serviceController(`${routes.getProductDetail}/${params}`, lang)
    .then(res => {
      if (res.status === 200) {
        dispatch(ToDoSuccess(types.GET_PRODUCT_DETAIL_SUCCESS, res.data))
      } else {
        dispatch(ToDoError(types.GET_PRODUCT_DETAIL_ERROR, true))
      }
      return res.data
    })
    .catch(error => dispatch(ToDoError(types.GET_PRODUCT_DETAIL_ERROR, true)))
}

const getRelatedProduct = (sku, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_RELATED_PRODUCT_REQUEST))
  return await serviceController(`${routes.getRelatedProduct}/${sku}/related`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_RELATED_PRODUCT_SUCCESS, res))
    })
    .catch(error => dispatch(ToDoError(types.GET_RELATED_PRODUCT_ERROR, error.message)))
}

const getFeatureProduct = (params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_FEATURE_PRODUCT_REQUEST))
  return await serviceController(`${routes.getFeatureProduct}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_FEATURE_PRODUCT_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_FEATURE_PRODUCT_ERROR, error.message)))
}

const getPromoFeatureProduct = (params, lang) => async dispatch => {
  dispatch(ToDoRequest(types.GET_PROMO_FEATURE_PRODUCT_REQUEST))
  return await serviceController(`${routes.getPromoFeatureProduct}?${routeFilter(params)}`, lang)
    .then(res => {
      dispatch(ToDoSuccess(types.GET_PROMO_FEATURE_PRODUCT_SUCCESS, res.data))
    })
    .catch(error => dispatch(ToDoError(types.GET_PROMO_FEATURE_PRODUCT_ERROR, error.message)))
}

export const product = {
  getProduct,
  getSearchProduct,
  getProductDetail,
  getFeatureProduct,
  getRelatedProduct,
  getPromotionProduct,
  getCustomProduct,
  getPromoFeatureProduct
}