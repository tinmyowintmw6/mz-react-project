import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CouponWrap } from './style/card-style'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import Components from "src/components"
import { 
  Skeleton,
  Button,
  IconButton, 
  DialogContent, 
  DialogContentText,
  LinearProgress,
  Snackbar } from '@material-ui/core'
import moment from "moment";
import EllipsisText from "react-ellipsis-text"
import { account } from "store/actions"
import { useRouter } from 'next/router';
import { authStore } from 'service'
import { useAuth } from "src/components/auth-provider/auth-provider"

const HomeCoupon = (props) => {
  const { setRedirect } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch()
  const { coupon_list_data, isLoading } = useSelector(state => state.account)
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1.1,
        }
      }
    ]
  }
  
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
  
  // check if coupon is already collected or not 
  const [claimedId, setClaimedId] = useState(null)
  useEffect(() => {
    let claimedId = coupon_list_data !== null && coupon_list_data?.succeess !== false &&
    coupon_list_data?.data?.length > 0 &&
    coupon_list_data?.data?.map(x => x?.id)
    claimedId && setClaimedId(claimedId)
  }, [coupon_list_data])
  // end check id 

  const [collected, setCollected] = useState(null)
  const [couponMsg, setCouponMsg] = useState(null)
  const handleCollect = async (id, i) => {
    if (authStore.getAuth()) {
      let postData = {
        couponId: id
      }
      i !== collected && setCollected(i)
      let res = await dispatch(account.collectCoupon(postData))
      if (res?.succeess === true) {
        dispatch(account.getCoupon())
        setToast({ open: true })
        setCouponMsg(res?.successmsg)
        setCollected(null)
      } else {
        setToast({ open: true })
        setCouponMsg(res?.errormsg)
        setCollected(null)
      }
    } else {
      setRedirect(router.asPath);
      router.push('/login')
    }
  }
  
  return (
    <>
      <CouponWrap>
        <Container>
          <Row>
            {
              props?.loading ?
              <div style={{display: 'flex', overflow: 'hidden'}}>
                {
                  Array(3).fill().map((x, i) =>
                    <div className="coupon-card-skeleton" key={i}>
                      <Skeleton 
                        variant="rectangular" 
                        height={93} 
                      />
                    </div>
                  )
                }
              </div>
              :
              <Slider {...settings}>
                {
                  props?.data?.data?.length > 0 &&
                  props?.data?.data?.map((x, i) => 
                  <div className="coupon-col" key={i}>
                    <div className="coupon-card-wrap">
                      <Button 
                        disabled={
                          i === collected ? 
                          true : 
                          claimedId !== null && claimedId.includes(+x?.var_data) ?
                          true :
                          false
                        }
                        className="coupon-card"
                        onClick={() => handleCollect(x?.var_data, i)}
                      >
                        <div className="icon-wrap">
                          <div className="icon">
                            <img src="/coupon-icon.svg" alt="coupon icon" />
                          </div>
                        </div>
                        <div className="title">
                          <div className="text">
                            <p className="coupon-name"><EllipsisText text={x?.name} length={40} /></p>
                            <span className="coupon-date">Valid until: {moment(x?.expire_time).format("DD MMM YYYY")}</span>
                          </div>
                          <div className="status">
                            <div className={`view ${claimedId !== null && claimedId.includes(+x?.var_data) ? 'copied' : ''}`}>
                              {
                                claimedId !== null && claimedId.includes(+x?.var_data) ?
                                <span>
                                  Claimed
                                </span>
                                :
                                <span>
                                  Claim
                                </span>
                              }
                            </div>
                          </div>
                        </div>
                      </Button>
                      {
                        i === collected &&
                        <LinearProgress color="inherit" style={{position: 'absolute', bottom: '0', left: '0', width: '100%'}} />
                      }
                    </div>
                  </div>
                  )
                }
              </Slider>
            }
          </Row>
        </Container>
      </CouponWrap>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message={couponMsg}
        key={vertical + horizontal}
        onClose={handleClose}
      />
    </>
  )
}

export default HomeCoupon