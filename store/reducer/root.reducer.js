import { combineReducers } from "redux"

import home from './home.reducer'
import auth from './auth.reducer'
import translate from "./translation.reducer"
import category from "./category.reducer"
import product from "./product.reducer"
import account from "./account.reducer"
import ecommerce from "./ecommerce.reducer"
import order from "./order.reducer"

export default combineReducers({
  home,
  auth,
  translate,
  category,
  product,
  account,
  ecommerce,
  order
})