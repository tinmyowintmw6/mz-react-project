import styled from 'styled-components'
import { boxShadow, colors } from 'src/styles/constants'

// home banner
const BannerSection = styled.div`
  background: ${colors.grayBg};
  padding-top: 24px;
  padding-bottom: 36px;
  @media (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 18px;
  }
  .banner-container {
    @media (max-width: 767px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .img-link {
    display: block;
    width: 100%;
    .img-item {
      width: 100% !important;
    }
  }
  .slick-slider {
    .slick-list {
      box-shadow: ${boxShadow.mediumShadow};
      border-radius: 6px;
      margin-bottom: 0;
      @media (max-width: 991px) {
        border-radius: 0;
      }
    }
    .slick-dots {
      bottom: 15px;
      margin-bottom: 0;
      width: auto;
      background: rgba(0, 0, 0, .48);
      padding: 8px 20px;
      border-radius: 100px;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 991px) {
        padding: 5px 13px;
        bottom: 5px;
      }
      li {
        margin-right: 16px;
        background: transparent;
        border: 1px solid #FFF;
        @media (max-width: 991px) {
          margin-right: 10px;
        }
        &.slick-active {
          background: #FFF;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`

export {
  BannerSection
}