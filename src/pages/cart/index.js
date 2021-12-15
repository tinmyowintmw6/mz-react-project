import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { CustomTable, Section } from "src/styles/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Skeleton,
  CircularProgress,
  LinearProgress,
  Snackbar
  } from '@material-ui/core';
import { 
  Container, 
  Row, 
  Col  
} from "reactstrap"
import Components from "src/components"
import { QuantityCounter } from "src/styles/components"
import { Remove, Add } from "@material-ui/icons";
import { moneyFormat } from "src/components/utils"
import { ecommerce } from "store/actions"
import { useRouter } from 'next/router';

let tmp = null

export default function Cart () {
  const dispatch = useDispatch()
  const { cart_data, isCartLoading } = useSelector(state => state.ecommerce)
  const router = useRouter();

  // disabled button if one of item in cart is out of stock 
  const [isInStock, setIsInStock] = useState(false)
  useEffect(() => {
    let isInStock = cart_data !== null && cart_data?.data?.map(x => x?.is_in_stock)
    isInStock && isInStock.includes(false) ? setIsInStock(false) : setIsInStock(true)
  }, [cart_data])

  // toast alert 
  const [toast, setToast] = useState({
    message: '',
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })

  const handleClose = () => {
    setToast({ open: false });
  };

  const { vertical, horizontal, open, message } = toast
  // end toast 
  
  // qty change  
  const [addSpinner, setAddSpinner] = useState(null)
  const [subSpinner, setSubSpinner] = useState(null)
  const handleQty = async (key, sku, qty, available_qty, quote_id, item_id, index) => {
    clearTimeout(tmp)
    cart_data.data[index].qty = qty
    tmp = setTimeout(() => {
      handleChange(key, sku, qty, available_qty, quote_id, item_id, index)
    }, 350)
  }
  const handleChange = async (key, sku, qty, available_qty, quote_id, item_id, index) => {
    if (key === "add") {
      if (qty < available_qty) {
        index !== addSpinner && setAddSpinner(index)
        qty += 1;
      } else {
        setToast({ open: true, message: 'Not enough stock!' })
      }
    } else if (key === "sub") {
      if (qty > 1) {
        index !== subSpinner && setSubSpinner(index)
        qty -= 1;
      }
    } else {
      index !== addSpinner && setAddSpinner(index)
      index !== subSpinner && setSubSpinner(index)
      if (qty === '') {
        qty = 1
      } else if (qty > available_qty) {
        qty = available_qty
        setToast({ open: true, message: 'Not enough stock!' })
      } else {
        qty = qty
      }
      // qty = (qty === '' ? 1 : qty > available_qty ? available_qty : qty)
      qty = +qty
    }

    let cartData = {
      cartItem: {
        sku,
        qty,
        quoteId: quote_id
      }
    }

    let res = await dispatch(ecommerce.updateCartUser(item_id, cartData))
    if (res?.status === true) {
      let resCart = await dispatch(ecommerce.getCartUser())
      if (resCart?.data?.length > 0) {
        setAddSpinner(null)
        setSubSpinner(null)
      }
    }
  }

  // handle remove cart 
  const [remove, setRemove] = useState(null)
  const handleRemove = async (itemId, index) => {
    index !== remove && setRemove(index)
    let res = await dispatch(ecommerce.deleteCart(itemId))
    if (res?.success === true) {
      dispatch(ecommerce.getCartUser())
      setRemove(null)
    }
  }
  //end qty change

  // handle checkout 
  const handleCheckOut = () => {
    isInStock ?
    router.push('/checkout') :
    setToast({ open: true, message: 'Please remove out of stock items to continue!' })
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
            title: 'Shopping Cart'
          }
        ]
      } 
      />
      <Section>
        <div style={{marginBottom: '24px'}}>
          <Container>
            <Row>
              <Col md='12'>
                <Components.Title props={{title: 'Shopping Cart'}} />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col md='12'>
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
                  <TableBody>
                    {
                      cart_data?.data?.map((x, i) => 
                        <TableRow key={i}>
                          <TableCell>
                            {
                              x?.is_in_stock === false &&
                              <span className="out-of-stock">
                                {/* <FiberManualRecord /> */}
                                Out of Stock
                              </span>
                            }
                            <div className="product-name" style={x?.is_in_stock === false ? {opacity: '.5'} : {opacity: '1'}}>
                              {
                                x?.image &&
                                <div className="img-wrap">
                                  <Components.ImgWithFallback 
                                    src={`${(x?.image)}`} 
                                    // width={80} 
                                    // height={80} 
                                    alt={x?.name}
                                    type="cart"
                                    layout="fill"
                                  />
                                </div>
                              }
                              <p className="title">
                                <span className="name">
                                  {x?.name}
                                </span>
                                <span className="option">
                                {
                                  x?.item_options !== null &&
                                  x?.item_options?.map((option, index) =>
                                  <span className="option-item" key={index}>
                                    <small>{option?.option_label}</small>
                                    <small>{option?.option_value}</small>
                                  </span>
                                  )
                                }
                                </span>
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="price" style={x?.is_in_stock === false ? {opacity: '.5'} : {opacity: '1'}}>
                            {
                              x?.discount > 0 ?
                              <p>
                                <span className="price-wrap">
                                  <span>
                                    {
                                      isNaN(x?.special_price) ?
                                      x?.special_price :
                                      moneyFormat(x?.special_price)
                                    } 
                                  </span>
                                  <span className="unit">MMK</span>
                                </span>
                                <small className="price-wrap">
                                  <del>
                                    {
                                      isNaN(x?.price) ?
                                      x?.price :
                                      moneyFormat(x?.price)
                                    } 
                                  </del>
                                  <span className="unit">MMK</span>
                                </small>
                              </p>
                              :
                              <p>
                                <span className="price-wrap">
                                  <span>
                                  {
                                    isNaN(x?.price) ?
                                    x?.price :
                                    moneyFormat(x?.price)
                                  }
                                  </span>
                                  <span className="unit">MMK</span>
                                </span>
                              </p>
                            }
                          </TableCell>
                          <TableCell>
                            <QuantityCounter className="cart-qty-counter" style={{marginBottom: 0}}>                          
                              <div className="btn-qty" style={x?.is_in_stock === false ? {opacity: '.5'} : {opacity: '1'}}>
                                <Button 
                                  disabled={
                                    i !== subSpinner && x?.is_in_stock !== false ? 
                                    false :
                                    true
                                  }
                                  onClick={() => handleQty("sub", x?.sku, x?.qty, x?.available_qty, x?.quote_id, x?.item_id, i)}
                                >
                                  {
                                    i !== subSpinner ?
                                    <Remove /> :
                                    <CircularProgress color="inherit" />
                                  }
                                </Button>                                
                                <TextField
                                  disabled={
                                    i !== subSpinner && i !== addSpinner && x?.is_in_stock !== false? 
                                    false : 
                                    true
                                  }
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
                                  value={x?.qty}
                                  onChange={e => handleQty("other", x?.sku, e.target.value.replace(/[^0-9]/, ''), x?.available_qty, x?.quote_id, x?.item_id, i)}
                                />                                                                    
                                <Button 
                                  disabled={
                                    i !== addSpinner && x?.is_in_stock !== false ?
                                    false : 
                                    true
                                  }
                                  onClick={() => handleQty("add", x?.sku, x?.qty, x?.available_qty, x?.quote_id, x?.item_id, i)}
                                >
                                  {
                                    i !== addSpinner ?
                                    <Add /> :
                                    <CircularProgress color="inherit" />
                                  }
                                  
                                </Button>
                              </div>
                              <Button className="remove-btn" onClick={() => handleRemove(x?.item_id, i)}>
                                {
                                  i !== remove ?
                                  <span>
                                    Remove
                                  </span> 
                                  :
                                  <>
                                    <span>Removing</span>
                                    <LinearProgress color="inherit" />
                                  </>
                                }
                              </Button>
                            </QuantityCounter>
                          </TableCell>
                          <TableCell className="sub-total" style={x?.is_in_stock === false ? {opacity: '.5'} : {opacity: '1'}}>
                            <span className="price-wrap">
                              <span>
                              {
                                isNaN(x?.sub_total) ?
                                x?.sub_total :
                                moneyFormat(x?.sub_total)
                              }
                              </span>
                              <span className="unit">MMK</span>
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                    }                  
                  </TableBody>
                </Table>
              </CustomTable>
              <CustomTable className="table-bottom">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={4}>
                        <span className="total">Subtotal</span>
                        <span className="total-price">{moneyFormat(cart_data?.sub_total)} MMK</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={4}>
                        <Components.CustomButton 
                          data={
                            {
                              size: 'md', 
                              color: 'primary', 
                              text: 'Check out', 
                            }
                          }
                          onClick={() => handleCheckOut()} 
                        />
                        <span className="deli-fee">Delivery Fee calculated at checkout</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CustomTable>
            </Col>
          </Row>
        </Container>
      </Section>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message={message}
        key={vertical + horizontal}
        onClose={handleClose}
      />
    </>
    :    
    <>
    {
    isCartLoading ?
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
      <img src="/cart_empty.svg" alt='cart empty' />
      <h2 className="title">Your shopping cart is empty</h2>
      <p className="caption">Add items you want to shop</p>
      <Components.CustomButton data={{text: 'Start shopping', color: 'primary', link: '/'}} />
    </Components.Result>
    }
    </>
  );
}
 
Cart.requireAuth = true