import React, { useRef, useEffect } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Head from 'next/head'
import Router from 'next/router'
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { GlobalStyle } from '../styles/components'

const Layout = ({ children }, showAfterMs = 250, options = { minimum: 0.01, speed: 500 }) => {
  const timer = useRef(null);

  const routeChangeStart = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(nProgress.start, showAfterMs);
  }

  const routeChangeEnd = () => {
    clearTimeout(timer.current);
    nProgress.done();
  }

  useEffect(() => {
    if (options) {
      nProgress.configure(options);
    }

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);

    return () => {
      Router.events.on("routeChangeStart", routeChangeStart);
      Router.events.on("routeChangeComplete", routeChangeEnd);
      Router.events.on("routeChangeError", routeChangeEnd);
    }
  }, [showAfterMs, options]);

  return (
    <div className="content">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="keywords" content="MZ Online Market, Mercurius Zay, Myanmar Online Shop, Buy for Shopping Needs" />
      </Head>
      <GlobalStyle />
      <Header />
        <main>
          { children }
        </main>
      <Footer />
    </div> 
  );
}
 
export default Layout;