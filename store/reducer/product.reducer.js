import * as types from '../types'

const initialState = {
  error: null,
  isLoading: false,
  isSearchLoading: false,
  isDetailLoading: false,
  isFeatureLoading: false,
  isPromoFeatureLoading: false,
  isPromotionLoading: false,
  isCustomLoading: false,
  product_data: null,
  product_search_data: null,
  product_promotion_data: null,
  product_custom_data: null,
  product_detail_data: null,
  feature_data: null,
  promo_feature_data: null,
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product_data: action.data
      }
    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case types.GET_PRODUCT_SEARCH_REQUEST:
      return {
        ...state,
        isSearchLoading: true
      }
    case types.GET_PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        product_search_data: action.data
      }
    case types.GET_PRODUCT_SEARCH_ERROR:
      return {
        ...state,
        isSearchLoading: false,
        error: action.error
      }
    case types.GET_PRODUCT_PROMOTION_REQUEST:
      return {
        ...state,
        isPromotionLoading: true
      }
    case types.GET_PRODUCT_PROMOTION_SUCCESS:
      return {
        ...state,
        isPromotionLoading: false,
        product_promotion_data: action.data
      }
    case types.GET_PRODUCT_PROMOTION_ERROR:
      return {
        ...state,
        isPromotionLoading: false,
        error: action.error
      }
    case types.GET_PRODUCT_CUSTOM_REQUEST:
      return {
        ...state,
        isCustomLoading: true
      }
    case types.GET_PRODUCT_CUSTOM_SUCCESS:
      return {
        ...state,
        isCustomLoading: false,
        product_custom_data: action.data
      }
    case types.GET_PRODUCT_CUSTOM_ERROR:
      return {
        ...state,
        isCustomLoading: false,
        error: action.error
      }
    case types.GET_FEATURE_PRODUCT_REQUEST:
      return {
        ...state,
        isFeatureLoading: true
      }
    case types.GET_FEATURE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFeatureLoading: false,
        feature_data: action.data
      }
    case types.GET_FEATURE_PRODUCT_ERROR:
      return {
        ...state,
        isFeatureLoading: false,
        error: action.error
      }
    case types.GET_PROMO_FEATURE_PRODUCT_REQUEST:
      return {
        ...state,
        isPromoFeatureLoading: true
      }
    case types.GET_PROMO_FEATURE_PRODUCT_SUCCESS:
      return {
        ...state,
        isPromoFeatureLoading: false,
        promo_feature_data: action.data
      }
    case types.GET_PROMO_FEATURE_PRODUCT_ERROR:
      return {
        ...state,
        isPromoFeatureLoading: false,
        error: action.error
      }
    case types.GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isDetailLoading: true
      }
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        error: null,
        isDetailLoading: false,
        product_detail_data: action.data
      }
    case types.GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isDetailLoading: false,
        error: action.error
      }
    case types.GET_RELATED_PRODUCT_REQUEST:
      return {
        ...state,
        isRelatedLoading: true
      }
    case types.GET_RELATED_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        isRelatedLoading: false,
        related_data: action.data
      }
    case types.GET_RELATED_PRODUCT_ERROR:
      return {
        ...state,
        isRelatedLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default product