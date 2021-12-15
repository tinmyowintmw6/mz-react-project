import React, { useState } from 'react'
import {  
  Radio, 
  RadioGroup,
  FormControlLabel, 
  Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core'
import { SideBarContainer } from './style/sidebar-style'
import { ExpandMore } from '@material-ui/icons'

const PaymentMethod = (props) => {
  const handleChange = (event) => {
    props?.onChange(event.target.value)
  }

  return (
    <SideBarContainer>      
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="checkout-sidebar"
            id="checkout-sidebar"
          >
            <p className="title-btn">Payment Method</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="payment-method-wrap">
              <RadioGroup aria-label="payment" name="payment" value={props?.value} onChange={handleChange}>
                {
                  props?.shipping_method?.payment_methods?.map((x, i) => 
                    <FormControlLabel key={i} value={x?.code} control={<Radio />} label={x?.title} />  
                  )
                } 
              </RadioGroup>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>      
    </SideBarContainer>
  )
}

export default PaymentMethod
