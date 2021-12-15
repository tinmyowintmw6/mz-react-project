export const routes = {
  // home page 
  getHome: `get:V2/home`,

  // product list 
  getProduct: `get:V2/products/category`,

  // search product list 
  getSearchProduct: `get:V2/products/filters`,

  // product detail
  getProductDetail: `get:V2/product/detailbyurlkey`,

  // related product
  getRelatedProduct: `get:V2/product`,

  // feature product list 
  getFeatureProduct: `get:V2/products/featured-products`,

  // feature product list 
  getPromoFeatureProduct: `get:V2/products/promotions/featured-products`,

  // promotion
  getPromotionProduct: `get:V2/products/promotions/biggest-sales`,

  // custom product end point
  getCustomProduct: `get:V2/products`,

  // main categories
  getCategory: `get:V2/main-categories`,

  // filter type for product listing sidebar
  getFilterType: `get:V2/category/filtertype`,

  // OTP Send
  postOTPSend: `post:V1/mobilelogin/otp/send`,

  // OTP Verify
  postOTPVerify: `post:V1/mobilelogin/otp/verify`,

  // Register Name & Email
  postAccountCreate: `post:V1/mobilelogin/account/create`,

  // social login
  postSocialLogin: `post:V1/mobilelogin/account/login`,

  // get account or get customer
  getAccount: `get:V2/customers/me`,

  // update name 
  updateName: `put:V1/customers/me`,

  // collect coupon 
  collectCoupon: `post:V1/mz-couponcollect/savecoupon`,

  // coupon list 
  getCoupon: `get:V1/mz-couponcollect/getcouponlist`,

  // apply coupon 
  applyCoupon: `put:V1/carts`,

  // cancel coupon 
  cancelCoupon: `delete:V1/carts`,

  // ecommerce
  // generate quote id (Guest)
  generateQuoteGuest: `post:V1/guest-carts`,

  // generate quote id (User)
  generateQuoteUser: `post:V1/carts/mine`,

  // create cart (Guest)
  addToCartGuest: `post:V1/guest-carts`,

  // create cart (User)
  addToCartUser: `post:V1/carts/mine/items`,

  // get cart (Guest)
  getCartGuest: `get:V1/guest-carts`,

  // get cart (User)
  getCartUser: `get:V1/carts/mine/items`,

  //update cart (User)
  updateCartUser: `put:V1/carts/mine/items`,

  // get township list 
  getTownship: `get:V1/eadesigndev-romcity/township-list`,

  // delete cart
  deleteCart: `delete:V1/carts/mine/items`,

  // delete address info
  createAddress: `post:V1/addresses`,

  // delete address info
  deleteAddress: `delete:V1/addresses`,

  // est Shipping Method 
  estShippingMethod: `post:V1/carts/mine/estimate-shipping-methods`,

  // set shipping method
  setShippingMethod: `post:V1/carts/mine/shipping-information`,

  // place order 
  placeOrder: `post:V1/carts/mine/payment-information`,

  // order listing
  getOrder: `get:V1/order/orderlists`,

  // order detail
  getOrderDetail: `get:V1/order`,

  // cancel order
  cancelOrder: `post:V2/orders`,
}