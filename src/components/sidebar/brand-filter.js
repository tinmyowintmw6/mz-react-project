import React from 'react'
import {  
  FormControlLabel, 
  Checkbox, 
  Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core'
import { SideBarContainer} from './style/sidebar-style'
import { ExpandMore } from '@material-ui/icons'

export default function BrandFilter(props) {
  return (
    <SideBarContainer>
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="category-sidebar"
            id="category-sidebar"
          >
            <p className="title-btn">{props?.data?.field}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="sidebar-list">
              {
                props?.data?.value?.map((v, index) => (
                  <FormControlLabel
                    control={<Checkbox className="sidebar-check" checked={props?.checked?.includes(v?.value)} onChange={props?.onHandleChange} name={props?.data?.field} value={v?.value} />}
                    label={v?.label}
                    key={index}
                    className={`sidebar-check-label`}
                  />
                ))
              }
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </SideBarContainer>
  )
}
