import React, { useState } from 'react'
import { 
  TextField, 
  Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core'
import { SideBarContainer } from './style/sidebar-style'
import { ExpandMore } from '@material-ui/icons'

const SpecialInstruction = (props) => {
  // const handleChange = (event) => {
  //   props?.onChange(event.target.value)
  // }

  return (
    <SideBarContainer>      
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="checkout-sidebar"
            id="checkout-sidebar"
          >
            <p className="title-btn">Special Instruction</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="special-instruction">
              <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                placeholder="Your message"
                variant="filled"
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>      
    </SideBarContainer>
  )
}

export default SpecialInstruction
