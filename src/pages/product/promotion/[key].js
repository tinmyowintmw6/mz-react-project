import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Components from "src/components"
import { 
  Container, 
  Row, 
  Col,
} from "reactstrap"
import { Skeleton } from "@material-ui/core"
import { Section } from "src/styles/components"
import { product } from "store/actions"
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const ProductSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  @media (max-width: 991px) {
    width: 33.33%;
  }
  @media (max-width: 767px) {
    width: 50%
  }
`

const ProductPromotion = ({title}) => {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { product_promotion_data, isPromotionLoading, promo_feature_data, isPromoFeatureLoading } = useSelector(state => state.product)
  const { free_deli } = useSelector(state => state.home)

  const SEO = {
    title: title.replace(/-/g, " ") || 'Promotion',
    openGraph: {
      title: title.replace(/-/g, " ") || 'Promotion',
    },
    twitter: {
      handle: title.replace(/-/g, " ") || 'Promotion',
      site: title.replace(/-/g, " ") || 'Promotion',
    },
  }

  // get promo feature data 
  const [featureToShow, setfeatureToShow] = useState([])
  const [featureItem, setFeatureItem] = useState([])
  const [current, setCurrent] = useState(2)
  const [page, setPage] = useState(10)

  useEffect(() => {
    setCurrent(2)
    let lang = {
      code: langStore?.code
    }
    dispatch(product.getPromotionProduct(lang))
  }, [dispatch, langStore?.code])
  
  // get default feature data from product_promotion_data
  useEffect(() => {
    let featureData = product_promotion_data !== null && product_promotion_data?.filter(x => x?.list_type == 6)
    featureData && setfeatureToShow(featureData[0]?.data)
  }, [product_promotion_data])

  // spread feature data 
  const [viewMore, setViewMore] = useState(true)
  useEffect(() => {
    promo_feature_data !== null && setFeatureItem(promo_feature_data?.items)
    promo_feature_data !== null && promo_feature_data?.items?.length < 10 && setViewMore(false)
  }, [promo_feature_data])

  useEffect(() => {
    setfeatureToShow(featureToShow => [...featureToShow, ...featureItem])
  }, [featureItem])

  const getFeatureData = () => {
    let lang = {
      code: langStore?.code
    }
    const postData = {
      pageSize: page,
      currentPage: current
    }
    dispatch(product.getPromoFeatureProduct(postData, lang))
    
  }

  const handleViewMore = async (data) => {
    setCurrent(data + 1)
    getFeatureData()
  }

  const styleSetting = {
    marginBottom: "45px",
  }

  return ( 
    <>
      <NextSeo {...SEO} />
      <Components.FreeDeli />
      <>
        {
          product_promotion_data !== null &&
          product_promotion_data?.length > 0 ?
          <>
          {
            product_promotion_data?.map((x, i) =>
              <React.Fragment key={i}>
                {
                  x?.list_type == 0 ?
                  x?.data?.length > 0 &&
                  <Components.HomeCoupon data={x} loading={isPromotionLoading} />
                  :
                  x?.list_type == 1 ?
                  x?.data?.length > 0 &&
                  <Components.HomeBanner data={x} loading={isPromotionLoading} />
                  :
                  x?.list_type == 2 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title, viewAll: `/product/lists?category_id=${x?.category_id}` }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Components.ProductCardSlider data={x} loading={isPromotionLoading} />
                  </Section>
                  :
                  x?.list_type == 3 ?
                  x?.data?.length > 0 &&
                  <Components.SubCategoryCard data={x} loading={isPromotionLoading} />
                  :
                  x?.list_type == 4 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Components.CategoryCardSlider data={x} loading={isPromotionLoading} />
                  </Section>
                  :
                  x?.list_type == 5 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <Components.BranchCard data={x} loading={isPromotionLoading} />
                  </Section>
                  :
                  x?.list_type == 6 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Container>
                      <Row>
                        {
                          featureToShow?.map((x, i) =>
                            <Components.ProductCard data={x} key={i} {...styleSetting} class={'no-slider-col-5'} />
                          )
                        }
                      </Row>
                    </Container>
                    {
                      viewMore &&
                      <Container>
                        <Row>
                          <Col md="12">
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                              <Components.CustomButton
                                data={
                                  isPromoFeatureLoading ?
                                    {
                                      size: 'md',
                                      color: 'transparent',
                                      text: 'View More',
                                      disabled: true,
                                      loading: true
                                    }
                                    :
                                    {
                                      size: 'md',
                                      color: 'transparent',
                                      text: 'View More'
                                    }
                                }
                                onClick={() => handleViewMore(current)}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    }
                  </Section>
                  :
                  x?.list_type == 8 ?
                  x?.data?.length > 0 &&
                  <Section style={
                    free_deli === 'show' ?
                    {
                      display: 'block',
                    }
                    :
                    {
                      display: 'none'
                    }
                  }
                  >
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title, viewAll: `/product/lists?category_id=${x?.category_id}`, countDown: [x?.start_time, x?.end_time] }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Components.ProductCardSlider data={x} loading={isPromotionLoading} />
                  </Section>
                  :
                  x?.list_type == 10 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Components.PopularCard data={x} loading={isPromotionLoading} />
                  </Section>
                  :
                  <></>
                }
              </React.Fragment>
            )
          }
          </>
          :
          <>
            {
              isPromotionLoading ?
              <>
                <Section>
                  <Container>
                    <Row>
                      <Col md="12">
                        <Skeleton height={150} variant="rectangular" />
                      </Col>
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(6).fill().map((x, i) => 
                          <Col md="2" xs="4" key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Skeleton height={44} width={44} variant="circular" style={{marginBottom: '20px'}} />
                            <Skeleton width="100%" variant="text" />
                          </Col>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(5).fill().map((x, i) => 
                          <ProductSkeleton key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="200px" 
                              width="100%"
                            /><br/>
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                          </ProductSkeleton>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(3).fill().map((x, i) => 
                          <Col md="4" xs="12" key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="150px" 
                            />
                          </Col>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(5).fill().map((x, i) => 
                          <ProductSkeleton key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="200px" 
                              width="100%"
                            /><br/>
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                          </ProductSkeleton>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(4).fill().map((x, i) => 
                          <Col md="3" xs="6" key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="180px" 
                            />
                          </Col>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(5).fill().map((x, i) => 
                          <ProductSkeleton key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="200px" 
                              width="100%"
                            /><br/>
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                          </ProductSkeleton>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
                <Section>
                  <Container>
                    <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                      {
                        Array(5).fill().map((x, i) => 
                          <ProductSkeleton key={i}>
                            <Skeleton 
                              variant="rectangular" 
                              height="200px" 
                              width="100%"
                            /><br/>
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                          </ProductSkeleton>
                        )
                      }
                    </Row>
                  </Container>
                </Section>
              </>
              :
              <Section>
                <Container>
                  <Row>     
                    <Col lg="12">         
                      <Components.Result type="product-card">
                        <img src="/no-result.svg" alt='No Result' />
                        <h2 className="title">No Items Found</h2>
                        <p className="caption">Currently, there are no items here.</p>
                      </Components.Result>
                    </Col>
                  </Row>
                </Container>
              </Section>
            }
          </>
        }
      </>
    </>
  );
}

export default ProductPromotion

export async function getServerSideProps(context) {
  const { query } = context
  const title = query.key
  return {
    props: {
      title
    }
  }
}