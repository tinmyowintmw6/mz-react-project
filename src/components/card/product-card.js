import React, { useState } from 'react'
import { ProductCardWrap } from './style/card-style'
import Link from 'next/link'
import EllipsisText from "react-ellipsis-text"
import { moneyFormat } from '../utils'
import { 
  LinearProgress,
  CardActionArea,
  IconButton, 
  DialogTitle, 
  DialogContent,
  DialogContentText,
  Skeleton } from "@material-ui/core"
import { Cancel, FiberManualRecord } from "@material-ui/icons"
import Components from "src/components"
import { CustomDialog } from 'src/styles/components'

const ProductCard = (props) => { 
  let width = props?.width
  const { data, key, ...styleData } = props

  // progress bar 
  let MIN = 0
  let MAX = props?.data?.available_qty

  const normalise = value => (value - MIN) * 100 / (MAX - MIN)
  // end ProgressBar 

  // handle add to cart 
  const [openAddToCart, setopenAddToCart] = useState(false)
  const handleAddToCart = () => {
    setopenAddToCart(true)
  }
  const handleCloseAddToCart = () => {
    setopenAddToCart(false)
  }

  return (  
    <>
      <ProductCardWrap className={`${props?.class}`} style={{...styleData, width: `${width}`}}> 
        {
          props?.loading ?
          <div className="product-card-link">
            <div className="img-wrap">
              <Skeleton 
                variant="rectangular" 
                width={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
                height={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
              />
            </div>
            <div className="title-wrap">
              <Skeleton variant="text" />
            </div>
            <div className="card-bottom">
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
          :
          <>
            {
              props?.type !== 'wishlist' ?
              <Link href={`/product/detail/${props?.data?.url_key}`} passHref>
                <a className="product-card-link">
                  <CardActionArea className="card-action-area">
                  {
                    props?.data?.is_in_stock === false ?
                    <span className="out-of-stock discount-tag">
                      <FiberManualRecord />
                      Out of Stock
                    </span>
                    :
                    props?.data?.discount_percent !== "" && props?.data?.discount_percent !== 0 ?
                    <span className="discount-tag">
                      <FiberManualRecord />
                      {props?.data?.discount_percent}% Off
                    </span>
                    :
                    <></>
                  }
                  <div className="img-wrap" 
                    style={
                      {
                        width: width === '25%' ? 140 : width === '33.33%' ? 160 : 180, 
                        height: width === '25%' ? 140 : width === '33.33%' ? 160 : 180
                      }
                    }
                  >
                    <Components.ImgWithFallback 
                      src={`${(props?.data?.image_url || props?.data?.image)}`} 
                      // width={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
                      // height={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
                      alt={props?.data?.name}
                      layout="fill"
                    />
                  </div>
                  <div className="title-wrap">
                    {/* <h3 className="title"><EllipsisText text={props?.data?.name} length={25} /></h3> */}
                    <h3 className="title">{props?.data?.name}</h3>
                  </div>
                  <div className="card-bottom">
                    <div className="price-wrap">
                      {
                        props?.data?.discount_percent !== "" && props?.data?.discount_percent !== 0 ?
                        <>
                          <p className="special-price-wrap">
                            <del className="special-price">
                              {
                                isNaN(props?.data?.special_price) ? 
                                props?.data?.special_price 
                                : 
                                moneyFormat(props?.data?.special_price)
                              }
                              <span className="unit">{props?.data?.currency}</span>
                            </del>
                          </p>
                          <p className="price">
                            {
                              isNaN(props?.data?.special_price) ?
                              props?.data?.price :
                              moneyFormat(props?.data?.price)
                            }
                            <span className="unit">{props?.data?.currency}</span>
                          </p>
                        </>
                        :
                        <p className="price">
                          {
                            isNaN(props?.data?.special_price) ?
                            props?.data?.price
                            :
                            moneyFormat(props?.data?.price)
                          }
                          <span className="unit">{props?.data?.currency}</span>
                        </p>
                      }
                    </div>  
                  </div>
                  {
                    props?.data?.type === 'flashdeal' &&
                    <div className="sold-progress">
                      <div className="sold-progress-bar">                               
                        <LinearProgress variant="determinate" value={normalise(props?.data?.sold_qty)} />                  
                        <span className="sold-number">{props?.data?.sold_qty} Items Sold</span>
                      </div>
                    </div>
                  }
                  </CardActionArea>
                </a>
              </Link>
              :
              <div className="product-card-link">
                {
                  props?.data?.is_in_stock === false ?
                  <span className="out-of-stock discount-tag">
                    <FiberManualRecord />
                    Out of Stock
                  </span>
                  :
                  props?.data?.discount_percent !== "" && props?.data?.discount_percent !== 0 ?
                  <span className="discount-tag">
                    <FiberManualRecord />
                    {props?.data?.discount_percent}% Off
                  </span>
                  :
                  <></>
                }
                {/* <div className="img-wrap">
                  <Components.ImgWithFallback 
                    src={`${(props?.data?.image_url || props?.data?.image)}`} 
                    width={props?.width === '25%' ? 170 : props?.width === '33.33%' ? 200 : 230} 
                    height={props?.width === '25%' ? 170 : props?.width === '33.33%' ? 200 : 230} 
                    alt={props?.data?.name}
                  />
                </div> */}
                <div className="img-wrap" 
                  style={
                    {
                      width: width === '25%' ? 140 : width === '33.33%' ? 160 : 180, 
                      height: width === '25%' ? 140 : width === '33.33%' ? 160 : 180
                    }
                  }
                >
                  <Components.ImgWithFallback 
                    src={`${(props?.data?.image_url || props?.data?.image)}`} 
                    // width={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
                    // height={width === '25%' ? 170 : width === '33.33%' ? 200 : 230} 
                    alt={props?.data?.name}
                    layout="fill"
                  />
                </div>
                <div className="title-wrap">
                  {/* <h3 className="title"><EllipsisText text={props?.data?.name} length={25} /></h3> */}
                  <h3 className="title">{props?.data?.name}</h3>
                </div>
                <div className="card-bottom">
                  <div className="price-wrap">
                    {
                      props?.data?.discount_percent !== "" && props?.data?.discount_percent !== 0 ?
                      <>
                        <p className="special-price-wrap">
                          <del className="special-price"> 
                            {
                              isNaN(props?.data?.special_price) ? 
                              props?.data?.special_price 
                              : 
                              moneyFormat(props?.data?.special_price)
                            }
                            <span className="unit">{props?.data?.currency}</span>
                          </del>
                        </p>
                        <p className="price">
                          {
                            isNaN(props?.data?.special_price) ?
                            props?.data?.price :
                            moneyFormat(props?.data?.price)
                          }
                          <span className="unit">{props?.data?.currency}</span>
                        </p>
                      </>
                      :
                      <p className="price">
                        {
                          isNaN(props?.data?.special_price) ?
                          props?.data?.price
                          :
                          moneyFormat(props?.data?.price)
                        }
                        <span className="unit">{props?.data?.currency}</span>
                      </p>
                    }
                  </div>  
                </div>
                <div style={{height: '48px'}}>
                  <div style={{height: '48px', marginTop: '15px', position: 'absolute', bottom: '0', left: '0', width: '100%'}}>
                    <Components.CustomButton data={{
                        cartIcon: true, 
                        size: 'lg', 
                        color: 'primary', 
                        text: 'Add to cart',
                      }} 
                      onClick={() => handleAddToCart()}
                    />
                    <CustomDialog
                      open={openAddToCart}
                      onClose={handleCloseAddToCart}
                      // scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                      className="add-to-cart-dialog"
                    >
                      <IconButton className="close-icon" aria-label="cancel" onClick={handleCloseAddToCart}>
                        <Cancel />
                      </IconButton>
                      <DialogTitle className="dialog-title" component="div">
                        <img src="../../success.png" alt="success" />
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          tabIndex={-1}
                          as="div"
                        >
                          <div className="add-to-cart">
                            <p className="title">Item has been added to your shopping cart</p>                            
                            <div className="submit-wrap" style={{marginTop: '16px', display: 'flex', justifyContent: 'center'}}>
                              <Components.CustomButton data={{
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Go To Cart',
                                  link: '/cart/1'
                                }} 
                              />
                            </div>
                          </div>
                        </DialogContentText>
                      </DialogContent>
                    </CustomDialog>
                  </div>
                </div>
              </div>
            }                 
          </>
        }
      </ProductCardWrap> 
    </>
  );
}
 
export default ProductCard;