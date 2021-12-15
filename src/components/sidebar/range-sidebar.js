import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { SideBarContainer } from './style/sidebar-style'
import { moneyFormat } from '../utils'
import { 
  Slider, 
  Accordion,
  AccordionSummary,
  AccordionDetails } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
// import { category } from "store/actions"

// const minDistance = 1000;

const RangeSidebar = (props) => {
  // console.log(`props`, props)
  // const dispatch = useDispatch()
  // let maxVal = props?.data?.["max-price"]
  // let minVal = props?.data?.["min-price"]
  // const [value, setValue] = useState([minVal, maxVal])
  // console.log(`value`, value)
  // let timeout;
  // const handleChange = (event, newValue, activeThumb) => {
  //   timeout && clearTimeout(timeout)
  //   if (!Array.isArray(newValue)) {
  //     return;
  //   }
  //   if (activeThumb === 0) {
  //     timeout = setTimeout(() => {
  //       setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
  //     }, 200)
  //   } else {
  //     timeout = setTimeout(() => {
  //       setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
  //     }, 200)
  //   }
  // };

  // useEffect(() => {
  //   dispatch(category.getFilterItem('PRODUCT_PRICE', value))
  // }, [dispatch, value])

  return (
    <SideBarContainer>
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="category-sidebar"
            id="category-sidebar"
          >
            <p className="title-btn">{props?.data?.label}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="range-wrap">
              <div className="range-number">
                {
                  props?.value?.length > 0 &&
                  <>
                    <span>{moneyFormat(props?.value[0])} MMK</span>
                    <span>{moneyFormat(props?.value[1])} MMK</span>
                  </>
                }
              </div>
              {
                props?.value?.length > 0 &&
                <Slider
                  getAriaLabel={() => 'Minimum distance shift'}
                  value={props?.value}
                  onChange={props?.onHandleChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(x) => `${moneyFormat(x)} MMK`}
                  disableSwap
                  max={props?.data?.["max-price"]}
                  min={props?.data?.["min-price"]}
                  step={100}
                />
              }
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </SideBarContainer>
  )
}

export default RangeSidebar
