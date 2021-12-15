import React, { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Components from "src/components"
import { 
  Container, 
  Row, 
  Col,
} from "reactstrap"
import { Section, ProductListWrap } from "src/styles/components"
import { Skeleton } from "@material-ui/core"
import { product } from "store/actions"
import { ProductCardWrap } from "src/components/card/style/card-style"
import { NextSeo } from 'next-seo'

const scrollToRef = ref => window.scrollTo(0, ref.current?.offsetTop - 100)

const ProductCustom = ({title}) => {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { product_custom_data, isCustomLoading } = useSelector(state => state.product)

  const SEO = {
    title: title.replace(/-/g, " ") || 'Product Lists',
    openGraph: {
      title: title.replace(/-/g, " ") || 'Product Lists',
    },
    twitter: {
      handle: title.replace(/-/g, " ") || 'Product Lists',
      site: title.replace(/-/g, " ") || 'Product Lists',
    },
  }
  
  // get product by custom end point
  const [current, setCurrent] = useState(1)
  const [page, setPage] = useState(15)

  useEffect(() => {
    let type = title
    let lang = {
      code: langStore?.code
    }
    const postData = {
      pageSize: page,
      currentPage: current,
    }
    dispatch(product.getCustomProduct(type, postData, lang))
  }, [dispatch, langStore?.code, current, page, title])

  const styleSetting = {
    marginBottom: "45px",
    transition: "all .2s",
  }

  // Pagination 
  const scrollRef = useRef(null)
  
  const onChangePaginate = data => {
    setCurrent(data)
    scrollToRef(scrollRef)
  }
  
  return ( 
    <>
      <NextSeo {...SEO} />
      <Components.Breadcrumb props={
        [
          {
            title: 'Home',
            link: '/'
          },
          {
            title: title.replace(/-/g, " ") || 'Product Lists'
          }
        ]
      } 
      />

      <Section>
        <Container>
            <Row>
              <Col lg="12">
                <ProductListWrap>
                  <div style={{marginBottom: '30px'}}>
                    <Row>
                      <Col md="12">
                        <Components.Title props={{title: title.replace(/-/g, " ") || 'Product Lists'}} />
                      </Col> 
                    </Row>
                  </div>
                  {
                    product_custom_data !== null &&
                    product_custom_data?.items?.length > 0 ?                  
                    <>
                      <Row>
                        {
                          product_custom_data?.items?.map((x, i) => 
                            <Components.ProductCard loading={isCustomLoading} data={x} key={i} {...styleSetting} class={'no-slider-col-5'} /> 
                          )
                        }
                      </Row>
                      {
                        product_custom_data !== null &&
                        product_custom_data?.total_count > 15 &&
                        <Row>
                          <Components.Pagination 
                            onChange={onChangePaginate}
                            current={current}
                            total={product_custom_data?.total_count}
                            defaultPageSize={page}
                          />
                        </Row>
                      }
                    </>
                    :
                    isCustomLoading ?
                    <Row>
                    {
                      Array(8).fill().map((x, i) =>
                        <ProductCardWrap style={{width: '20%'}} key={i}>
                          <div className="product-card-link">
                            <div className="img-wrap">
                              <Skeleton 
                                variant="rectangular" 
                                width={170} 
                                height={170} 
                              />
                            </div>
                            <div className="title-wrap">
                              <Skeleton variant="text" />
                            </div>
                            <div className="card-bottom">
                              <Skeleton variant="text" width="60%" />
                            </div>
                          </div>
                        </ProductCardWrap>
                      )
                    }
                    </Row>
                    :
                    <>
                      <Row>     
                        <Col lg="12">         
                          <Components.Result type="product-card">
                            <img src="/no-result.svg" alt='No Result' />
                            <h2 className="title">No Items Found</h2>
                            <p className="caption">Currently, there are no items here.</p>
                          </Components.Result>
                        </Col>
                      </Row>    
                    </>
                    }
                </ProductListWrap>
              </Col>
            </Row>
        </Container>
      </Section>
    </>
  );
}

export default ProductCustom

export async function getServerSideProps(context) {
  const { query } = context
  const title = query.key
  return {
    props: {
      title
    }
  }
}