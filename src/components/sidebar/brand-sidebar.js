import React, { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { category } from "store/actions"
import Components from "src/components"

const scrollToRef = ref => window.scrollTo(0, ref.current?.offsetTop - 100)

const BrandSidebar = (props) => {
  const dispatch = useDispatch()
  const { car_brand, model_car, year_car, retail_brand, size, color, condition } = useSelector(state => state.category)
  const scrollRef = useRef(null)
  
  const handleChange = (event) => {
    const isChecked = event.target.checked
    scrollToRef(scrollRef)
    if (isChecked) {
      event.target.name === 'car_brand' && 
      dispatch(category.getFilterItem('CAR_BRAND', [...car_brand, event.target.value]))

      event.target.name === 'model_car' && 
      dispatch(category.getFilterItem('MODEL_CAR', [...model_car, event.target.value]))

      event.target.name === 'year_car' && 
      dispatch(category.getFilterItem('YEAR_CAR', [...year_car, event.target.value]))

      event.target.name === 'retail_brand' && 
      dispatch(category.getFilterItem('RETAIL_BRAND', [...retail_brand, event.target.value]))

      event.target.name === 'size' && 
      dispatch(category.getFilterItem('SIZE', [...size, event.target.value]))

      event.target.name === 'color' && 
      dispatch(category.getFilterItem('COLOR', [...color, event.target.value]))

      event.target.name === 'condition' && 
      dispatch(category.getFilterItem('CONDITION', [...condition, event.target.value]))
    } else {
      event.target.name === 'car_brand' && 
      dispatch(category.getFilterItem('CAR_BRAND', car_brand.filter(x => x !== event.target.value)))

      event.target.name === 'model_car' && 
      dispatch(category.getFilterItem('MODEL_CAR', model_car.filter(x => x !== event.target.value)))

      event.target.name === 'year_car' && 
      dispatch(category.getFilterItem('YEAR_CAR', year_car.filter(x => x !== event.target.value)))

      event.target.name === 'retail_brand' && 
      dispatch(category.getFilterItem('RETAIL_BRAND', retail_brand.filter(x => x !== event.target.value)))

      event.target.name === 'size' && 
      dispatch(category.getFilterItem('SIZE', size.filter(x => x !== event.target.value)))

      event.target.name === 'color' && 
      dispatch(category.getFilterItem('COLOR', color.filter(x => x !== event.target.value)))

      event.target.name === 'condition' && 
      dispatch(category.getFilterItem('CONDITION', condition.filter(x => x !== event.target.value)))
    }
  };

  return (
    props.data !== null &&
    props.data?.filter?.length > 0 &&
    props.data?.filter.map((x, i) =>
    // .filter(f => f.id === 2 || f.id === 4 || f.id === 6 || f.id === 7 || f.id === 8 || f.id === 9)
    // .map((x, i) =>
    <React.Fragment key={i}>
      {
        x?.id === 2 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={condition} onHandleChange={handleChange}/>
        :
        x?.id === 3 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={size} onHandleChange={handleChange}/>
        :
        x?.id === 6 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={color} onHandleChange={handleChange}/>
        :
        x?.id === 8 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={car_brand} onHandleChange={handleChange}/>
        :
        x?.id === 9 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={retail_brand} onHandleChange={handleChange}/>
        :
        x?.id === 10 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={model_car} onHandleChange={handleChange}/>
        :
        x?.id === 11 ?
        x?.value?.length > 0 &&
        <Components.BrandFilter data={x} checked={year_car} onHandleChange={handleChange}/>
        :
        <></>
      }
    </React.Fragment>
    // <React.Fragment key={i}>
    //   {
    //     x?.id === 2 ?
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={size !== null && size.includes(v?.value)} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //     :
    //     x?.id === 4 ?
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={checkedItem[v?.value]} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //     :
    //     x?.id === 6 ?
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={car_brand !== null && car_brand.includes(v?.value)} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //     :
    //     x?.id === 7 ?
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={checkedItem[v?.value]} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //     :
    //     x?.id === 8 ?
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={checkedItem[v?.value]} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //     :
    //     x?.id === 9 &&
    //     x?.value?.length > 0 &&
    //     <SideBarContainer>
    //       <div className="sidebar-wrap">
    //         <Accordion defaultExpanded={true}>
    //           <AccordionSummary
    //             expandIcon={<ExpandMore />}
    //             aria-controls="category-sidebar"
    //             id="category-sidebar"
    //           >
    //             <p className="title-btn">{x?.label}</p>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <div className="sidebar-list">
    //               {
    //                 x?.value?.map((v, index) => (
    //                   <FormControlLabel
    //                     control={<Checkbox className="sidebar-check" checked={checkedItem[v?.value]} onChange={handleChange} name={x?.field} value={v?.value} />}
    //                     label={v?.label}
    //                     key={index}
    //                     className="sidebar-check-label"
    //                   />
    //                 ))
    //               }
    //             </div>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //     </SideBarContainer>
    //   }
    // </React.Fragment>
    )
  )
}

export default BrandSidebar
