import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Components from "src/components";
import { useRouter } from 'next/router';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { ecommerceStore } from 'service'
import { ecommerce } from "store/actions"

export default function OrderSuccess () {
  const dispatch = useDispatch()
  const router = useRouter();
  let orderId = ecommerceStore.getPlaceOrder()?.order_id
  useEffect(() => {
    !orderId && router.push('/')
    dispatch(ecommerce.setEcommerceStore('REMOVE_STORE_DATA', null))
    ecommerceStore.removeQuote()
  }, [dispatch, router, orderId])

  return (  
    <Components.Result>
      {/* <img src="/success-icon.svg" alt="success icon" /> */}
      <Player
        autoplay
        loop
        src="/delivery-guy.json"
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
      <h1 className="title">Order Successfully Placed!</h1>
      <p className="sub-title">Your order will be delivery soon.</p>
      <p className="sub-title">Thank you for choosing MZ Online Market!</p>
      <div className="btn-wrap">
        <Components.CustomButton 
          data={
            {
              size: 'md',
              text: 'Continue shopping',
              color: 'transparent',
              link: '/'
            }
          } 
        />
        <Components.CustomButton 
          data={
            {
              size: 'md',
              text: 'View my order',
              color: 'primary',
              link: `order/detail/${orderId}`
            }
          } 
        />
      </div>
    </Components.Result>
  );
}

OrderSuccess.requireAuth = true