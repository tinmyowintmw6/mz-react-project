import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import Components from "src/components"
import { 
  Container, 
  Row, 
  Col, 
} from "reactstrap"
import { Section } from "src/styles/components"
import styled from "styled-components"
import { colors } from "src/styles/constants"
import { 
  Checkbox,  
  Button, 
  IconButton,
  TextField, 
  DialogTitle, 
  DialogContent,
  DialogContentText,
  Accordion,
  AccordionSummary,
  AccordionDetails, 
  Skeleton} from "@material-ui/core"
import { 
  FavoriteBorder, 
  Favorite, 
  Cancel, 
  NavigateNext, 
  Add, 
  Remove,
  Create,
  FiberManualRecord,
  ExpandMore, 
  Block} from "@material-ui/icons"
import { moneyFormat } from "src/components/utils"
import Link from 'next/link'
import { CustomDialog, CustomRating, QuantityCounter } from "src/styles/components"
import { product, ecommerce } from "store/actions"
import { useRouter } from 'next/router'
import { authStore, ecommerceStore } from 'service'
import { useAuth } from "src/components/auth-provider/auth-provider"
import { NextSeo } from 'next-seo'
import serviceController, { routes } from 'controller'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'next-share'
import EllipsisText from "react-ellipsis-text"

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .favorite {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 9;
    svg {
      color: ${colors.paraText};
    }
  }
