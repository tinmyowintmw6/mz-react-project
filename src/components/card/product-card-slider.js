import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import Components from "src/components"
import styled from 'styled-components'
import { Skeleton } from '@material-ui/core'

const ProductCardSliderContainer = styled.div`
  .product-card-skeleton {
    margin-left: 12px;
    margin-right: 12px;
    width: 230px;
    flex: none;
    @media (max-width: 991px) {
      width: 216px;
    }
    @media (max-width: 767px) {
      width: 145px;
    }
  }
`

const ProductCardSlider = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2.5,
        }
      }
    ]
  }

  const styleSetting = {
    padding: '0 12px',
  }
  
  return (
    <ProductCardSliderContainer>
      <Container>
        <Row style={{marginLeft: '-24px', marginRight: '-24px'}}>
          {
            props?.loading ?
            <div style={{display: 'flex', overflow: 'hidden'}}>
              {
                Array(6).fill().map((x, i) =>
                  <div className="product-card-skeleton" key={i}>
                    <Skeleton 
                      variant="rectangular" 
                      height={150} 
                    />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                  </div>
                )
              }
            </div>
            :
            <Slider {...settings}>
              {
                props?.data?.data?.length > 0 &&
                props?.data?.data?.map((x, i) => 
                  <Components.ProductCard data={x} key={i} {...styleSetting} />
                )
              }
            </Slider>
          }
        </Row>
      </Container>
    </ProductCardSliderContainer> 
  )
}

export default ProductCardSlider