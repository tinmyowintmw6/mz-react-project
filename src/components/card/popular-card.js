import React from 'react'
import { PopularWrap } from './style/card-style'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import Components from "src/components"
import { Skeleton } from '@material-ui/core'

const PopularCard = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
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

  return (
    <>    
      <PopularWrap>
        <Container>
          <Row>
            {
              props?.loading ?
              <div style={{display: 'flex', overflow: 'hidden'}}>
                {
                  Array(5).fill().map((x, i) =>
                    <div className="popular-card-skeleton" key={i}>
                      <Skeleton 
                        variant="rectangular" 
                        height={190} 
                      />
                    </div>
                  )
                }
              </div>
              :
              <Slider {...settings}>
                {
                  props?.data?.data?.length > 0 &&
                  props?.data?.data?.map((x, i) => 
                    <Col className="popular-col" key={i}>
                      {
                        x?.type == 0 ?
                        <a className="popular-link" href={`${x?.var_data}`} target="_blank" rel="noreferrer">
                          <div className="popular-card">
                            <Components.ImgWithFallback 
                              src={`${(x?.image_url)}`} 
                              width={285} 
                              height={190} 
                              alt={x?.name}
                              layout="responsive"
                            />
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
                          <a className="popular-link">
                            <div className="popular-card">
                              <Components.ImgWithFallback 
                                src={`${(x?.image_url)}`} 
                                width={285} 
                                height={190} 
                                alt={x?.name}
                                layout="responsive"
                              />
                            </div>
                          </a>
                        </Link>
                      }
                    </Col>
                  )
                }
              </Slider>
            }
          </Row>
        </Container>
      </PopularWrap>
    </>
  )
}

export default PopularCard