`

const DetailInfo = styled.div`
  .stock {
    font-size: 14px; 
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 8px;
    font-family: 'fontStyle-bold';
    border-radius: 2px;
    margin-bottom: 12px;
    @media (max-width: 991px) {
      font-size: 12px;
    }
    svg {
      width: 6px;
      height: 6px;
      margin-right: 6px;
    }
    &.in-stock {
      color: ${colors.secondaryGreen};
      background: #D1FAE5;
    }
    &.out-stock {
      color: #F29423;
      background: #FEF3C7;
    }
    .title-stock {
      line-height: normal;
    }
  }
  .title {
    font-size: 24px;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
  .sold-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 24px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    .rating-wrap {
      margin-bottom: 16px;
      .review-count {
        font-size: 14px;
        color: ${colors.titleText};
      }
      &::after {
        content: '|';
        margin-right: 12px;
        margin-left: 12px;
      }
    }
    .sold-out {
      span {
        font-family: 'fontStyle-bold';
      }
    }
  }
  .price-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    .price {
      font-size: 24px;
      font-family: 'fontStyle-bold';
      color: ${colors.primary};
      margin-right: 12px;
      margin-bottom: 0;
      @media (max-width: 991px) {
        font-size: 20px;
      }
      small {
        color: ${colors.paraText};
        font-size: 14px;
        margin-left: 12px;
      }
      .unit {
        margin-left: 5px;
      }
    }
    .discount {
      font-size: 16px;
      color: ${colors.secondaryGreen};
      margin-bottom: 0;
    }
  }
  .option {
    .option-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 36px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      .option-name {
        margin-right: 20px;
        font-family: 'fontStyle-bold';
        text-transform: capitalize;
        @media (max-width: 991px) {
          font-size: 14px;
        }
      }
      .opt-btn {
        margin-right: 12px;
        transition: all .15s linear;
      }
      .img-opt-btn {
        border-radius: 50%;
        border: 1px solid transparent;
        padding: 3px;
        width: 28px;
        height: 28px;
        img.color-item, span.color-item {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #D7D7DC;
        }
        &.active {
          border: 1px solid ${colors.primary};
        }
      }
      .text-opt-btn {
        border: 1px solid #8C8C96;        
        padding: 8px 12px;
        line-height: 20px;
        font-family: 'fontStyle-light';
        font-size: 14px;
        color: ${colors.titleText};
        border-radius: 4px;
        @media (max-width: 991px) {
          font-size: 12px;
          min-width: 54px;
          padding: 6px 10px;
        }
        &.active {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
        }
      }
    }
  }
  .info-wrap {
    margin-bottom: 24px;
    .MuiAccordion-root {
      box-shadow: none;
      &:hover {
        .MuiAccordionSummary-root {
          .MuiAccordionSummary-content {
            .title {
              color: ${colors.primary};
              transition: all .2s;
            }
          }  
        }  
      }
      .MuiAccordionSummary-root {
        width: 100%;
        text-transform: none;
        color: ${colors.titleText};
        letter-spacing: unset;
        padding: 0;
        border-bottom: 1px solid #D7D7D7;
        border-radius: 0;
        .MuiAccordionSummary-content {
          margin: 16px 0;
          .title {
            margin-bottom: 0;
            font-size: 16px;
            font-family: 'fontStyle-bold';
          }
        }
      }
      .MuiAccordionDetails-root {
        padding: 16px;
        .brand-wrap {
          margin-bottom: 16px;
          position: relative;
          width: 100%;
          &:after {
            content: '';
            border-bottom: 1px solid #D7D7DC;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }
          .brand {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
        .detail-info {
          .title {
            font-size: 14px;
            color: ${colors.titleText};
            font-family: 'fontStyle-bold';
            margin-bottom: 16px;
          }
          p {
            margin-bottom: 8px;
          }
          .more-info {
            color: ${colors.primary};
            font-size: 16px;
            font-family: 'fontStyle-bold';
            position: relative;
            &:after {
              content: '';
              border-bottom: 1px solid ${colors.primary};
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
            }
          }
        }
      }
    }
    .info-btn {
      width: 100%;
      justify-content: space-between;
      font-size: 16px;
      font-family: 'fontStyle-bold';
      text-transform: none;
      color: ${colors.titleText};
      letter-spacing: unset;
      padding: 18px 0;
      border-bottom: 1px solid #D7D7D7;
      border-radius: 0;
      @media (max-width: 991px) {
        font-size: 14px;
        padding: 14px 0;
      }
      &:hover {
        background: none;
        color: ${colors.primary};
      }
    }
  }
  .social-wrap {
    button {
      margin-right: 15px;
      :last-child {
        margin-right: 0;
      }
    }
    /* img {    
      width: 20px;
      height: 20px;
    } */
  }
`

const ReviewTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .title {
      font-family: 'fontStyle-bold';
      font-size: 24px;
      margin-right: 16px;
      margin-bottom: 0;
      @media (max-width: 991px) {
        font-size: 18px;
      }
    }
    .over-review {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media (max-width: 991px) {
        display: none;
      }
      .review-number {
        font-size: 24px;
        font-family: 'fontStyle-bold';
        margin-right: 10px;
        @media (max-width: 991px) {
          font-size: 18px;
        }
      }
      .review-count {
        font-size: 14px;
        color: ${colors.titleText};
      }
    }
  }
  .write-btn {
    min-width: auto;
    padding: 0;
    color: ${colors.titleText};
    text-transform: unset;
    letter-spacing: unset;
    font-size: 16px;
    font-family: 'fontStyle-light';
    text-decoration: underline;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    svg {
      color: ${colors.titleText};
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }
  }
`

const ProductDetail = ({productDetailData, urlKey}) => {
  let getRoute = `${process.env.NEXT_PUBLIC_DOMAIN}product/detail/${urlKey}`
  const { setRedirect } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { cate_breadcrum_data } = useSelector(state => state.category)
  const { related_data, product_detail_data, isDetailLoading, isRelatedLoading, error } = useSelector(state => state.product)  
  const { createcart_data, quote_data, cart_data } = useSelector(state => state.ecommerce)

  const SEO = {
    title: productDetailData?.name || "Product Detail",
    description: productDetailData?.product_description,
    openGraph: {
      title: productDetailData?.name || "Product Detail",
      description: productDetailData?.product_description,
      images: [
        {
          url: productDetailData?.product_images[0],
          alt: productDetailData?.name || "Product Detail"
        }
      ],
    },
    twitter: {
      handle: productDetailData?.name || "Product Detail",
      site: productDetailData?.name || "Product Detail",
    },
  }
  
  // get product detail
  useEffect(() => {
    async function fetchData() {
      let lang = {
        code: langStore?.code
      }
      const postData = {
        urlKey
      }
      let res = await dispatch(product.getProductDetail(postData?.urlKey, lang))
      if (res?.sku !== null) {
        dispatch(product.getRelatedProduct(res?.sku, lang))
      }
    }
    fetchData();
  }, [urlKey, dispatch, langStore?.code])

  // review rating default value 
  const [ratingValue, setRatingValue] = useState(3);

  // handle write review 
  const [openWriteReview, setOpenWriteReview] = React.useState(false)

  const handleWriteReview = () => {
    setOpenWriteReview(true)
  }

  const handleCloseWriteReview = () => {
    setOpenWriteReview(false);
  }
  // end write review 

  const detail_info = [
    {
      name: "Product Details"
    },
    {
      name: "Return & Exchange Policy"
    }
  ]

  const review_info = [
    {
      id: 1,
      image: '../../review1.png',
      name: 'John Doe',
      date: '24 June 2021',
      rating: 3,
      text: "This is insane. I'm not kidding when I say it feels like its from the future. I've been a phone geek forever and it takes something special to truly blow me away and this...."
    },
    {
      id: 2,
      image: '../../review2.png',
      name: 'Tommy',
      date: '24 June 2021',
      rating: 4,
      text: "What's not to love about it? loving the bendable glass! it is akinnier than my galaxy s10. i wish this was waterproof though bc i love tqking pics & videos while we swim...."
    },
    {
      id: 3,
      image: '../../review3.png',
      name: 'Steven',
      date: '24 June 2021',
      rating: 5,
      text: "Amazing tech, the folding screen! But handling the phone is just too difficult for me. I have L to XL (glove) sized hands, but the finger reach across the screen is too...."
    }
  ]

  // **handle product option change
  const [qty, setQty] = useState(1);
  const [optionVal, setoptionVal] = useState([])

  // get default option value 
  useEffect(() => {
    let getOption = product_detail_data !== null && product_detail_data?.type_id === "configurable" && product_detail_data?.configurable_data?.product_list?.map(x => x?.option?.map(i => i))
    // get default option value
    getOption && setoptionVal(getOption[0])
  }, [product_detail_data])
  
  // filter product data that same option array 
  const [configData, setConfigData] = useState([])
  useEffect(() => {
    let config_product_detail = product_detail_data !== null && product_detail_data?.type_id === "configurable" && product_detail_data?.configurable_data?.product_list?.filter(x => JSON.stringify(x?.option) === JSON.stringify(optionVal))
    setConfigData(config_product_detail)
  }, [optionVal, product_detail_data])
  
  const handleOption = (name, value) => {
    setQty(1)
    let tmp = [{
      option_name: name,
      option_value: value
    }]
    let updatedOptVal = optionVal?.map(x => (x?.option_name === tmp[0]?.option_name ? {...x, option_value: tmp[0]?.option_value} : x))    
    setoptionVal(updatedOptVal)
  }
  
  // if url or not 
  let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  // ** end handle product option change

  // in stock out stock condition 
  const [isInStock, setIsInStock] = useState(false)
  useEffect(() => {
    if (product_detail_data?.type_id !== "configurable") {
      product_detail_data?.is_in_stock ? setIsInStock(true) : setIsInStock(false)
    } else {
      configData[0]?.available_qty > 0 ? setIsInStock(true) : setIsInStock(false)
    }
  }, [product_detail_data, configData])
  // handle add to cart 
  const [openAddToCart, setopenAddToCart] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [disabled, setDisabled] = useState(false)
  // const handleCloseAddToCart = () => {
  //   setopenAddToCart(false)
  // }

  // qty change 
  const handleQty = (key) => () => {
    if (key === "add") {
      let num = qty;
      num += 1;
      setQty(num);
    } else {
      if (qty > 1) {
        let num = qty;
        num -= 1;
        setQty(num);
      }
    }
  }
  const handleChange = (e) => {
    var value = e.target.value.replace(/[^0-9]/, "");
    value = value === "" ? 1 : value;
    value = +value;
    setQty(value);
  };

  useEffect(() => {
    let maxQty = product_detail_data?.type_id !== "configurable" ? product_detail_data?.available_qty : configData[0]?.available_qty
    // if change qty in product that already had in the cart item then sum qty with cart qty
    let getCartQty = cart_data !== null && cart_data?.data?.filter(x => x?.sku === (product_detail_data?.type_id !== "configurable" ? product_detail_data?.sku : configData[0]?.sku))
    let cartQty = getCartQty && getCartQty?.length > 0 && getCartQty[0]?.qty
    let totalQty = cartQty ? qty + cartQty : qty
    if (totalQty > maxQty) {
      setIsInStock(false)
      setDisabled(true)
    } else {
      setIsInStock(true)
      setDisabled(false)
    }
    // disabled if config data not included product list 
    if (product_detail_data?.type_id === "configurable") {
      if (configData?.length === 0) {
        setIsInStock(false)
        setDisabled(true)
      }
    }
  }, [product_detail_data, qty, cart_data, configData])
  //end qty change

  // console.log(`ecommerceStore`, ecommerceStore?.getQuote())

  // add to cart 
  const handleAddToCart = async () => {
    if (!authStore.getAuth()) {
      setRedirect(router.asPath);
      router.push('/login')
    } else {
      setDisabled(true)
      setIsSubmitting(true)
      // get option value for configurable product 
      let postOptVal = optionVal?.map(x => delete x?.option_name && x)
      // end get option value for configurable product 

      let postData = {
        customerId: authStore.getAuth() && authStore.getAuth()?.customer?.customerId,
        from: 'api'
      }
      if (!authStore.getAuth()) {
        delete postData?.customerId
      }
      if (!authStore.getAuth()) {
        if (!ecommerceStore.getQuote()) {
          // if there're no old quote id, generate quote id for guest user
          let resGuestQuote = await dispatch(ecommerce.generateQuoteGuest(postData))
          if (resGuestQuote?.success === true) {
            let cartData = {
              cartItem: {
                sku: product_detail_data?.sku,
                qty: qty,
                quoteId: resGuestQuote?.quoteId,
                product_option: {
                  extension_attributes: {
                    configurable_item_options: postOptVal
                  }
                }
              }
            }
            if (product_detail_data?.type_id !== "configurable") {
              delete cartData.cartItem.product_option
            }
            let cartId = resGuestQuote?.cartId
            let addToCartRes = await dispatch(ecommerce.addToCartGuest(cartId, cartData))
            if (addToCartRes?.status === true) {
              dispatch(ecommerce.getCartGuest(resGuestQuote?.quoteId))
              dispatch(ecommerce.setCartAnimate('ANIMATED', true))
              setDisabled(false)
              setIsSubmitting(false)
              setopenAddToCart(true)
              setTimeout(function () {
                dispatch(ecommerce.setCartAnimate('ANIMATED', false))
                setopenAddToCart(false)
              }, 3000)
            } else {
              console.log(`addToCartRes`, addToCartRes)
            }
          }
        } else {
          // if quote id exist, there're no need to generate quote id for guest user
          let cartData = {
            cartItem: {
              sku: product_detail_data?.sku,
              qty: qty,
              quoteId: ecommerceStore.getQuote()?.quoteId,
              product_option: {
                extension_attributes: {
                  configurable_item_options: postOptVal
                }
              }
            }
          }
          if (product_detail_data?.type_id !== "configurable") {
            delete cartData.cartItem.product_option
          }
          let cartId = ecommerceStore.getQuote()?.cartId
          let addToCartRes = await dispatch(ecommerce.addToCartGuest(cartId, cartData))
          if (addToCartRes?.status === true) {
            dispatch(ecommerce.getCartGuest(ecommerceStore.getQuote()?.quoteId))
            dispatch(ecommerce.setCartAnimate('ANIMATED', true))
            setDisabled(false)
            setIsSubmitting(false)
            setopenAddToCart(true)
            setTimeout(function () {
              dispatch(ecommerce.setCartAnimate('ANIMATED', false))
              setopenAddToCart(false)
            }, 3000)
          } else {
            console.log(`addToCartRes`, addToCartRes)
          }
        }
      } else {
        if (!ecommerceStore.getQuote()) {
          // if there're no quote id, generate quote id for login user 
          let resUserQuote = await dispatch(ecommerce.generateQuoteUser(postData))
          if (resUserQuote?.success === true) {
            let cartData = {
              cartItem: {
                sku: product_detail_data?.sku,
                qty: qty,
                quoteId: resUserQuote?.quoteId,
                product_option: {
                  extension_attributes: {
                    configurable_item_options: postOptVal
                  }
                }
              }
            }
            if (product_detail_data?.type_id !== "configurable") {
              delete cartData.cartItem.product_option
            }
            let addToCartRes = await dispatch(ecommerce.addToCartUser(cartData))
            if (addToCartRes?.status === true) {
              dispatch(ecommerce.getCartUser())
              dispatch(ecommerce.setCartAnimate('ANIMATED', true))
              setDisabled(false)
              setIsSubmitting(false)
              setopenAddToCart(true)
              setTimeout(function () {
                setopenAddToCart(false)
                dispatch(ecommerce.setCartAnimate('ANIMATED', false))
              }, 3000)
            } else {
              console.log(`addToCartRes`, addToCartRes)
            }
          }
        } else {
          // if quote id exist, use the old quote id for login user 
          let cartData = {
            cartItem: {
              sku: product_detail_data?.sku,
              qty: qty,
              quoteId: ecommerceStore.getQuote()?.quoteId,
              product_option: {
                extension_attributes: {
                  configurable_item_options: postOptVal
                }
              }
            }
          }
          if (product_detail_data?.type_id !== "configurable") {
            delete cartData.cartItem.product_option
          }
          let addToCartRes = await dispatch(ecommerce.addToCartUser(cartData))
          if (addToCartRes?.status === true) {
            dispatch(ecommerce.getCartUser())
            dispatch(ecommerce.setCartAnimate('ANIMATED', true))
            setDisabled(false)
            setIsSubmitting(false)
            setopenAddToCart(true)
            setTimeout(function () {
              setopenAddToCart(false)
              dispatch(ecommerce.setCartAnimate('ANIMATED', false))
            }, 3000)
          } else {
            console.log(`addToCartRes`, addToCartRes)
          }
        }
      }
    }
  }
  // end add to cart

  return ( 
    <>
      {/* <div id="fb-root"></div>
      <Script 
        async 
        defer 
        crossorigin="anonymous" 
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=393169458604574&autoLogAppEvents=1" 
        nonce="mWuQdkgE"
        strategy="lazyOnload" 
      /> */}

      <NextSeo {...SEO} />
      {
        !error ?
        <>
          {
            <Components.Breadcrumb props={
              [
                {
                  title: 'Home',
                  link: '/'
                },
                {
                  title: 'Product',
                },
                {
                  title: <EllipsisText text={productDetailData?.name} length={50} /> || 'Product Detail'
                }
              ]
            } 
            />
          }
          <Section>
            <Container>
              <Row>
                <Col lg="5">
                  <SliderWrap>
                    {
                      isDetailLoading ?
                      <Skeleton height={480} variant="rectangular" />
                      :
                      <Components.DetailSlider 
                        data = {
                          product_detail_data?.type_id !== "configurable" ?
                          product_detail_data?.product_images :
                          configData?.length > 0 && configData[0]?.product_images
                        } 
                      />
                    }
                    {/* <Checkbox className="favorite" icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checked" /> */}
                  </SliderWrap>
                </Col>
                <Col lg="7">
                  <DetailInfo>
                    <>
                      {
                        isDetailLoading ?
                        <Skeleton variant="text" width={"80px"} height={"25px"} />
                        :
                        <>
                          {
                            isInStock ?
                            <div className="stock in-stock">
                              <FiberManualRecord />
                              <span className="title-stock">In Stock</span>
                            </div>
                            :
                            <div className="stock out-stock">
                              <FiberManualRecord />
                              <span className="title-stock">Out of Stock</span>
                            </div>
                          }
                        </>
                      }
                    </>
                    {
                      isDetailLoading ?
                      <Skeleton variant="text" /> :
                      <h1 className="title">
                        {
                          product_detail_data?.type_id !== "configurable" ?
                          product_detail_data?.name :
                          // disabled if config data not included product 
                          configData?.length > 0 ?
                          configData[0]?.name :
                          product_detail_data?.name
                        }
                      </h1>
                    }
                    {
                      product_detail_data?.type_id === "configurable" && configData?.length === 0 ?
                      <>
                      </>
                      :
                      <div className="sold-wrap">
                        {/* <div className="rating-wrap" style={{display: 'flex', alignItems: 'center'}}>
                          {
                            isDetailLoading ?
                            <Skeleton variant="text" width={"150px"} />
                            :
                            <>
                              <CustomRating name="half-rating-read" value={+product_detail_data?.total_rating_count} precision={0.5} readOnly size="small" className="rating" />
                              { 
                                product_detail[0]?.review_count > 0 && 
                                <span className="review-count">({product_detail[0]?.review_count} reviews)</span> 
                              }
                            </>
                          }
                        </div> */}
                        {/* <div className="sold-out">
                          {
                            isDetailLoading ?
                            <Skeleton variant="text" width={"90px"} /> :
                            <>
                              <span>{product_detail_data?.sold_qty}</span> Items Sold
                            </>
                          }
                        </div> */}
                        <div className="sold-out">
                          {
                            isDetailLoading ?
                            <Skeleton variant="text" width={"90px"} /> :
                            <>
                              <span>{product_detail_data?.available_qty}</span> Items Available
                            </>
                          }
                        </div>
                      </div>
                    }
                    <div className="price-wrap">
                      {
                        isDetailLoading ?
                        <Skeleton variant="text" width={"120px"} height={"35px"} />
                        :
                        product_detail_data?.type_id !== "configurable" ?
                        <>
                          {
                            product_detail_data?.discount > 0 ?
                            <>
                              <p className="price">
                                {
                                  isNaN(product_detail_data?.special_price) ?
                                  product_detail_data?.special_price
                                  :
                                  moneyFormat(product_detail_data?.special_price)
                                }
                                <span className="unit">{product_detail_data?.currency}</span>
                                <small>
                                  <del>
                                    {
                                      isNaN(product_detail_data?.price) ?
                                      product_detail_data?.price
                                      :
                                      moneyFormat(product_detail_data?.price)
                                    }
                                    <span className="unit">{product_detail_data?.currency}</span>
                                  </del>
                                </small>
                              </p>
                              <p className="discount">{product_detail_data?.discount}% Off</p>
                            </>
                            :
                            <p className="price">
                              {
                                isNaN(product_detail_data?.price) ?
                                product_detail_data?.price
                                :
                                moneyFormat(product_detail_data?.price)
                              }
                              <span className="unit">{product_detail_data?.currency}</span>
                            </p>
                          }
                        </>
                        :
                        <>
                          {
                            configData?.length > 0 ?
                            configData[0]?.discount > 0 ?
                            <>
                              <p className="price">
                                {
                                  isNaN(configData[0]?.special_price) ?
                                  configData[0]?.special_price
                                  :
                                  moneyFormat(configData[0]?.special_price)
                                }
                                <span className="unit">{product_detail_data?.currency}</span>
                                <small>
                                  <del>
                                    {
                                      isNaN(configData[0]?.price) ?
                                      configData[0]?.price
                                      :
                                      moneyFormat(configData[0]?.price)
                                    }
                                    <span className="unit">{product_detail_data?.currency}</span>
                                  </del>
                                </small>
                              </p>
                              <p className="discount">{configData[0]?.discount}% Off</p>
                            </>
                            :
                            <p className="price">
                              {
                                isNaN(configData[0]?.price) ?
                                configData[0]?.price
                                :
                                moneyFormat(configData[0]?.price)
                              }
                              <span className="unit">{product_detail_data?.currency}</span>
                            </p>
                            :
                            <p className="price">
                              {
                                isNaN(product_detail_data?.price) ?
                                product_detail_data?.price
                                :
                                moneyFormat(product_detail_data?.price)
                              }
                              <span className="unit">{product_detail_data?.currency}</span>
                            </p>
                          }
                        </>
                      }
                    </div>
                    {
                      product_detail_data?.type_id === "configurable" &&
                      <div className="option">
                        {
                          product_detail_data?.configurable_data?.options?.map((option, key) => 
                            <div className="option-wrap" key={key}>
                              <div className="option-name">{option?.option_name}: </div>
                              {
                                option?.option_list?.map((list, i) =>
                                  option?.option_name === "color" ?
                                  <IconButton 
                                    className={`opt-btn img-opt-btn ${(optionVal?.some(v => v?.option_value === list?.option_id) ? `active` : ``)}`} 
                                    key={i} 
                                    onClick={() => handleOption(option?.option_name, list?.option_id)}
                                  >
                                    {
                                      pattern.test(list?.option_value) ?
                                      <Components.ImgWithFallback 
                                        src={`${(list?.option_value)}`} 
                                        width={20} 
                                        height={20} 
                                        alt={list?.option_label}
                                        className="color-item"
                                      />
                                      // <img className="color-item" src={list?.option_value} alt={list?.option_label} /> 
                                      :
                                      <span className="color-item" style={{background: list?.option_value}}></span>
                                    }
                                  </IconButton>
                                  :
                                  <Button 
                                    className={`opt-btn text-opt-btn ${(optionVal?.some(v => v?.option_value === list?.option_id) ? `active` : ``)}`} 
                                    key={i} 
                                    onClick={() => handleOption(option?.option_name, list?.option_id)}
                                    variant="outlined"
                                  >
                                    {list?.option_value}
                                  </Button>
                                )
                                
                              }
                            </div>
                          )
                        }
                      </div>
                    }
                    <QuantityCounter>
                      <h6 className="qty-title">Quantity:</h6>
                      <div className="btn-qty">
                        <Button onClick={handleQty("sub")}><Remove /></Button>
                        <TextField
                          id="standard-number"
                          type="number"
                          variant="standard"
                          className="qty-text"
                          onKeyDown={e => 
                            e.key !== "Delete" && 
                            e.key !== "ArrowLeft" && 
                            e.key !== "ArrowRight" && 
                            e.key !== "Backspace" && 
                            e.key.match(/[^0-9]/) && 
                            e.preventDefault()
                          }
                          value={qty}
                          onChange={handleChange}
                        />
                        <Button onClick={handleQty("add")}><Add /></Button>
                      </div>
                    </QuantityCounter>
                    <div style={{marginBottom: '28px'}}>
                      <Components.CustomButton data={
                          isSubmitting ?
                          {
                            size: 'md',
                            disabled: disabled,
                            text: 'Add to cart',
                            loading: true,
                            color: 'gray'
                          }
                          :
                          !isInStock ?
                          {
                            size: 'md', 
                            color: 'primary', 
                            text: 'Add to cart',
                            disabled: true
                          }
                          :
                          {
                            size: 'md', 
                            color: 'primary', 
                            text: 'Add to cart',
                            disabled: disabled
                          }
                        } 
                        onClick={() => handleAddToCart()}
                      />
                      <CustomDialog
                        open={openAddToCart}
                        // onClose={handleCloseAddToCart}
                        // scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                        className="add-to-cart-dialog"
                      >
                        {/* <IconButton className="close-icon" aria-label="cancel" onClick={handleCloseAddToCart}>
                          <Cancel />
                        </IconButton> */}
                        <DialogTitle className="dialog-title" component="div">
                          <img src="../../success.png" alt="success" className="success-icon" />
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText
                            tabIndex={-1}
                            as="div"
                          >
                            <div className="add-to-cart">
                              <p className="title">Item has been added to your shopping cart</p>                            
                              {/* <div className="submit-wrap" style={{marginTop: '16px', display: 'flex', justifyContent: 'center'}}>
                                <Components.CustomButton data={{
                                    size: 'sm', 
                                    color: 'primary', 
                                    text: 'Go To Cart',
                                    link: '/cart/1'
                                  }} 
                                />
                              </div> */}
                            </div>
                          </DialogContentText>
                        </DialogContent>
                      </CustomDialog>
                    </div>
                    <div className="info-wrap">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="detail-content"
                          id="detail-header"
                        >
                          <p className="title">Product Details</p>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="brand-wrap">
                            {/* <div className="brand">
                              <p>Brand:</p>
                              <p>Samsung</p>
                            </div> */}
                            <div className="brand">
                              <p>Product name:</p>
                              <p>{product_detail_data?.name}</p>
                            </div>
                          </div>
                          <div className="detail-info">
                            <h5 className="title">Description</h5>
                            <div dangerouslySetInnerHTML={{__html: product_detail_data?.product_description}}></div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="policy-content"
                          id="policy-header"
                        >
                          <p className="title">Return & Exchange Policy</p>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="detail-info">
                            <p>We, our MZ online market reserve the right to not accept returns or refunds of the products after order has been confirmed by you.</p>

                            <p>But we will accept the return or exchange within 3 days or 7 days of delivery for some products.</p>

                            <p>We will not accept any return or exchange post the period of 3 days or 7 days from the day of delivery.</p>
                            <Link href="/privacy-policy" passHref>
                              <a className="more-info">
                                More about return policy
                              </a>
                            </Link>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    
                    <div className="social-wrap">
                      <FacebookShareButton
                        url={getRoute}
                      >
                        <FacebookIcon size={22} round />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={getRoute}
                      >
                        <TwitterIcon size={22} round />
                      </TwitterShareButton>
                      <ViberShareButton
                        url={getRoute}
                      >
                        <ViberIcon size={22} round />
                      </ViberShareButton>
                      <TelegramShareButton
                        url={getRoute}
                      >
                        <TelegramIcon size={22} round />
                      </TelegramShareButton>
                      {/* <IconButton>                    
                        <img src="/facebook.png" alt="facebook" />                    
                      </IconButton>
                      <IconButton className="twitter">
                        <img src="/twitter.png" alt="twitter" />
                      </IconButton>
                      <IconButton className="linkedin">
                        <img src="/linkedin.png" alt="linkedin" />
                      </IconButton> */}
                    </div>
                  </DetailInfo>
                </Col>
              </Row>
            </Container>
          </Section>
          {/* <Section style={{background: '#F5F5F6', paddingTop: '40px', paddingBottom: '40px', marginBottom: 0}}>
            <div style={{marginBottom: '30px'}}>
              <Container>
                <Row>
                  <Col md="12">
                    <ReviewTitle>
                      <div className="title-wrap">
                        <h2 className="title">Customer Reviews</h2>
                        <div className="over-review">
                          <span className="review-number">4.5</span>
                          <CustomRating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly size="small" className="rating" />
                          <span className="review-count">(6 reviews)</span> 
                        </div>
                      </div>
                      <Button
                        className="write-btn"
                        startIcon={<Create />}
                        onClick={handleWriteReview}
                      >
                        Write A Review
                      </Button>
                      <CustomDialog
                        open={openWriteReview}
                        onClose={handleCloseWriteReview}
                        // scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <IconButton className="close-icon" aria-label="cancel" onClick={handleCloseWriteReview}>
                          <Cancel />
                        </IconButton>
                        <DialogTitle className="dialog-title">
                          Write A Review
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText
                            tabIndex={-1}
                            as="div"
                          >
                            <div className="write-review">
                              <div className="to-rate">
                                <h6 className="title">Tap a star to rate</h6>
                                <CustomRating name="half-rating-read" precision={0.5} className="rating" />
                              </div>
                              <div className="to-review">
                                <h6 className="title">Your reviews</h6>
                                <TextField
                                  id="filled-multiline-static"
                                  multiline
                                  rows={4}
                                  placeholder="Your opinion with this product"
                                  variant="filled"
                                />
                                <div className="submit-wrap" style={{marginTop: '16px', display: 'flex', justifyContent: 'flex-end'}}>
                                  <Components.CustomButton data={{
                                      size: 'sm', 
                                      color: 'primary', 
                                      text: 'Submit'
                                    }} 
                                  />
                                </div>
                              </div>
                            </div>
                          </DialogContentText>
                        </DialogContent>
                      </CustomDialog>
                    </ReviewTitle>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <Row>
                {
                  review_info.map((x, i) =>
                    <Components.ReviewCard data={x} key={i} /> 
                  )
                }
              </Row>
            </Container>
            <Container>
              <Row>
                <Col md="12">
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Components.LinkButton link="/" text="View More" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Section> */}
          {
            related_data !== null &&
            related_data?.data?.length > 0 &&
            <Section>
              <div style={{marginBottom: '30px'}}>
                <Container>
                  <Row>
                    <Col md="12">
                      <Components.Title props={{title: "You May Also Like"}} />
                    </Col>
                  </Row>
                </Container>
              </div>
              <Components.ProductCardSlider data={related_data} loading={isRelatedLoading} />
            </Section>
          }
        </>
        :
        isDetailLoading ?
        <Container>
          <Row>
            <Col lg="5"> 
              <Skeleton height={480} variant="rectangular" />
            </Col>
            <Col lg="7">
              <Skeleton />
              <Skeleton />
              <Skeleton width={'50%'} />
            </Col>
          </Row>
        </Container>
        :
        <Components.ResultNotFound>
          <div className="desc">
            <h1 className="title">404</h1>
            <p>Not found</p>
            <p><small>The product you're looking for doesn't exist!</small></p>
            <Components.CustomButton data={{text: 'Back To Home Page', link: '/', color: 'primary', size: 'sm'}} />
          </div>
        </Components.ResultNotFound>
      }
    </>
  );
}
 
export default ProductDetail;

export async function getServerSideProps(context) {
  const { query } = context
  const urlKey = query.id
  // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_EN}V2/products/filters?category_id=${category_id}`)
  const response = await serviceController(`${routes.getProductDetail}/${urlKey}`)
  // const data = await response.json()
  return {
    props: {
      productDetailData: response?.data,
      urlKey
    }
  }
}