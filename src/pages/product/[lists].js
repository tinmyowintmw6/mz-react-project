import React, { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Components from "src/components"
import { 
  Container, 
  Row, 
  Col, 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
} from "reactstrap"
import { Section, Sorting, ProductListWrap, CustomDrawer, ProductSidebar } from "src/styles/components"
import { colors } from "src/styles/constants"
import { IconButton, Skeleton } from "@material-ui/core"
import { Tune } from '@material-ui/icons'
import { category, product } from "store/actions"
import { useRouter } from 'next/router'
import { ProductCardWrap } from "src/components/card/style/card-style"
import { NextSeo } from 'next-seo'
import serviceController, { routes } from 'controller'

const scrollToRef = ref => window.scrollTo(0, ref.current?.offsetTop - 100)

let timeout;

const Product = ({productList}) => {
  // console.log(`productList`, productList?.name)
  const router = useRouter();
  const [flashSale, setFlashSale] = useState(false)
  const [grid, setGrid] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { product_search_data, isSearchLoading } = useSelector(state => state.product)
  const { filter_data, category_data, car_brand, model_car, year_car, retail_brand, size, color, condition, sort_order, product_price, isFilterLoading } = useSelector(state => state.category)

  // get sidebar category 
  const [childCategory, setChildCategory] = useState([])
  const [cateTitle, setCateTitle] = useState(null)
  const SEO = {
    title: productList?.name || "Product Lists",
    openGraph: {
      title: productList?.name || "Product Lists",
    },
    twitter: {
      handle: productList?.name || "Product Lists",
      site: productList?.name || "Product Lists",
    },
  }
  
  useEffect(() => {
    if (!router.isReady || category_data === null) {
      return
    };
    if (router.query.lists === 'lists') {
      let paramCateId = router.query.category_id
      let getCateChild = paramCateId && category_data?.children_data?.filter(x => x?.id === +paramCateId)    
      let filterCateChild = category_data?.children_data?.map(x => x?.children_data)?.flat()
      let getSubCateChild = paramCateId && filterCateChild?.filter(x => x?.id === +paramCateId)
      let filterSubCateChild = paramCateId && filterCateChild && filterCateChild?.map(x => x?.children_data)?.flat()?.filter(i => i?.id === +paramCateId)
      
      // get child category 
      if (getCateChild && getCateChild?.length > 0) {
        setCateTitle(getCateChild[0]?.name)
        setChildCategory(getCateChild[0]?.children_data)
        // set breadcrum for detail 
        dispatch(category.getFilterItem('CATE_BREADCRUM', [{category_id: paramCateId}, {category_name: getCateChild[0]?.name}]))
      } else if (getSubCateChild && getSubCateChild?.length > 0) {
        setCateTitle(getSubCateChild[0]?.name)
        setChildCategory(getSubCateChild[0]?.children_data)
        // set breadcrum for detail 
        dispatch(category.getFilterItem('CATE_BREADCRUM', [{category_id: paramCateId}, {category_name: getSubCateChild[0]?.name}]))
      } else {
        setCateTitle(filterSubCateChild[0]?.name)
        setChildCategory([])
        // set breadcrum for detail 
        dispatch(category.getFilterItem('CATE_BREADCRUM', [{category_id: paramCateId}, {category_name: filterSubCateChild[0]?.name}]))
      }
    }
  }, [dispatch, category_data, router])
  
  // get product list 
  const [current, setCurrent] = useState(1)
  const [page, setPage] = useState(12)
  const [cateId, setCateId] = useState(null)
  useEffect(() => {
    if (!router.isReady) {
      return
    };
    if (router.query.lists === 'lists') {
      let paramCateId = router.query.category_id
      // reset pagin is cate id is not the same 
      setCateId(paramCateId)
      cateId !== paramCateId && setCurrent(1)
      // end reset

      let lang = {
        code: langStore?.code
      }
      const cate_id = +paramCateId 
      const sortOrder = sort_order?.length > 0 && [sort_order[1], sort_order[0]]
      const postData = {
        pageSize: page,
        currentPage: current,
        category_id: cate_id,
        year_car: year_car?.toString() || '',
        model_car: model_car?.toString() || '',
        car_brand: car_brand?.toString() || '',
        retail_brand: retail_brand?.toString() || '',
        size: size?.toString() || '',
        color: color?.toString() || '',
        condition: condition?.toString() || '',
        sort_order: sortOrder && sortOrder?.toString() || '',
        product_price: product_price?.toString() || ''
      }
      dispatch(product.getSearchProduct(postData, lang))
    }
  }, [router, dispatch, langStore?.code, current, page, year_car, model_car, car_brand, retail_brand, size, color, condition, sort_order, product_price, cateId])

  // get filter type
  useEffect(() => {
    if (!router.isReady) {
      return
    };
    if (router.query.lists === 'lists') {
      let paramCateId = router.query.category_id
      let lang = {
        code: langStore?.code
      }
      const cate_id = +paramCateId 
      dispatch(category.getFilterType(cate_id, lang))
    }
  }, [router, dispatch, langStore?.code])

  // clean filter 
  useEffect(() => {
    if (!router.isReady) {
      return
    };
    if (router.query.lists === 'lists') {
      dispatch(category.getFilterItem('RESET_FILTER', null))
    }
  }, [dispatch, router])

  const styleSetting = {
    marginBottom: "45px",
    transition: "all .2s",
  }

  // get default sort order 
  // useEffect(() => {
  //   let defaultSorting = filter_data !== null && filter_data?.order?.length > 0 && filter_data?.order[0]
  //   dispatch(category.getFilterItem('SORT_ORDER', [defaultSorting?.condition_type, defaultSorting?.field, defaultSorting?.text]))
  // }, [dispatch, filter_data])

  // get default min max price for filter 
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return
  //   };
  //   if (router.query.lists === 'lists') {
  //     let getMinMaxPrice = filter_data !== null && filter_data?.filter?.length > 0 && filter_data?.filter.filter(x => x.id === 10).map(x => [x?.["min-price"], x?.["max-price"]])
  //     // getMinMaxPrice && dispatch(category.getFilterItem('MIN_MAX_PRICE', [getMinMaxPrice[0]]))
  //     getMinMaxPrice && dispatch(category.getFilterItem('PRODUCT_PRICE', getMinMaxPrice[0]))
  //     getMinMaxPrice && dispatch(category.getFilterItem('MIN_MAX_PRICE', getMinMaxPrice[0]))
  //   }
  // }, [dispatch, filter_data, router])

  const minDistance = 1000;
  const [value, setValue] = useState([])
  useEffect(() => {
    if (!router.isReady) {
      return
    };
    if (router.query.lists === 'lists') {
      let getPrice = filter_data !== null && filter_data?.filter?.length > 0 && filter_data?.filter.filter(x => x.id === 12)
      getPrice && setValue([getPrice[0]?.["min-price"], getPrice[0]?.["max-price"]])
    }
  }, [filter_data, router])

  useEffect(() => {
    if (!router.isReady) {
      return
    };
    if (router.query.lists === 'lists') {
      dispatch(category.getFilterItem('PRODUCT_PRICE', value))
    }
  }, [dispatch, value, router])
  
  const handleChange = (event, newValue, activeThumb) => {
    timeout && clearTimeout(timeout)
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      timeout = setTimeout(() => {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      }, 200)
    } else {
      timeout = setTimeout(() => {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      }, 200)
    }
  };

  // handle sorting 
  // const [sort, setSort] = useState([])
  const handleSort = (type, field, text) => {
    dispatch(category.getFilterItem('SORT_ORDER', [type, field, text]))
  }

  // Pagination 
  const scrollRef = useRef(null)
  const onChangePaginate = data => {
    setCurrent(data)
    scrollToRef(scrollRef)
  }

  // handle drawer 
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
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
            title: productList?.name || "Product Lists"
          }
        ]
      } 
      />

      {
        flashSale &&
        <>
          <div style={{background: colors.grayBg, paddingTop: '30px', paddingBottom: '10px'}}>
            <Container>
              <Row>
                <Col md='12'>
                  <Components.Title props={{title: langData?.flashSales, countDown: 14400000, upComing: true}} />
                </Col>
              </Row>
            </Container>
          </div>

          <Components.HomeBanner />
        </>
      }

      <Section>
        <Container>
            <Row>
              <Col xl="3">
                <ProductSidebar>
                  <Components.CategorySidebar data={childCategory} />    
                  {
                    filter_data !== null &&
                    filter_data?.filter?.length > 0 ?
                    <>           
                      <Components.BrandSidebar data={filter_data} />
                      {
                        filter_data?.filter.filter(x => x.id === 12).map((price, i) =>
                          <Components.RangeSidebar data={price} value={value} key={i} onHandleChange={handleChange} /> 
                        )
                      }
                    </>
                    :
                    isFilterLoading ?
                    <>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </>
                    :
                    <Components.Result>
                      <img src="/no_data.svg" alt='no data' />
                      <p className="caption">No Data</p>
                    </Components.Result>
                  }                  
                </ProductSidebar>
              </Col>
              <Col xl="9">
                <ProductListWrap>
                  {
                    product_search_data !== null &&
                    <div style={{marginBottom: '30px'}}>
                      <Row>
                        <Col md="12">
                          {
                            // isSearchLoading ?
                            // <Skeleton variant="text" width={200}/>
                            // :
                            <Components.Title props={{title: productList?.name || "Product Lists"}} />
                          }
                        </Col> 
                      </Row>
                    </div>
                  }
                  {
                    product_search_data !== null &&
                    product_search_data?.items?.length > 0 ?                  
                    <>
                      <Sorting>
                        <div className="item">                  
                          <span>({product_search_data?.total_count}) Items</span>
                        </div>
                        <div className="grid">
                          <button className={`grid-item ${grid === '50%' ? 'active' : ''}`} onClick={() => setGrid("50%")}>
                            <span></span>
                            <span></span>
                          </button>
                          <button className={`grid-item ${grid === '33.33%' ? 'active' : ''}`} onClick={() => setGrid("33.33%")}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </button>
                          <button className={`grid-item ${grid === '25%' || grid === null ? 'active' : ''}`} onClick={() => setGrid("25%")}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </button>
                        </div>
                        {
                          filter_data !== null &&
                          filter_data?.order?.length > 0 &&
                          <div className="sort-wrap">
                            <div className="sort-item">
                              {/* <p>Sort by:</p> */}
                              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle>
                                  {sort_order?.length > 0 ? sort_order[2] : "Sort By"}
                                </DropdownToggle>
                                <DropdownMenu> 
                                  {
                                    filter_data?.order?.map((x, i) =>
                                      <DropdownItem key={i} onClick={() => handleSort(x?.condition_type, x?.field, x?.text)}>{x?.text}</DropdownItem>   
                                    )
                                  }
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        }
                        <div className="toggleDrawer">
                          <IconButton aria-label="Tune" component="span" onClick={toggleDrawer('left', true)}>
                            <Tune />
                          </IconButton>
                          <CustomDrawer
                            anchor={'left'}
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                            className="drawer-wrap"
                          >
                            <div 
                              className="drawer-box"
                              onClick={toggleDrawer('left', false)}
                              onKeyDown={toggleDrawer('left', false)}
                            >
                              <Components.CategorySidebar data={childCategory} />    
                              {
                                filter_data !== null &&
                                filter_data?.filter?.length > 0 ?
                                <>           
                                  <Components.BrandSidebar data={filter_data} />
                                  {
                                    filter_data?.filter.filter(x => x.id === 12).map((price, i) =>
                                      <Components.RangeSidebar data={price} value={value} key={i} onHandleChange={handleChange} /> 
                                    )
                                  }
                                </>
                                :
                                isFilterLoading ?
                                <>
                                  <Skeleton variant="text" />
                                  <Skeleton variant="text" />
                                  <Skeleton variant="text" />
                                  <Skeleton variant="text" />
                                  <Skeleton variant="text" />
                                </>
                                :
                                <Components.Result>
                                  <img src="/no_data.svg" alt='no data' />
                                  <p className="caption">No Data</p>
                                </Components.Result>
                              }
                            </div>
                          </CustomDrawer>
                        </div>
                      </Sorting>
                      
                      <Row>
                        {
                          product_search_data?.items?.map((x, i) => 
                            <Components.ProductCard loading={isSearchLoading} data={x} key={i} {...styleSetting} class={'no-slider-col-4'} width={grid} /> 
                          )
                        }
                      </Row>
                      {
                        product_search_data !== null &&
                        product_search_data?.total_count > 12 &&
                        <Row>
                          <Components.Pagination 
                            onChange={onChangePaginate}
                            current={current}
                            total={product_search_data?.total_count}
                            defaultPageSize={page}
                          />
                        </Row>
                      }
                    </>
                    :
                    isSearchLoading ?
                    <Row>
                    {
                      Array(8).fill().map((x, i) =>
                        <ProductCardWrap className="no-slider-col-4" key={i}>
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

export default Product

export async function getServerSideProps(context) {
  const { query } = context
  const category_id = query.category_id
  // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_EN}V2/products/filters?category_id=${category_id}`)
  const response = await serviceController(`${routes.getSearchProduct}?category_id=${category_id}&currentPage=1&pageSize=1`)
  // const data = await response.json()
  return {
    props: {
      productList: response?.data
    }
  }
}