import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { SubCategoryWrap } from './style/card-style'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import EllipsisText from "react-ellipsis-text"
import Slider from 'react-slick'
import { IconButton, Skeleton } from '@material-ui/core'
import Components from "src/components"

const SubCategoryCard = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 5.5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 3.5,
        }
      }
    ]
  }

  return (
    <SubCategoryWrap>
      <Container>
        <Row>
          <Slider {...settings}>
            {
              props?.loading ?
              Array(7).fill().map((x, i) => 
                <Col className="category-col" key={i}>
                  <div className="category-link">
                    <div className="category-card">
                      <Skeleton height={44} width={44} variant="circular" style={{marginBottom: '20px'}} />
                      <Skeleton width="100%" variant="text" />
                    </div>
                  </div>
                </Col>
              )
              :
              props?.data?.data?.length > 0 &&
              props?.data?.data?.map((x, i) => 
                <Col className="category-col" key={i}>
                  {
                    x?.type == 0 ?
                    <a className="category-link" href={`${x?.var_data}`} target="_blank" rel="noreferrer">
                      <div className="category-card">
                        <div className="img-wrap">
                          <IconButton>
                            <Components.ImgWithFallback 
                              src={`${(x?.image_url)}`} 
                              width={20}
                              height={20} 
                              alt={x?.name}
                              type="subcate"
                            />
                          </IconButton>
                        </div>
                        <div className="title-wrap">
                          <h2 className="title"><EllipsisText text={x?.name} length={18} /></h2>
                        </div>
                      </div>
                    </a>
                    :
                    <Link
                      href={
                        x?.type == 1 ?
                        `/product/promotion/${x?.var_data}` :  
                        x?.type == 2 ?
                        `/product/detail/${x?.var_data}` :
                        x?.type == 5 ?
                        `/product/brand/${x?.var_data}` :
                        x?.type == 6 ?
                        `/product/type/${x?.var_data}` :
                        `/product/lists?category_id=${x?.var_data}`
                      }
                      passHref
                    >
                      <a className="category-link">
                        <div className="category-card">
                          <div className="img-wrap">
                            <IconButton>
                              <Components.ImgWithFallback 
                                src={`${(x?.image_url)}`} 
                                width={20}
                                height={20} 
                                alt={x?.name}
                                type="subcate"
                              />
                            </IconButton>
                          </div>
                          <div className="title-wrap">
                            <h2 className="title"><EllipsisText text={x?.name} length={18} /></h2>
                          </div>
                        </div>
                      </a>
                    </Link>
                  }
                </Col>
              )
            }
          </Slider>
        </Row>
      </Container>
    </SubCategoryWrap>
  )
}

export default SubCategoryCard