import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Section } from "src/styles/components";
import { 
  Container, 
  Row, 
  Col  
} from "reactstrap"
import Components from "src/components"
import { 
  Button, 
  IconButton, 
  Accordion,
  AccordionSummary,
  AccordionDetails, 
  Skeleton,
  fabClasses,
  CircularProgress} from "@material-ui/core";
import { moneyFormat } from "src/components/utils"
import { boxShadow, colors } from "src/styles/constants";
import styled from "styled-components";
import { Close, ExpandMore } from '@material-ui/icons'
import { SideBarContainer } from "src/components/sidebar/style/sidebar-style";
import { Formik, Form } from 'formik'
import BtnLoading from "src/components/button/btn-loading";
import * as Yup from 'yup'
import { ecommerce, account } from "store/actions"
import { authStore, ecommerceStore } from 'service'
import { useRouter } from 'next/router';
import Link from 'next/link'

const shipping_method = {
  "payment_methods": [
      {
          "code": "cashondelivery",
          "title": "Cash On Delivery"
      }
  ]
}

const OrderInfo = styled(SideBarContainer)`
  box-shadow: ${boxShadow.mediumShadow};
  padding: 24px;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
  .order-subtotal {
    margin-bottom: 16px;
    .subtotal-item {
      margin-bottom: 8px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .price {
        font-family: "fontStyle-bold";
      }
      .title {
        max-width: 200px;
      }
      .total-title {
        font-family: "fontStyle-bold";
      }
      .total-price {
        color: ${colors.primary};
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .place-order {
    .out-of-stock-msg {
      padding-top: 5px;
      a {
        color: ${colors.primary};
        text-decoration: underline;
      }
    }
  }
  .coupon-code {
    margin-bottom: 16px;
    .active-coupon {
      background: rgba(232, 29, 37, .2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      border-radius: 100px;
      margin-bottom: 15px;
      /* display: none; */
      span {
        font-size: 14px;
        font-family: 'fontStyle-bold';
      }
      button {
        padding: 0;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    .coupon-wrap {
      position: relative;
      width: 100%;
      .coupon-field {
        width: 100%;
        label {
          display: none;
        }
        >div {
          margin-bottom: 0;
        }
        input {
          padding-right: 75px;
        }
      }
      .coupon-btn {
        background: ${colors.titleText};
        color: #FFF;
        border-radius: 0;
        font-family: 'fontStyle-bold';
        height: 43px;
        position: absolute;
        top: 0;
        right: 0;
        min-width: 65px;
      }
    }
    .error {
      color: ${colors.primary};
      font-size: 14px;
      font-family: 'fontStyle-bold';
    }
  }
`

const styleSetting = {
  marginBottom: "15px",
  transition: "all .2s",
}

