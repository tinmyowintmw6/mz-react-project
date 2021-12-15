import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const CouponContainer = styled.div`
  overflow: hidden;
  .coupon-card {
    padding: 0px;
    padding-right: 30px;
    padding-left: 30px;
    border: 1px solid #D7D7DC;
    border-radius: 4px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 12px;
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
  }
  .MuiSnackbar-root {
    .MuiPaper-root {
      font-size: 16px;
      font-family: 'fontStyle-light';
      letter-spacing: unset;
      line-height: normal;
      border-radius: 8px;
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }
  }
`

export { CouponContainer }