import styled from 'styled-components'
import { boxShadow, colors } from 'src/styles/constants'

const FreeDeliWrap = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D1FAE5;
  img {
    margin-right: 10px;
    color: #059669;
    width: 24px;
    height: 24px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  p {
    margin-bottom: 0;
    color: #059669;
    font-size: 14px;
    font-family: 'fontStyle-bold';
    line-height: 16px;
    @media (max-width: 991px) {
      font-size: 12px;
      line-height: 0;
      padding: 3px 0;
    }
    small {
      font-family: 'fontStyle-light';
    }
  }
`

const CategoryWrap = styled.div`
  margin-bottom: 16px;
  padding-right: 8px;
  padding-left: 8px;
  .category-card-skeleton {
    width: 20%;
    padding-right: 8px;
    padding-left: 8px;
    margin-bottom: 16px;
    flex: none;
    @media (max-width: 991px) {
      width: 33.33%;
    }
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        overflow: visible;
      }      
    }
  }
  &.no-slider {
    width: 20%;
    @media (max-width: 991px) {
      width: 33.33%;
    }
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  .row {
    margin-left: -16px;
    margin-right: -16px;
  }
  .category-col {
    .category-link {
      display: block;
      transition: all .2s;
      border-radius: 4px;
      &:hover {
        box-shadow: 0px 4px 16px rgb(0 0 0 / 16%);
      }
      .category-card {
        /* background: linear-gradient(90deg, #29323C 0%, #485563 100%); */
        border-radius: 4px;
        position: relative;
        width: 100%;
        overflow: hidden;
        /* padding: 16px; */
        height: 120px; 
        > div {
          width: 100%;
          height: 100%;
        }
        .img-wrap {
          position: absolute;
          right: -15px;
          bottom: 0;
          flex: none;
          > div {
            display: block !important;
          }
        }
        .title-wrap {
          position: absolute;
          top: 0;
          left: 0;
          padding: 16px;
          width: 100%;
          z-index: 9;
          .title {
            font-size: 16px;
            font-family: 'fontStyle-bold';
            color: #FFF;
            width: 120px;
            @media (max-width: 991px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`

const SubCategoryWrap = styled.div`
  padding-top: 0;
  padding-bottom: 24px;
  background: #F5F5F6;
  border-bottom: 1px solid #D7D7DC;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
  .category-col {
    .category-link {
      display: block;
      padding: 0 5px;
      &:hover {
        .title-wrap {
          .title {
            color: ${colors.primary};
          }
        }
      }
      .category-card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .img-wrap {
          width: 44px;
          height: 44px;
          background: #FFF;
          box-shadow: ${boxShadow.mediumShadow};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          margin-top: 5px;
          transition: all .2s;
          @media (max-width: 991px) {
            width: 40px;
            height: 40px;
            margin-bottom: 8px;
          }
        }
        .title-wrap {
          text-align: center;
          .title {
            font-size: 14px;
            font-family: 'fontStyle-bold';
            transition: all .2s;
            @media (max-width: 991px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        overflow: visible;
      }
    }
  }
`

const BranchWrap = styled.div`
  margin: 20px 0;
  .branch-card-skeleton {
    width: 20%;
    padding-right: 4px;
    padding-left: 4px;
    margin-bottom: 16px;
    flex: none;
    @media (max-width: 991px) {
      width: 33.33%;
    }
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        overflow: visible;
      }
    }
  }
  .row {
    margin-left: -16px;
    margin-right: -16px;
  }
  .branch-col {
    margin-bottom: 16px;
    padding-right: 4px;
    padding-left: 4px;
    .branch-link {
      display: block;
      .branch-card {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: ${boxShadow.lowShadow};
        /* display: flex;
        align-items: center;
        justify-content: center; */
        display: block;
        > div {
          border-radius: 8px;
        }
      }
    }
  }
`

const PopularWrap = styled.div`
  margin: 20px 0;
  .popular-card-skeleton {
    margin-left: 4px;
    margin-right: 4px;
    width: 285px;
    flex: none;
    @media (max-width: 991px) {
      width: 194px;
    }
    @media (max-width: 767px) {
      width: 136px;
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        overflow: visible;
      }
    }
  }
  .row {
    margin-left: -16px;
    margin-right: -16px;
  }
  .popular-col {
    margin-bottom: 16px;
    padding-right: 4px;
    padding-left: 4px;
    margin-top: 5px;
    .popular-link {
      display: block;
      .popular-card {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: ${boxShadow.lowShadow};
        /* display: flex;
        align-items: center;
        justify-content: center; */
        display: block;
        > div {
          border-radius: 8px;
        }
      }
    }
  }
`

const ProductCardWrap = styled.div`
  &.no-slider-col-5 {
    width: 20%;
    @media (max-width: 991px) {
      width: 33.33%;
    }
    @media (max-width: 767px) {
      width: 50%
    }
  }
  &.no-slider-col-4 {
    width: 25%;
    @media (max-width: 991px) {
      width: 33.33%;
    }
    @media (max-width: 767px) {
      width: 50%
    }
  }
  .product-card-link {
    display: block;
    background: #FFF;
    border-radius: 7px;
    transition: all ease-in-out .2s;
    position: relative;
    height: 100%;
    .card-action-area {
      display: block;
      height: 100%;
      color: ${colors.paraText};
      /* &:hover {
        background: rgba(0, 0, 0, 0.04);
      } */
    }
    &:hover {
      .title-wrap {
        .title {
          color: ${colors.primary};
        }
      }
    }
    .discount-tag {
      position: absolute;
      top: 0;
      right: 0;
      padding: 2px 7px;
      font-size: 12px;
      font-family: 'fontStyle-bold';
      color: #FFF;
      background: ${colors.titleText};
      border-radius: 2px;
      z-index: 9;
      @media (max-width: 991px) {
        font-size: 10px;
        padding: 2px 5px;
      }
      &.out-of-stock {
        color: #F29423;
        background: #FEF3C7;
      }
      svg {
        width: 6px;
        height: 6px;
        margin-right: 6px;
      }
    }
    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px;
      position: relative;
      margin: 0 auto;
      @media (max-width: 991px) {
        padding: 10px;
      }
      @media (max-width: 767px) {
        width: 140px !important;
        height: 140px !important;
      }
      img {
        /* width: 100%; */
        object-fit: contain;
      }
    }
    .title-wrap {
      margin-top: 8px;
      margin-bottom: 4px;
      /* min-height: 39px; */
      .title {
        font-size: 16px;
        transition: all .2s;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow: ellipsis; 
        @media (max-width: 991px) {
          font-size: 14px;
          margin-bottom: 5px;
        }
      }
    }
    .card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .price-wrap {
        min-height: 45px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .unit {
          margin-left: 5px;
        }
        p {
          margin-bottom: 0;
          font-family: 'fontStyle-bold';
          margin-bottom: 3px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .price {
          color: ${colors.primary};
          font-size: 16px;
          @media (max-width: 991px) {
            font-size: 14px;
          }
        }
        .special-price-wrap {
          font-size: 12px;
          margin-bottom: 4px;
          @media (max-width: 991px) {
            font-size: 10px;
            margin-bottom: 0px;
          }
          .special-price {
            color: ${colors.paraText};
          }
        }
      }
    }
    .sold-progress {
      height: 35px;
      margin-top: 15px;
      .sold-progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .MuiLinearProgress-root {
          height: 6px;
          background-color: #EBEBED;
          border-radius: 100px;
          .MuiLinearProgress-bar {
            background: linear-gradient(90deg, #FF512F 0%, #F09819 100%);
          }
        }
      }
      .sold-number {
        font-size: 14px;
        color: ${colors.paraText};
        padding-top: 5px;
      }
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        margin-bottom: 0;
      }
    }
    .slick-arrow {
      &.slick-prev {
        left: -20px;
      }
      &.slick-next {
        right: -20px;
      }
    }
  }
`

const ReviewCardWrap = styled.div`
  margin-bottom: 24px;
  .review-card-item {
    border: 1px solid #D7D7DC;
    border-radius: 8px;
    padding: 24px;
    background: #FFF;
    .review-card-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;
      .img-wrap {
        margin-right: 12px;
      }
      .name-wrap {
        .name {
          font-size: 16px;
          font-family: 'fontStyle-bold';
          margin-bottom: 0;
          line-height: 15px;
        }
        .date {
          font-size: 12px;
        }
      }
    }
    .rating-wrap {
      .rating {
        margin-right: 10px;
        .MuiRating-iconFilled {
          color: ${colors.paraText};
        }
      }
    }
    .content {
      p {
        color: ${colors.titleText};
      }
    }
    .more-btn {
      padding: 0;
      color: ${colors.primary};
      text-transform: unset;
      font-family: 'fontStyle-bold';
      min-width: unset;
    }
  }
`
const CouponWrap = styled.div`
  margin: 20px 0;
  .coupon-card-skeleton {
    width: 50%;
    padding-right: 4px;
    padding-left: 4px;
    margin-bottom: 16px;
    flex: none;
    @media (max-width: 991px) {
      width: 50%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .slick-slider {
    .slick-list {
      @media (max-width: 991px) {
        overflow: visible;
      }
    }
  }
  .row {
    margin-left: -16px;
    margin-right: -16px;
  }
  .coupon-col {
    padding-right: 8px;
    padding-left: 8px;
    margin-right: -8px;
    margin-left: -8px;
    .coupon-card-wrap {
      overflow: hidden;
      position: relative;
      .coupon-card {
        padding: 0px;
        padding-right: 30px;
        padding-left: 30px;
        border: 1px solid #D7D7DC;
        border-radius: 4px;
        width: 100%;
        display: flex !important;
        justify-content: flex-start;
        cursor: pointer;
        color: ${colors.primary};
        letter-spacing: unset;
        position: relative;
        &:hover {
          background: rgba(232, 29, 37, 0.04);
        }
        &::before {
          content: '';
          width: 16px;
          height: 16px;
          border: 1px solid #D7D7DC;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          background: #FFF;
        }
        &::after {
          content: '';
          width: 16px;
          height: 16px;
          border: 1px solid #D7D7DC;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          right: -8px;
          transform: translateY(-50%);
          background: #FFF;
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 50px;
          &::after {
            content: '';
            border-right: 2px dashed #D7D7DC;
            position: absolute;
            top: 0;
            left: 92px;
            height: 100%;
          }
          svg {
            color: ${colors.primary};
            width: 20px;
            height: 20px;
          }
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          padding-bottom: 18px;
          width: 100%;
          @media (max-width: 991px) {
            flex-direction: column;
            align-items: flex-start;
          }
          .text {
            display: flex;
            text-align: left;
            justify-content: flex-start;
            flex-direction: column;
            margin-right: 5px;
            @media (max-width: 991px) {
              margin-bottom: 15px;
            }
            .coupon-name {
              font-size: 18px;
              color: ${colors.titleText};
              margin-bottom: 0;
              font-family: 'fontStyle-bold';
              letter-spacing: unset;
              text-transform: none;
              /* min-height: 93px; */
              display: flex;
              align-items: center;
            }
            .coupon-date {
              font-size: 14px;
              color: ${colors.paraText};
              margin-bottom: 0;
              font-family: 'fontStyle-light';
              letter-spacing: unset;
              text-transform: none;
            }
            .price {
              margin-bottom: 0;
              color: ${colors.paraText};
              font-size: 14px;
            }
          }
        }
        .status {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .name {
            margin-bottom: 0;
            font-size: 14px;
            font-family: 'fontStyle-bold';
            color: ${colors.titleText};
            margin-right: 16px;
          }
          .view {
            span {
              font-size: 14px;
              font-family: 'fontStyle-bold';
              text-transform: none;
              color: #FFF;
              background: ${colors.primary};
              border-radius: 24px;
              padding: 5px 8px;
              border: 1px solid transparent;
            }
            &.copied {
              span {
                border: 1px solid ${colors.primary};
                background: transparent;
                color: ${colors.primary};
              }
            }
          }
          .create-icon {
            border-radius: 4px;
          }
        }
        &.Mui-disabled {
          opacity: .5;
        }
      }
    }
  }
`

export {
  CategoryWrap,
  SubCategoryWrap,
  BranchWrap,
  PopularWrap,
  FreeDeliWrap,
  ProductCardWrap,
  ReviewCardWrap,
  CouponWrap
}