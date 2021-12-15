import React from 'react'
import Slider from 'react-slick'
import { BannerSection } from './style/banner-style'
import Components from "src/components"
import { Container, Row } from 'reactstrap'
import Link from 'next/link'
import { Skeleton } from '@material-ui/core'

const HomeBanner = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  }

  return (
    <BannerSection>
      <Container className="banner-container">
        <Row>
        {
          props?.loading ?
          <Skeleton height={150} variant="rectangular" />
          :
          <Slider {...settings}>
            { 
              props?.data?.data?.length > 0 &&
              props?.data?.data?.map((slider_img, key) => (
                <React.Fragment key={key}>
                  {
                    slider_img?.type == 0 ?
                    <a className="img-link" href={`${slider_img?.var_data}`} target="_blank"  rel="noreferrer">
                      <Components.ImgWithFallback 
                        src={`${(slider_img?.image_url)}`} 
                        width={1200} 
                        height={344} 
                        layout="responsive"
                        alt={slider_img?.title}
                        className="img-item"
                        type="banner"
                      />
                    </a>
                    :
                    <Link 
                      href={
                        slider_img?.type == 1 ?
                        `/product/promotion/${slider_img?.var_data}` :  
                        slider_img?.type == 2 ?
                        `/product/detail/${slider_img?.var_data}` :
                        slider_img?.type == 5 ?
                        `/product/brand/${slider_img?.var_data}` :
                        slider_img?.type == 6 ?
                        `/product/type/${slider_img?.var_data}` :
                        `/product/lists?category_id=${slider_img?.var_data}`
                      }
                      passHref
                    >
                      <a className="img-link">
                        <Components.ImgWithFallback 
                          src={`${(slider_img?.image_url)}`} 
                          width={1200} 
                          height={344} 
                          layout="responsive"
                          alt={slider_img?.title}
                          className="img-item"
                          type="banner"
                        />
                      </a>
                    </Link>
                  }
                </React.Fragment>
              ))
            }
          </Slider>
        }
        </Row>
      </Container>
    </BannerSection>
  )
}

export default HomeBanner
