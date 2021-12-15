import React from 'react'
import { useSelector } from "react-redux"
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import { FooterWrap, CopyRight } from './style/footerStyle'
import { Button } from '@material-ui/core'
import { CallOutlined } from '@material-ui/icons'


const Footer = () => {
  const { langData } = useSelector(state => state.translate)

  return (
    <>
      <FooterWrap>
        <footer>
          <Container>
            <Row>
                <Col lg="4" md="6">
                  <div className="footer-col">
                    <div className="title">
                      <Link href="/" passHref>
                        <a className="logo-wrap">
                          <img src="/mz-logo-red.svg" alt="mz-logo" className="logo" />
                        </a>
                      </Link>
                      <h2 className="title-text">{langData?.aboutMZTitle}</h2>
                    </div>
                    <p className="about-text">
                      {langData?.aboutMZDesc}
                    </p>
                    <p className="callus">Call Us (8:30 AM - 11:30 PM)</p>
                    <Button
                      variant="outlined"
                      startIcon={<CallOutlined />}
                      className="call-us-btn"
                    ><a href="tel:+959 779 900 888" rel="noreferrer">
                      09 779 900 888</a>
                    </Button>
                  </div>
                </Col>
                <Col lg="8" md="6">
                  <Row>
                    <Col lg="4" md="6" className="footer-col">
                      <div className="title">
                        <h2 className="title-text">{langData?.inFormation}</h2>
                      </div>
                      <ul className="info-wrap">
                        <li>
                          <Link href="/delivery-information" passHref>
                            <a>{langData?.deliveryInformation}</a>
                          </Link>
                        </li>
                        {/* <li>
                        <Link href="/payment-method" passHref>
                          <a>Payment Method</a>
                        </Link>
                      </li> */}
                        <li>
                          <Link href="/how-to-buy" passHref>
                            <a>{langData?.howToBuy}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq" passHref>
                            <a>{langData?.faq}</a>
                          </Link>
                        </li>
                        {/* <li>
                        <Link href="/contact" passHref>
                          <a>Contact Us</a>
                        </Link>
                      </li> */}
                      </ul>
                    </Col>
                    <Col lg="4" md="6" className="footer-col">
                      <div className="title">
                        <h2 className="title-text">{langData?.ourPolicy}</h2>
                      </div>
                      <ul className="info-wrap">
                        <li>
                          <Link href="/return-exchange" passHref>
                            <a>{langData?.returnExchange}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-condition" passHref>
                            <a>{langData?.termsConditions}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy" passHref>
                            <a>{langData?.privacyPolicy}</a>
                          </Link>
                        </li>
                      </ul>
                      <div className="logi-title">
                        <h3 className="title">{langData?.logisticPartner}</h3>
                        <img src="/corsa.svg" alt="logistics " />
                      </div>
                    </Col>
                    <Col lg="4" md="6" className="footer-col">
                      <div className="title">
                        <h2 className="title-text">{langData?.downloadOurApp}</h2>
                      </div>
                      <ul className="info-wrap app">
                        <li>
                          <a href="https://play.google.com/store/apps/details?id=mz.online.market" target="_blank" rel="noreferrer">
                            <img src="/play-store.png" alt="play store" />
                          </a>
                        </li>
                        <li>
                          <a href="https://apps.apple.com/us/app/mz/id1572251032" target="_blank" rel="noreferrer">
                            <img src="/app-store.png" alt="app store" />
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
            </Row>
          </Container>
        </footer>
      </FooterWrap>
      <CopyRight>
        <Container>
          <Row>
            <div className="copy-right-wrap">
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/mzonlinemarketmm" target="_blank" rel="noreferrer">
                      <img src="/facebook.png" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mzonlinemarketmm/" target="_blank" rel="noreferrer">
                      <img src="/instagram.png" alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCBG47mWTfue1y8fnDzmnlDA" target="_blank" rel="noreferrer">
                      <img src="/youtube.png" alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/mzonlinemarketmm" target="_blank" rel="noreferrer">
                      <img src="/telegram.png" alt="telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://bit.ly/3kYQHzA" target="_blank" rel="noreferrer">
                      <img src="/viber.png" alt="viber" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copy-right">
                <p>© 2021 MZ Online Market. All rights reserved.</p>
              </div>
            </div>
          </Row>
        </Container>
      </CopyRight>
    </>
  );
}

export default Footer;