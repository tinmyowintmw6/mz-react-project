import React from 'react'
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core'
import { SideBarContainer } from './style/sidebar-style'
import { ExpandMore } from '@material-ui/icons'
import Components from "src/components"

const CheckoutDeliInfo = (props) => {
  return (
    <SideBarContainer>      
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="checkout-sidebar"
            id="checkout-sidebar"
          >
            <p className="title-btn">Delivery Information</p>
          </AccordionSummary>
          <AccordionDetails>
            <Components.AddressInfo checkOption={props?.checkOption} />
          </AccordionDetails>
        </Accordion>
      </div>      
    </SideBarContainer>
  )
}

export default CheckoutDeliInfo
