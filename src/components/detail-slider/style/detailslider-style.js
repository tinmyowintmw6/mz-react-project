import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const DetailSliderWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 0px;
  height: 480px;
  @media (max-width: 991px) {
    margin-bottom: 30px;
    height: 380px;
  }
  @media (max-width: 767px) {
    height: 280px;
    margin-bottom: 10px;
  }
  .main-slide {
    width: 100%;
    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      width: 480px;
      height: 480px;
      @media (max-width: 991px) {
        margin-bottom: 30px;
        height: 380px;
      }
      @media (max-width: 767px) {
        height: 280px;
        margin-bottom: 10px;
      }
      img {
        object-fit: contain;
      }
    }
    .slick-track {
      /* width: 100% !important; */
      .slick-slide {
        /* width: 100% !important; */
        img {
          width: 100%;
        }
      }
    }
  }
  .slide-nav {
    margin-right: 10px;
    img {
      width: 100%;
    }
    .slick-slide {
      width: 64px !important;
      height: 64px !important;
      border: 2px solid transparent;
      border-radius: 4px;
      margin-top: 4px;
      margin-bottom: 4px;
      cursor: pointer;
      &.slick-current {
        border: 2px solid ${colors.primary};
      }
    }
  }
  .slick-dots {
    li {
      margin: 0;
      button {
        &:before {
          font-size: 11px;
          opacity: 1;
          color: ${colors.pageBg}
        }
      }
      &.slick-active {
        button {
          &:before {
            color: ${colors.primary}
          }
        }
      }
    }
  }
  .slide-nav {
    * {
      &:focus {
        outline: none;
      }
    }
    .slick-slide {
      padding: 5px;
      margin-right: 12px;
      @media (max-width: 991px) {
        margin-right: 18px;
      }
    }
    .slick-arrow {
      @media screen and (max-width: 767px) {
        top: 35%;
      }
      &.slick-prev {
        left: -10px;
        @media screen and (min-width: 768px) {
          left: -15px;
        }
      }
      &.slick-next {
        right: -10px;
        @media screen and (min-width: 768px) {
          right: -15px;
        }
      }
    }
  }
`

export {
  DetailSliderWrap
}