export default function CheckOut () {
  const dispatch = useDispatch()
  const router = useRouter();
  const { checked_address, shipping_method_data, isLoading, cart_data, isCartLoading } = useSelector(state => state.ecommerce)
  const { account_data } = useSelector(state => state.account)

  // disabled button if one of item in cart is out of stock 
  const [isInStock, setIsInStock] = useState(false)
  useEffect(() => {
    let isInStock = cart_data !== null && cart_data?.data?.map(x => x?.is_in_stock)
    isInStock && isInStock.includes(false) ? setIsInStock(false) : setIsInStock(true)
  }, [cart_data])

  // payment value 
  const [value, setValue] = useState(null);
  const handleChange = (data) => {
    setValue(data);
  };

  // hide check option if in address page and show in checkout page 
  const [checkOption, setCheckOption] = useState(false)
  useEffect(() => {
    if (!router.isReady || account_data === null) {
      return
    };
    router.pathname === '/address' ? setCheckOption(false) : setCheckOption(true)
  }, [router, account_data])
  
  // get account data 
  useEffect(() => {
    const authData = authStore.getAuth();
    authData && dispatch(account.getAccount())
  }, [dispatch])

  useEffect(() => {
    // select default payment method in array 0 
    let defaultPay = shipping_method?.payment_methods[0]?.code
    value === null && setValue(defaultPay)
  }, [value])
  
  // get address data for place order 
  const [address, setAddress] = useState([])
  useEffect(() => {
    let id = checked_address === null ? +account_data?.default_shipping : +checked_address
    let getAddress = account_data !== null && account_data?.addresses?.filter(x => x?.id === id)
    getAddress && setAddress(getAddress)
  }, [checked_address, account_data])

  // est shipping method and set shipping method 
  const handleEstShipping = async () => {
    if (address?.length > 0) {
      let estData = {
        address: {
          customer_id: +authStore.getAuth()?.customer?.customerId,
          region_id: address[0]?.region_id,
          country_id: "MM",
          street: address[0]?.street,
          telephone: address[0]?.telephone,
          city: address[0]?.city,
          firstname: address[0]?.firstname,
          lastname: address[0]?.lastname,
          same_as_billing: 1
        }
      }
      let res = await dispatch(ecommerce.estShippingMethod(estData))
      if (res[0].available === true) {
        let shippingData = {
          addressInformation: {
            shipping_address: {
              region_id: address[0]?.region_id,
              country_id: "MM",
              street: address[0]?.street,
              telephone: address[0]?.telephone,
              city: address[0]?.city,
              firstname: address[0]?.firstname,
              lastname: address[0]?.lastname,
            },
            shipping_carrier_code: res[0]?.carrier_code,
            shipping_method_code: res[0]?.method_code
          }
        }
        dispatch(ecommerce.setShippingMethod(shippingData))
      }
    }
  }

  // handle coupon submit 
  let initialValues = {
    code: '', 
  }
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const onSubmitCoupon = (values, actions) => {
    let couponCode = values.code
    let quoteId = cart_data?.data[0]?.quote_id
    actions.setSubmitting(true)
    setDisabled(true)
    setTimeout(async () => {
      let res = await dispatch(account.applyCoupon(quoteId, couponCode))
      if (res?.success === true) {
        handleEstShipping()
        setError(false)
        actions.resetForm(initialValues)
      } else {
        setError(true)
      }
      actions.setSubmitting(false)
      setDisabled(false)
    }, 1000)
  }

  // cancel coupon 
  const [isCanceling, setIsCanceling] = useState(false)
  const handleCancelCoupon = async () => {
    setIsCanceling(true)
    let quoteId = cart_data?.data[0]?.quote_id
    let res = await dispatch(account.cancelCoupon(quoteId))
    if (res?.success === true) {
      handleEstShipping()
      setIsCanceling(false)
    }
  }

  // est shipping method
  useEffect(() => {
    async function fetchData() {
      handleEstShipping()
    }
    cart_data?.data?.length > 0 && fetchData()
  }, [dispatch, address, cart_data, router])

  //handle place order
  const [ordering, setOrdering] = useState(false)
  const onPlaceOrder = () => {
    setOrdering(true)
    let orderData = { 
      paymentMethod: {     
        method: "cashondelivery"     
      },     
      billing_address: {     
        region_id: address[0]?.region_id,     
        country_id: "MM", 
        street: address[0]?.street,
        telephone: address[0]?.telephone,
        city: address[0]?.city,
        firstname: address[0]?.firstname,
        lastname: address[0]?.lastname,  
      },
      from : "api"     
    }
    setTimeout(async () => {
      let res = await dispatch(ecommerce.placeOrder(orderData))
      if (res?.success === true) {
        ecommerceStore.setPlaceOrder(res)
        router.push('/order-success')
        setOrdering(false)
      }
    }, 3000)
  }
  
  return (  
    cart_data !== null &&
    cart_data?.data?.length > 0 ?
    <>
      <Components.Breadcrumb props={
        [
          {
            title: 'Home',
            link: '/'
          },          
          {
            title: 'Shopping Cart',
            link: '/cart'
          },
          {
            title: 'Check Out'
          }
        ]
      } 
      />
      <Section>
        <Container>
          <Row>
            <Col lg='7'>
              <Components.DeliveryInfo checkOption={checkOption} />
              <Components.PaymentMethod shipping_method={shipping_method} value={value} onChange={handleChange} />
              {/* <Components.SpecialInstruction /> */}
            </Col>
            <Col lg={{size: 4, offset: 1}}>
              <OrderInfo>      
                <div className="sidebar-wrap">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="preview-product"
                      id="preview-product"
                    >
                      <p className="title-btn">
                        Items {
                        shipping_method_data !== null && 
                        shipping_method_data?.totals?.items?.length > 0 &&
                        <>({shipping_method_data?.totals?.items?.length})</>
                        }
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Row>
                        {
                          cart_data !== null && 
                          cart_data?.data?.length > 0 &&
                          cart_data?.data?.map((x, i) =>
                            <Components.ProductCard data={x} key={i} {...styleSetting} class={'no-slider-col-4'} width={'50%'} /> 
                          )
                        }
                      </Row>
                    </AccordionDetails>
                  </Accordion>
                </div> 
                <div className="order-subtotal">
                  {
                    isLoading ?
                    <>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </>
                    :
                    <>
                    {
                      shipping_method_data?.totals?.total_segments?.filter(t => t?.code !== "grand_total")?.map((x, i) =>
                        <p className="subtotal-item" key={i}>
                          <span className="title">{x?.title}</span>
                          <span className="price">{moneyFormat(x?.value)} MMK</span>                    
                        </p>
                      )
                    }
                    </>
                  }
                </div>  
                {
                  address?.length > 0 &&
                  <>
                    {
                      isLoading ?
                      <>
                        <Skeleton variant="rectangular" height={30} /><br />
                        <Skeleton variant="rectangular" height={40} />
                      </>
                      :
                      <div className="coupon-code">
                        {
                          shipping_method_data?.totals?.coupon_code &&
                          <div className="active-coupon">
                            <span>{shipping_method_data?.totals?.coupon_code}</span>
                            <IconButton aria-label="close" onClick={() => handleCancelCoupon()}>
                              {
                                !isCanceling ?
                                <Close />
                                :
                                <CircularProgress color="inherit" style={{width: '20px', height: '20px'}} />
                              }
                            </IconButton>
                          </div>
                        }
                        <Formik
                          enableReinitialize
                          initialValues={initialValues}
                          validationSchema={
                            Yup.object({
                              code: Yup.string()
                                .required('Please apply an coupon code!'),
                            })
                          }
                          onSubmit={(values, actions) => onSubmitCoupon(values, actions)}>

                          {
                            formikProps => (
                              <Form>
                                <Row>
                                  <Col md="12">
                                    <div className="coupon-wrap">
                                      <div className="coupon-field">
                                        <Components.TextInput name="code" type="text" placeholder="Apply Coupon Code" /> 
                                      </div>
                                      <Button 
                                        className="coupon-btn" 
                                        type="submit"
                                        disabled={disabled === true ? true : false}
                                      >
                                        { 
                                          formikProps.isSubmitting ?
                                          <BtnLoading style={{
                                            width: 20,
                                            height: 20,
                                            border: '3px solid rgba(232, 29, 37, .23)',
                                            borderRight: '3px solid rgba(232, 29, 37, .85)',
                                          }} /> :
                                          <span>Apply</span>
                                        }
                                      </Button>                                
                                    </div>
                                    {error && <span className="error">The coupon code you entered is not valid!</span>}
                                  </Col>
                                </Row>                          
                              </Form>
                            )
                          }
                        </Formik>
                      </div>
                    }  
                  </>
                }
                <div className="order-subtotal">
                  {
                    isLoading ?
                    <>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </>
                    :
                    <>
                      {
                        shipping_method_data?.totals?.total_segments?.filter(t => t?.code === "grand_total")?.map((x, i) =>
                          <p className="subtotal-item" key={i}>
                            <span className="total-title">{x?.title}</span>
                            <span className="price total-price">{moneyFormat(x?.value)} MMK</span>                    
                          </p>
                        )
                      }
                    </>
                  }
                </div>
                <div className="place-order">
                  <Row>
                    <Col md="12">
                      <Components.CustomButton 
                        data={
                          ordering ?
                            {
                              size: 'lg',
                              disabled: true,
                              text: 'Place Order',
                              loading: true,
                              color: 'gray'
                            }
                            :
                          address?.length === 0 ?
                            {
                              size: 'lg',
                              disabled: true,
                              text: 'Place Order',
                              color: 'gray'
                            }
                            :
                          isLoading ?
                            {
                              size: 'lg',
                              disabled: true,
                              text: 'Place Order',
                              color: 'gray'
                            }
                            :
                          !isInStock ?
                            {
                              size: 'lg',
                              disabled: true,
                              text: 'Place Order',
                              color: 'gray'
                            }
                            :
                            {
                              size: 'lg', 
                              color: 'primary', 
                              text: 'Place Order',
                            }
                        } 
                        onClick={() => onPlaceOrder()}
                      />
                      {
                        !isInStock &&
                        <span className="out-of-stock-msg">Please remove out of stock items in <Link href='/cart'><a>Shopping Cart</a></Link></span>
                      }
                    </Col>
                  </Row> 
                </div>
              </OrderInfo>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
    :
    <>
    {
    isCartLoading ?
    <Section>
      <Container>
        <Row>
          <Col lg='7'>
            <Skeleton variant="rectangular" height={76} style={{marginBottom: '16px'}}/>
            <Skeleton variant="rectangular" height={76} />
          </Col>
          <Col lg={{size: 4, offset: 1}}>
            <Skeleton variant="rectangular" height={350} />
          </Col>
        </Row>
      </Container>
    </Section>
    :
    <Components.Result>
      <img src="/cart_empty.svg" alt='cart empty' />
      <h2 className="title">Your shopping cart is empty</h2>
      <p className="caption">Add items you want to shop</p>
      <Components.CustomButton data={{text: 'Start shopping', color: 'primary', link: '/'}} />
    </Components.Result>
    }
    </>
  );
}
 
CheckOut.requireAuth = true