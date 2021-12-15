import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Components from "src/components"
import { Container, Row, Col } from "reactstrap"
import { Section } from "src/styles/components"
import { home, product } from "store/actions"
import { Skeleton } from "@material-ui/core"
import styled from 'styled-components'

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

const Main = () => {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  
  // get home data 
  const { home_data, isLoading } = useSelector(state => state.home)
  const { feature_data, isFeatureLoading } = useSelector(state => state.product)
  const [featureToShow, setfeatureToShow] = useState([])
  const [featureItem, setFeatureItem] = useState([])
  const [current, setCurrent] = useState(2)
  const [page, setPage] = useState(10)
  useEffect(() => {
    setCurrent(2)
    let lang = {
      code: langStore?.code
    }
    dispatch(home.getHome(lang))  
  }, [dispatch, langStore?.code])
  
  // get default feature data from home_data
  useEffect(() => {
    let featureData = home_data !== null && home_data?.filter(x => x?.list_type == 6)
    featureData && setfeatureToShow(featureData[0]?.data)
  }, [home_data])

  // spread feature data 
  const [viewMore, setViewMore] = useState(true)
  useEffect(() => {
    feature_data !== null && setFeatureItem(feature_data?.items)
    feature_data !== null && feature_data?.items?.length < 10 && setViewMore(false)
  }, [feature_data])

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
    dispatch(product.getFeatureProduct(postData, lang))
    
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
      <Components.FreeDeli />
      <>
        {
          home_data !== null &&
          home_data?.length > 0 ?
          <>
          {
            home_data?.map((x, i) =>
              <React.Fragment key={i}>
                {
                  x?.list_type == 0 ?
                  x?.data?.length > 0 &&
                  <Components.HomeCoupon data={x} loading={isLoading} />
                  :
                  x?.list_type == 1 ?
                  x?.data?.length > 0 &&
                  <Components.HomeBanner data={x} loading={isLoading} />
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
                    <Components.ProductCardSlider data={x} loading={isLoading} />
                  </Section>
                  :
                  x?.list_type == 3 ?
                  x?.data?.length > 0 &&
                  <Components.SubCategoryCard data={x} loading={isLoading} />
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
                    <Components.CategoryCardSlider data={x} loading={isLoading} />
                  </Section>
                  :
                  x?.list_type == 5 ?
                  x?.data?.length > 0 &&
                  <Section>
                    <Components.BranchCard data={x} loading={isLoading} />
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
                                  isFeatureLoading ?
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
                  <Section>
                    <div className="title-section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Components.Title props={{ title: x?.title, viewAll: `/product/lists?category_id=${x?.category_id}`, countDown: [x?.start_time, x?.end_time] }} />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <Components.ProductCardSlider data={x} loading={isLoading} />
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
                    <Components.PopularCard data={x} loading={isLoading} />
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
              isLoading &&
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
            }
          </>
        }
      </>

      {/* <Components.SubCategoryCard />

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.flashSales, viewAll: '/product/lists?category_id=298', countDown: 14400000 }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.ProductCardSlider data={wholesale_data} loading={isLoading} />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.categories }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.CategoryCardSlider />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.monthlyPromo, viewAll: '/product/lists?category_id=298' }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.ProductCardSlider data={wholesale_data} loading={isLoading} />
      </Section>

      <Section>
        <Components.BranchCard />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.bestSeller, viewAll: '/product/lists?category_id=298', icon: '/hot-icon.svg' }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.ProductCardSlider data={wholesale_data} loading={isLoading} />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.popularBrands }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.PopularCard data={popular_data?.brands} loading={isLoading} />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.newArrivals, viewAll: '/product/lists?category_id=298', icon: '/light-icon.svg' }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.ProductCardSlider data={wholesale_data} loading={isLoading} />
      </Section>

      <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.recommended, viewAll: '/product/lists?category_id=298' }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Components.ProductCardSlider data={wholesale_data} loading={isLoading} />
      </Section> */}

      {/* <Section>
        <div className="title-section">
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{ title: langData?.featuredProducts }} />
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
          feature_data?.data?.length < 10 || feature_data?.data?.length > 0 &&
          <Container>
            <Row>
              <Col md="12">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <Components.CustomButton
                    data={
                      isFeatureLoading ?
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
      </Section> */}
    </>
  );
}

export default Main