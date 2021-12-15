import React from 'react'
import { CategoryWrap } from './style/card-style'
import Link from 'next/link'
import Components from "src/components"
import { Skeleton } from "@material-ui/core"

const CategoryCard = (props) => {
  return (
    <>
      <CategoryWrap className={`${props?.class}`}>
        {
          props?.loading ?
          <div className="category-col">
            <div className="category-link">
              <div className="category-card">
                <Skeleton 
                  variant="rectangular" 
                  width={130} 
                  height={80} 
                />
                {/* <div className="title-wrap">
                  <h2 className="title">
                    <Skeleton variant="text" />
                  </h2>
                </div> */}
              </div>
            </div>
          </div>
          :
          <div className="category-col">
            {
              props?.data?.type == 0 ?
              <a className="category-link" href={`${props?.data?.var_data}`} target="_blank" rel="noreferrer">
                <div className="category-card">
                  <Components.ImgWithFallback 
                    src={`${(props?.data?.image_url)}`} 
                    width={130} 
                    height={80} 
                    alt={props?.data?.name}
                  />
                  <div className="title-wrap">
                    <h2 className="title">{props?.data?.name}</h2>
                  </div>
                </div>
              </a>
              :
              <Link 
                href={
                  props?.data?.type == 1 ?
                  `/product/promotion/${props?.data?.var_data}` :  
                  props?.data?.type == 2 ?
                  `/product/detail/${props?.data?.var_data}` :
                  props?.data?.type == 5 ?
                  `/product/brand/${props?.data?.var_data}` :
                  props?.data?.type == 6 ?
                  `/product/type/${props?.data?.var_data}` :
                  `/product/lists?category_id=${props?.data?.var_data}`
                } 
                passHref
              >
                <a className="category-link">
                  <div className="category-card">
                    <Components.ImgWithFallback 
                      src={`${(props?.data?.image_url)}`} 
                      width={130} 
                      height={80} 
                      alt={props?.data?.name}
                    />
                    <div className="title-wrap">
                      <h2 className="title">{props?.data?.name}</h2>
                    </div>
                  </div>
                </a>
              </Link>
            }
          </div>
        }
      </CategoryWrap>
    </>
  )
}

export default CategoryCard