import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { NextSeo } from 'next-seo'
import styled from "styled-components"

const AppWrapper = styled.div`
  background-image: url(/background-app.png);
  padding: 3rem 0 3rem;
`
const AppDownload = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .lft-app-content {
    float: left;
    .app-logo{
      img{
        width: 30px;
        height: 30px;
        margin-bottom: 2rem;
      }
    }
    h3{
      color: #000;
      font-size: 24px;
      font-family: 'fontStyle-bold';
    }
    .app-download-link{
      img {
          padding-right: 9px;
          padding-top: 9px;
      }
    }
  }
  .app-img {
    float: right;
    @media (max-width: 480px) {
      float: none;
      padding-top: 18rem;
      text-align: center;
    }
     img {
      width: 200px;
    }
  }
`
export default function DownloadApp() {
  const SEO = {
    title: 'Download Our App',
    openGraph: {
      title: 'Download Our App'
    }
  }

  return (
    <AppWrapper>
      <Container>
        <NextSeo {...SEO} />
        <AppDownload>
          <Row>
            <Col md={{ span: 6, offset: 2 }}>
              <div className="app-download">
                <Col md={3}>
                  <div className="lft-app-content">
                    <div className="app-logo">
                      <img src="/mz-logo-red.svg" alt="" />
                    </div>
                    <h3>Download your</h3>
                    <h3>Mercurius Zay app.</h3>
                    <p>A better shopping experience</p>
                    <div className="app-download-link">
                      <a href="https://play.google.com/store/apps/details?id=mz.online.market" target="_blank" rel="noreferrer">
                        <img src="/play-store.png" alt="play store" />
                      </a>
                      <a href="https://apps.apple.com/us/app/mz/id1572251032" target="_blank" rel="noreferrer">
                        <img src="/app-store.png" alt="app store" />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="app-img">
                    <img src="/app-download.png" alt="play store" />
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </AppDownload>
      </Container>
    </AppWrapper>
  )
}