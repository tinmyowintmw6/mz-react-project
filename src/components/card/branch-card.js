import React from 'react'
import { BranchWrap } from './style/card-style'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import Components from "src/components"
import { Skeleton } from '@material-ui/core'

const BranchCard = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 5,
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
      <BranchWrap>
        <Container>
          <Row>
            {
              props?.loading ?
              <div style={{display: 'flex', overflow: 'hidden'}}>
                {
                  Array(6).fill().map((x, i) =>
                    <div className="branch-card-skeleton" key={i}>
                      <Skeleton 
                        variant="rectangular" 
                        height={340} 
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
                    <Col className="branch-col" key={i}>
                      <>
                        {
                          x?.type == 0 ?
                          <a className="branch-link" href={`${x?.var_data}`} target="_blank" rel="noreferrer">
                            <div className="branch-card">
                              <Components.ImgWithFallback 
                                src={`${(x?.image_url)}`} 
                                width={224} 
                                height={340} 
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
                            <a className="branch-link">
                              <div className="branch-card">
                                <Components.ImgWithFallback 
                                  src={`${(x?.image_url)}`} 
                                  width={224} 
                                  height={340} 
                                  alt={x?.name}
                                  layout="responsive"
                                />
                              </div>
                            </a>
                          </Link>
                        }
                      </>
                    </Col>
                  )
                }
              </Slider>
            }
          </Row>
        </Container>
      </BranchWrap>
    </>
  )
}

export default BranchCard