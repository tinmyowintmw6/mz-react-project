import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import Components from "src/components"
import { useDispatch, useSelector } from 'react-redux'
import { Primary, Secondary, MobileNavigation } from './style/headerStyle'
import { translation, auth, category, ecommerce, account } from 'store/actions'
import { my, en } from 'src/locales'
import {
  Container,
  Row,
  Col,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu,
} from 'reactstrap';
import { AccountCircle, Favorite, ShoppingCart, Search, ArrowBack, LocalActivity } from '@material-ui/icons'
import { IconButton, Badge, Skeleton } from '@material-ui/core'
import { useRouter } from 'next/router';
import { authStore } from 'service'
import moment from "moment";

let timeout
let scroll = 0

const Header = () => {
  const { langData } = useSelector(state => state.translate)
  const router = useRouter();
  const [active, setActive] = useState(null)
  const [subactive, setSubActive] = useState(null)
  const dispatch = useDispatch()
  const { langStore } = useSelector(state => state.translate)
  const { category_data, isCateLoading } = useSelector(state => state.category)
  const { cart_data, animated_data, quote_data, isCartLoading } = useSelector(state => state.ecommerce)
  
  // get account data 
  useEffect(() => {
    const authData = authStore.getAuth();
    authData && dispatch(account.getAccount())
  }, [dispatch, authStore])

  // get cart item 
  useEffect(() => {
    if (authStore.getAuth()) {
      dispatch(ecommerce.getCartUser())
    }
    // if (authStore.getAuth()) {
    //   dispatch(ecommerce.getCartUser())
    // } else {
    //   let quoteId = quote_data !== null && quote_data?.quoteId
    //   quoteId && dispatch(ecommerce.getCartGuest(quoteId))
    // }
  }, [dispatch, authStore])

  // check if coupon is already collected or not 
  useEffect(() => {
    if (authStore.getAuth()) {
      dispatch(account.getCoupon())
    }
  }, [dispatch, authStore])

  // get category list 
  useEffect(() => {
    let lang = {
      code: langStore?.code
    }
    dispatch(category.getCategory(lang))
  }, [dispatch, langStore?.code])

  // handle language change
  const languagesKey = [
    {
      lang: 'English',
      code: 'en',
      icon: '/english-flag.svg'
    },
    {
      lang: 'မြန်မာ',
      code: 'my',
      icon: '/myanmar-flag.svg'
    }
  ]

  const handleLangChange = language => {
    dispatch(translation.setLangStore('LANG_CODE_OBJ', language))
  }

  useEffect(() => {
    const translation_data = langStore?.code === 'en' ? en : my
    dispatch(translation.getLangData('GET_TRANSLATION_OBJ', translation_data))
  }, [dispatch, langStore?.code])
  // end language change

  // all category dropdown 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  // handle category
  const handleCategory = (key) => {
    key !== active && setActive(key)
  }

  // handle subcategory
  const handleSubCategory = (key) => {
    key !== subactive && setSubActive(key)
  }

  //position sticky
  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        if (scroll >= window.scrollY) {
          document.getElementById('pri-header').classList.add('sticky')
        } else {
          document.getElementById('pri-header').classList.remove('sticky')
        }
        scroll = window.scrollY
      }, 10)
    }
  }, [])

  // handle search 
  const [productName, setProductName] = useState('')
  const handleSearch = () => {
    productName !== '' && router.push(`/product/search/keyword=${encodeURI(productName)}`)
  }
  
  // signout if token expired 
  useEffect(() => {
    if(authStore.getAuth()) {
      // let authData = moment(authStore.getAuth()?.token_expire);
      // let authData = +new Date(authStore.getAuth()?.token_expire).getTime()
      let authData = +new Date(authStore.getAuth()?.token_expire).getTime()
      // console.log(`authData`, authData)
      let now = +new Date();
      // console.log(`now`, now)
      if(now > authData) {
        dispatch(auth.signOut())
        dispatch(ecommerce.setEcommerceStore('REMOVE_STORE_DATA', null))
        if (typeof window !== 'undefined') {
          window.location.href = '/'
        }
      }
    }
  }, [dispatch, authStore])

  return (
    <> 
      <Secondary id="sec-header">
        <div className="secondary-header">
          <Container>
            <Row md="12">
              <div className="secondary-wrap">
                <div className="info-menu">
                  <ul>
                    <li>
                      <Link href="/download-app" passHref>
                        <a>{langData?.DownloadApp}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/return-exchange" passHref>
                        <a>{langData?.returnExchange}</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/payment-method" passHref>
                        <a>Payment Method</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/delivery-information" passHref>
                        <a>{langData?.deliveryInformation}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="language-wrap">
                  <ul>
                    {
                      languagesKey?.map((x, i) =>
                        <li key={i}>
                          <span className="lang-item" onClick={() => handleLangChange(x)}>
                            <img src={x?.icon} alt={x?.lang} />
                          </span>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </Secondary>
      <Primary id="pri-header">
        <div className="primary-header">
          <Container>
            <Row>
              <Col xs="3" className="logo-col">
                <Link href="/" passHref>
                  <a className="logo-wrap desktop-logo">
                    <img src="/mz-logo.png" alt="mz-logo" className="logo" />
                  </a>
                </Link>
                <div className="mobile-logo">
                  {
                    // router.pathname !== "/" && 
                    // router.pathname !== "/categories" &&
                    // router.pathname !== "/order" &&
                    // router.pathname !== "/address" &&
                    // router.pathname !== "/account" ?
                    // <IconButton aria-label="back" onClick={() => handleBackBtn()}>
                    //   <ArrowBack />
                    // </IconButton>
                    // :
                    <Link href="/" passHref>
                      <a className="logo-wrap">
                        <img src="/mz-logo.png" alt="mz-logo" className="logo" />
                      </a>
                    </Link>
                  }
                </div>
                <div className="category-dropdown">
                  <Dropdown 
                    isOpen={dropdownOpen} 
                    toggle={toggle} 
                    onMouseOver={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <DropdownToggle caret>
                      {langData?.mzCategories}
                    </DropdownToggle>
                    <DropdownMenu>
                      {
                        isCateLoading ?
                        <div className="dropdown-menu-wrap">
                          {
                            Array(11).fill().map((x, i) =>
                            <div className="primary-cate" key={i}>
                              <div className="dropdown-link">
                                <Skeleton variant="text" height={24} width={'100%'} />
                              </div>
                            </div>
                            )
                          }
                        </div>
                        :
                        <div className="dropdown-menu-wrap">
                        {
                          category_data?.children_data?.map(cate =>
                            <React.Fragment key={cate?.id}>
                              <div
                                className={`primary-cate ${cate?.id !== active ? '' : 'active'}`} 
                                onMouseOver={() => handleCategory(cate?.id)}
                                onMouseLeave={() => handleCategory(null)}
                              >
                                <Link href={`/product/lists?category_id=${cate?.id}`} passHref>
                                  <a onClick={() => {
                                        handleCategory(null)
                                        handleSubCategory(null)
                                        setDropdownOpen(false)
                                      }
                                    }
                                  >
                                    {/* <span className="img-wrap">
                                      <Components.ImgWithFallback 
                                        src={`${(cate?.image)}`} 
                                        width={40} 
                                        height={40} 
                                        alt={cate?.name}
                                      />
                                    </span> */}
                                    <span className="title-wrap"> 
                                      {cate?.name}
                                    </span>
                                  </a>
                                </Link>
                                {
                                  cate?.children_data?.length > 0 &&
                                  <div className="subcategory-menu">
                                    <div className="subcategory-wrap">
                                      {
                                        cate?.children_data?.map(subcategory =>
                                          <React.Fragment key={subcategory?.id}>
                                            <div
                                              className={`subcategory-cate ${subcategory?.id !== subactive ? '' : 'active'}`} 
                                              onMouseOver={() => handleSubCategory(subcategory?.id)}
                                              onMouseLeave={() => handleSubCategory(null)}
                                            >
                                              <Link href={`/product/lists?category_id=${subcategory?.id}`} passHref>
                                                <a onClick={() => {
                                                      handleCategory(null)
                                                      handleSubCategory(null)
                                                      setDropdownOpen(false)
                                                    }
                                                  }
                                                >
                                                  <span className="subtitle-wrap"> 
                                                    {subcategory?.name}
                                                  </span>
                                                </a>
                                              </Link>
                                              {
                                                subcategory?.children_data?.length > 0 &&
                                                <div className="sub-child-category-wrap">
                                                  {
                                                    subcategory?.children_data?.map(sub_child_category =>
                                                      <React.Fragment key={sub_child_category?.id}>
                                                        <div
                                                          className={`subcategory-cate`} 
                                                        >
                                                          <Link href={`/product/lists?category_id=${sub_child_category?.id}`} passHref>
                                                            <a onClick={() => {
                                                                  handleCategory(null)
                                                                  handleSubCategory(null)
                                                                  setDropdownOpen(false)
                                                                }
                                                              }
                                                            >
                                                              <span className="subtitle-wrap"> 
                                                                {sub_child_category?.name}
                                                              </span>
                                                            </a>
                                                          </Link>
                                                          
                                                        </div>
                                                      </React.Fragment>
                                                    )
                                                  }
                                                </div>
                                              }
                                            </div>
                                          </React.Fragment>
                                        )
                                      }
                                    </div>
                                  </div>
                                }
                              </div>
                            </React.Fragment>
                          )
                        }
                        </div>
                      }
                    </DropdownMenu>
                  </Dropdown>
                
                </div>
              </Col>
              <Col xs="9">
                <div className="search-col">
                  <div className="search-wrap">
                    <div className="search-input">
                      <input 
                        type="text" 
                        placeholder="Search here..." 
                        onChange={e => setProductName(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                    <button className="search-btn" onClick={() => handleSearch()}>
                      {/* <Search /> */}
                      <img src="/search_white.svg" alt="search" />
                    </button>
                  </div>
                  <div className="cart-wrap">
                    {
                      !isCateLoading ?
                      <>
                        <Link href="/account" passHref>
                          <a className="cart account">                  
                            <div className="cart-item">
                              <div className="cart-btn">
                                {/* <AccountCircle /> */}
                                <img src="/account_circle_white.svg" alt="account" />
                                <p className="cart-title">Account</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href="/coupon" passHref>
                          <a className="cart wishlist">                  
                            <div className="cart-item">
                              <div className="cart-btn">
                                {/* <LocalActivity /> */}
                                <img src="/local_activity_white.svg" alt="coupon" />
                                <p className="cart-title">Coupon</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        {/* <Link href="/wishlist" passHref>
                          <a className="cart wishlist">                  
                            <div className="cart-item">
                              <div className="cart-btn">
                                // <Favorite />
                                <img src="/favorite_white.svg" alt="wishlist" />
                                <p className="cart-title">Wishlist</p>
                              </div>
                            </div>
                          </a>
                        </Link> */}
                        <Link href="/cart" passHref>
                          <a className="cart">
                            <div className={`cart-item ${animated_data && 'bounce'}`}>
                              <div className="cart-btn">
                                <Badge 
                                  badgeContent={
                                    cart_data !== null && 
                                    cart_data?.data?.reduce((total, value) => total + value?.qty, 0)
                                  } 
                                  max={99}
                                  invisible={!isCartLoading && cart_data !== null && cart_data?.data?.length > 0 ? false : true}
                                >
                                  {/* <ShoppingCart /> */}
                                  <img src="/shopping_cart_white.svg" alt="cart" />
                                </Badge>
                                <p className="cart-title">Cart</p>
                              </div>
                              {/* <span className="cart-number">2</span> */}
                            </div>
                          </a>
                        </Link>
                      </>
                      :
                      <>
                        <div className="cart account">                  
                          <div className="cart-item">
                            <div className="cart-btn">
                              <Skeleton variant="circular" width={25} height={25} style={{margin: '0 auto'}} />
                            </div>
                          </div>
                        </div>
                        <div className="cart wishlist">                  
                          <div className="cart-item">
                            <div className="cart-btn">
                              <Skeleton variant="circular" width={25} height={25} style={{margin: '0 auto'}} />
                            </div>
                          </div>
                        </div>
                        <div className="cart">                  
                          <div className="cart-item">
                            <div className="cart-btn">
                              <Skeleton variant="circular" width={25} height={25} style={{margin: '0 auto'}} />
                            </div>
                          </div>
                        </div>
                      </>
                    }
                  </div>              
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Primary>
      <MobileNavigation>
        <Components.MobileNav />
      </MobileNavigation>
    </>
  );
}
 
export default Header;
