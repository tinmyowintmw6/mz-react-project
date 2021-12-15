import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideBarContainer} from './style/sidebar-style'
import Link from 'next/link'
import { ArrowRight, ExpandMore } from '@material-ui/icons'
import { 
  Button, 
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core'
import { category } from 'store/actions'

const CategorySidebar = (props) => {
  const dispatch = useDispatch()
  // const { min_max_price } = useSelector(state => state.category)
  const resetFilter = () => {
    dispatch(category.getFilterItem('RESET_FILTER', null))
  }
  return (
    props?.data?.length > 0 &&
    <SideBarContainer>
      <div className="sidebar-wrap">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="category-sidebar"
            id="category-sidebar"
          >
            <p className="title-btn">Categories</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="sidebar-list">
              {
                props?.data?.map((x, i) =>
                  <Button key={i} className="sidebar-btn" onClick={() => resetFilter()}>
                    <Link href={`/product/lists?category_id=${x?.id}`} passHref>
                      <a className="cate-item">
                        <ArrowRight />
                        <span className="cate-name">{x?.name}</span>
                      </a>
                    </Link>
                  </Button>
                )
              }
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </SideBarContainer>
  )
}

export default CategorySidebar
