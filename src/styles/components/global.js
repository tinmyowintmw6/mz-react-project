import { createGlobalStyle } from 'styled-components'
import { colors, boxShadow } from '../constants'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'fontStyle-light';
    src: url('/fonts/Circular/CircularStd-Light.woff2'), url('/fonts/Circular/CircularStd-Light.woff');
    /* font-display: swap; */
    font-display: fallback;
  }
  @font-face {
    font-family: 'fontStyle-light-italic';
    src: url('/fonts/Circular/CircularStd-Light-Italic.woff2'), url('/fonts/Circular/CircularStd-Light-Italic.woff');
    /* font-display: swap; */
    font-display: fallback;
  }
  @font-face {
    font-family: 'fontStyle-bold';
    src: url('/fonts/Circular/CircularStd-Bold.woff2'), url('/fonts/Circular/CircularStd-Bold.woff');
    /* font-display: swap; */
    font-display: fallback;
  }
  @font-face {
    font-family: 'fontStyle-light-italic';
    src: url('/fonts/Circular/CircularStd-Bold-Italic.woff2'), url('/fonts/Circular/CircularStd-Bold-Italic.woff');
    /* font-display: swap; */
    font-display: fallback;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
      
  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    margin: 0;
    padding: 0 !important;
    color: ${colors.paraText};
    background: #FFF;
    font-family: 'fontStyle-light' !important;
    font-size: 16px;
    @media (max-width: 1199px) {
      overflow-x: hidden;
    }
  }

  main {
    min-height: calc(100vh - 550px);
    overflow-x: hidden;
    /* for mobile nav spacing  */
    @media (max-width: 1199px) {
      margin-bottom: 60px;
      margin-top: 60px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.titleText};
  }

  div {
    &:focus-visible {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.titleText};
    transition: all .2s;
  }
  a:focus { 
    outline: none; 
  }

  /* slick arrow  */
  .slick-slider {
    z-index: 1;
    @media (max-width: 991px) {
      overflow: hidden;
    }
    .slick-list {
      margin-bottom: 15px;
    }
    /* .slick-track {
      @media (max-width: 991px) {
        display: flex;
      }
    } */
    .slick-arrow {
      width: 15px;
      height: 25px;
      z-index: 1;
      opacity: 1;
      visibility: visible;
      transition: opacity .3s ease;
      &:before {
        content: '';
        width: 15px;
        height: 25px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
      &.slick-prev {
        left: -30px;
        &:before {
          background: url("/sign-left.svg") no-repeat center / cover;
        }
      }
      &.slick-next {
        right: -30px;
        &:before {
          background: url("/sign-right.svg") no-repeat center / cover;
        }
      }
    }
  }
  .slick-dots {
    display: flex !important;
    align-items: center;
    justify-content: center;
    bottom: -25px;
    margin-bottom: 25px;
    li {
      width: 6px;
      height: 6px;
      background-color: #8C8C96;
      margin: 0;
      margin-right: 20px;
      border-radius: 50%;
      &.slick-active {
        background-color: ${colors.titleText};
      }
      button {
        &:before {
          display: none;
        }
      }
    }
  }

  /* loading skeleton  */
  .react-loading-skeleton {
    line-height: inherit !important;
  }

  /* nprogress customised style  */
  #nprogress {
    .bar {
      background: ${colors.pageBg};
    }
    .spinner {
      left: 15px;
      @media (max-width: 991px) {
        left: 5px;
        top: 5px;
      }
      .spinner-icon {
        border-top-color: ${colors.pageBg};
        border-left-color: ${colors.pageBg};
      }
    }
  }
`

export { GlobalStyle }