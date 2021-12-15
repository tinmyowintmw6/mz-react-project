import React from 'react'
import { CategoryWrap } from './style/card-style'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import Components from "src/components"
import { Skeleton } from '@material-ui/core'

const CategoryCardSlider = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 5,
    autoplay: false,
    rows: 2,
    slidesPerRow: 1,
    infinite: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1.5,
        }
      }
    ]
  }

  return (
    <>
      <CategoryWrap>
        <Container>
          <Row>
            {
              props?.loading ?
              <>
                <div style={{display: 'flex', overflow: 'hidden'}}>
                  {
                    Array(6).fill().map((x, i) =>
                      <div className="category-card-skeleton" key={i}>
                        <Skeleton 
                          variant="rectangular" 
                          height={120} 
                        />
                      </div>
                    )
                  }
                </div>
                <div style={{display: 'flex', overflow: 'hidden'}}>
                  {
                    Array(6).fill().map((x, i) =>
                      <div className="category-card-skeleton" key={i}>
                        <Skeleton 
                          variant="rectangular" 
                          height={120} 
                        />
                      </div>
                    )
                  }
                </div>
              </>
              :
              <Slider {...settings}>
                {
                  props?.data?.data?.length > 0 &&
                  props?.data?.data?.map((x, i) => 
                    <Components.CategoryCard data={x} key={i} /> 
                  )
                }
              </Slider>
            }
          </Row>
        </Container>
      </CategoryWrap>
    </>
  )
}

export default CategoryCardSlider