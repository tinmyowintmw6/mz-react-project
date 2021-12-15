import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Col, Container, Row } from "reactstrap";
import { Section, CustomTable } from "src/styles/components";
import Components from "src/components"
import styled from 'styled-components'
import { moneyFormat } from "src/components/utils";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
  Snackbar,
  IconButton, 
  DialogTitle, 
  DialogContent, 
  DialogContentText,
  } from '@material-ui/core';
import { ArrowBack, Cancel } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { order } from "store/actions"
import { authStore } from "service";
import { CustomDialog, ErrorMsg } from 'src/styles/components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const OrderDetailContainer = styled.div`
  margin-top: 25px;
  .cancel-order {
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

const scrollToRef = ref => window.scrollTo(0, ref.current?.offsetTop - 100)

export default function OrderDetail () {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { order_detail_data, isDetailLoading, cancel_order_data, isCancelLoading } = useSelector(state => state.order)
  const router = useRouter();

  // handle reason submit 
  const [openReasonForm, setOpenReasonForm] = useState(false)
  const handleReasonForm = () => {
    setOpenReasonForm(true)
  }
  const closeReasonForm = () => {
    setOpenReasonForm(false);
  }

  useEffect(() => {
    if (!router.isReady) {
      return
    };
    let orderId = +router.query.id
    let lang = {
      code: langStore?.code
    }
    const authData = authStore.getAuth();
    authData && dispatch(order.getOrderDetail(orderId, lang))
  }, [router, dispatch, langStore?.code])

  // toast alert 
  const [toast, setToast] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })

  const handleClose = () => {
    setToast({ open: false });
  };

  const { vertical, horizontal, open } = toast
  // end toast 

  // const handleCancelOrder = async (orderId) => {
  //   let postData = {
  //     service: "api"
  //   }
  //   let lang = {
  //     code: langStore?.code
  //   }
  //   let res = await dispatch(order.cancelOrder(orderId, postData))
  //   if (res?.success === true) {
  //     setToast({ open: true });
  //     dispatch(order.getOrderDetail(orderId, lang))
  //   }
  // }

  // formik 
  let initialValues = {
    reason: '',
  }

  // handle form submit 
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(null)
  const scrollRef = useRef(null)
  const onSubmitReason = (values, actions) => {
    let postData = {
      reason: values.reason
    }
    let lang = {
      code: langStore?.code
    }
    actions.setSubmitting(true)
    setDisabled(true)
    setTimeout(async () => {
      let res = await dispatch(order.cancelOrder(order_detail_data?.order_id, postData))
      if (res?.success === true) {
        dispatch(order.getOrderDetail(order_detail_data?.order_id, lang))
        setOpenReasonForm(false);
        setToast({ open: true });
        scrollToRef(scrollRef)
      } else {
        setError('Something went wrong, please try again!')
      }
      actions.setSubmitting(false)
      setDisabled(false)
    }, 1000)
  }
  
  return (  
    <Section>
      <Container>
        <Row>
          <Col lg="3" style={{marginBottom: '30px'}}>
            <Components.Title props={{title: 'Order Status'}} />
            {
              order_detail_data?.status === 'canceled' || order_detail_data?.status === 'canceling' ?
              <div className="status" style={{marginTop: '16px'}}>
                <span style={{
                  background: '#8C8C96',
                  fontSize: '12px',
                  fontFamily: 'fontStyle-bold',
                  color: '#FFF',
                  padding: '6px 8px',
                  borderRadius: '100px'
                }}>
                  {order_detail_data?.order_status_label}
                </span>
              </div>
              :
              <Components.StepperSidebar status={order_detail_data?.status} />
            }
          </Col>
          <Col lg="9">
            {
              order_detail_data !== null &&
              order_detail_data?.items?.length > 0 ?
              <>
                <Components.Title props={{title: 'Order Detail'}} />
                <div className="date" style={{marginTop: '16px'}}>
                  {
                    isDetailLoading ?
                    <Skeleton variant="text" width={200} />
                    :
                    <p>Order Placed: {moment(order_detail_data?.created_at).format("DD MMM YYYY")}</p>
                  }
                </div>
                <OrderDetailContainer>
                  <CustomTable className="order-detail-table">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Order ID</TableCell>
                          <TableCell>Payment Method</TableCell>
                          <TableCell>Delivery To</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell style={{verticalAlign: 'baseline'}}>
                            {
                              isDetailLoading ?
                              <Skeleton variant="text" />
                              :
                              order_detail_data?.order_id
                            }
                          </TableCell>
                          <TableCell style={{verticalAlign: 'baseline'}}>
                            {
                              isDetailLoading ?
                              <Skeleton variant="text" />
                              :
                              order_detail_data?.payment_method?.method_title
                            }
                          </TableCell>
                          <TableCell className="delivery" style={{verticalAlign: 'baseline'}}>
                            {
                              isDetailLoading ?
                              <>
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                              </>
                              :
                              <>
                                <div className="info">
                                  <span className="title">Name:</span>
                                  <span>
                                    {
                                      order_detail_data?.shipping?.firstname
                                    }
                                  </span>    
                                </div>  
                                <div className="info">                 
                                  <span className="title">Address:</span> 
                                  <span className="address-list">
                                    {/* <span>{order_detail_data?.shipping?.postcode}</span> */}
                                    <span>{order_detail_data?.shipping?.street}</span>
                                    <span>{order_detail_data?.shipping?.city}</span>
                                    <span>{order_detail_data?.shipping?.region}</span>
                                  </span>
                                </div>
                                <div className="info">
                                  <span className="title">Phone:</span>
                                  <span>
                                    {
                                      order_detail_data?.shipping?.telephone
                                    }
                                  </span>    
                                </div>
                              </>
                            }
                          </TableCell>
                          <TableCell style={{verticalAlign: 'baseline'}}>
                            {
                              isDetailLoading ?
                              <div className="status" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Skeleton variant="rectangular" width={"70px"} height={"24px"} />
                              </div>
                              :
                              <div className="status">
                                <span 
                                  style={
                                    order_detail_data?.status === 'pending' || order_detail_data?.status === 'processing' ? 
                                    {background: '#F29423'}
                                    : 
                                    order_detail_data?.status === 'complete' || order_detail_data?.status === 'delivery' ?
                                    {background: '#059669'}
                                    :
                                    order_detail_data?.status === 'canceled' || order_detail_data?.status === 'canceling' ?
                                    {background: '#8C8C96'}
                                    :
                                    {background: '#000'}
                                    }
                                  >{order_detail_data?.order_status_label}</span>
                              </div>
                            }
                          </TableCell>
                        </TableRow>               
                      </TableBody>
                    </Table>
                  </CustomTable>
                  <CustomTable className="cart-table">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className="product-col">Product</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Total</TableCell>
                        </TableRow>
                      </TableHead>
                      {
                        isDetailLoading ?
                        <TableBody>
                          {
                            Array(5).fill().map((x, i) =>
                              <TableRow key={i}>
                                <TableCell>
                                  <Skeleton variant="text" />
                                </TableCell>
                                <TableCell className="price">
                                  <Skeleton variant="text" />
                                </TableCell>
                                <TableCell>
                                  <Skeleton variant="text" />
                                </TableCell>
                                <TableCell className="sub-total">
                                  <Skeleton variant="text" />
                                </TableCell>
                              </TableRow>     
                            )
                          }          
                        </TableBody>
                        :
                      
                        <TableBody>
                          {
                            order_detail_data?.items?.map((x, i) => 
                              <TableRow key={i}>
                                <TableCell>
                                  <div className="product-name">
                                    {
                                      x?.image &&
                                      <div className="img-wrap">
                                        <Components.ImgWithFallback 
                                          src={`${(x?.image)}`} 
                                          // width={80} 
                                          // height={80} 
                                          alt={x?.name}
                                          type="order"
                                          layout="fill"
                                        />
                                      </div>
                                    }
                                    <p className="title">
                                      <span>{x?.name}</span>                                
                                      <span>Gold, 128GB</span>
                                    </p>
                                  </div>
                                </TableCell>
                                <TableCell className="price">
                                  {
                                    x?.discount > 0 ?
                                    <p>
                                      <span>{moneyFormat(x?.special_price)} MMK</span>
                                      <small><del>{moneyFormat(x?.price)} MMK</del></small>
                                    </p>
                                    :
                                    <p>
                                      <span>{moneyFormat(x?.price)} MMK</span>
                                    </p>
                                  }
                                </TableCell>
                                <TableCell className="qty">
                                  <p>{x?.qty_ordered}</p>
                                </TableCell>
                                <TableCell>{moneyFormat(x?.row_total)} MMK</TableCell>
                              </TableRow>
                            )
                          }                  
                        </TableBody>
                      }
                    </Table>
                  </CustomTable>
                  <CustomTable className="table-bottom">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={4}>
                            <span className="total total-small">Subtotal</span>
                            <span className="total-price total-small">
                              {
                                isDetailLoading ?
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                  <Skeleton variant="text" width={100}/>
                                </div>
                                :
                                <>
                                  {
                                    moneyFormat(order_detail_data?.subtotal)
                                  } MMK
                                </>
                              }
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={4}>
                            <span className="total total-small">Discount</span>
                            <span className="total-price total-small">
                              {
                                isDetailLoading ?
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                  <Skeleton variant="text" width={100}/>
                                </div>
                                :
                                <>
                                  {
                                    moneyFormat(order_detail_data?.discount)
                                  } MMK
                                </>
                              }
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={4}>
                            <span className="total">Grand Total</span>
                            <span className="total-price">
                              {
                                isDetailLoading ?
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                  <Skeleton variant="text" width={100}/>
                                </div>
                                :
                                <>
                                  {
                                    moneyFormat(order_detail_data?.grand_total)
                                  } MMK
                                </>
                              }
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="cancel-order">
                          <TableCell colSpan={2}>
                            <Components.LinkButton text={'Back to Order History'} link={'/order'} icon={<ArrowBack />}/>
                          </TableCell>
                          <TableCell colSpan={2}>
                          {
                            order_detail_data?.status === "pending" &&
                            <Components.CustomButton 
                              data={
                                {
                                  size: 'md', 
                                  color: 'transparent', 
                                  text: 'Cancel Order'
                                }
                              } 
                              onClick={() => handleReasonForm()}
                            />
                            }
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CustomTable>
                </OrderDetailContainer>
              </>
              :
              <>
              {
                isDetailLoading ?
                <Section>
                  <Container>
                    <Row>
                      <Col md='12'>
                        <CustomTable className="cart-table">
                          <Table>
                            <TableBody>
                              {
                                Array(5).fill().map((x, i) =>
                                  <TableRow key={i}>
                                    <TableCell>
                                      <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell className="price">
                                      <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell>
                                      <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell className="sub-total">
                                      <Skeleton variant="text" />
                                    </TableCell>
                                  </TableRow>     
                                )
                              }          
                            </TableBody>
                          </Table>
                        </CustomTable>
                      </Col>
                    </Row>
                  </Container>
                </Section>
                :
                <Components.Result>
                  <img src="/cart_empty.svg" alt='order empty' />
                  <h2 className="title">No Orders</h2>
                  <p className="caption">You don’t have any purchases.</p>
                  <Components.CustomButton data={{text: 'Start shopping', color: 'primary', link: '/'}} />
                </Components.Result>
                }
              </>
            }
          </Col>
        </Row>
      </Container>
      <CustomDialog
        open={openReasonForm}
        onClose={closeReasonForm}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeReasonForm}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Reasons for Cancellation
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            tabIndex={-1}
            as="div"
          >
            <div className="edit-form-wrap">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={
                  Yup.object({
                    reason: Yup.string()
                      .max(50, 'Must be 50 characters or less')
                      .required('Reason is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitReason(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput 
                            multiline
                            rows={4}
                            label="Reason" 
                            name="reason" 
                            type="text" 
                            placeholder="Why do you want to cancel?"
                            require="require"
                            inputType="textarea"
                          /> 
                          {error !== null && <ErrorMsg>{error}</ErrorMsg> }
                        </Col>
                      </Row>                      
                      <div className="save-btn-wrap" style={{marginTop: '25px', display: 'flex', justifyContent: 'flex-end'}}>
                        <Row>
                          <Col md="12">
                            <Components.CustomButton data={
                                formikProps.isSubmitting ?
                                {
                                  size: 'sm',
                                  disabled: disabled,
                                  text: 'Submitting',
                                  loading: true,
                                  color: 'gray'
                                }:
                                {
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Submit',
                                  type: 'submit'
                                }
                              } 
                            />
                          </Col>                                        
                        </Row>
                      </div>
                    </Form>
                  )
                }
              </Formik>
            </div>
          </DialogContentText>
        </DialogContent>
      </CustomDialog>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Your order has been canceled successfully!"
        key={vertical + horizontal}
        onClose={handleClose}
      />
    </Section>
  );
}

OrderDetail.requireAuth = true