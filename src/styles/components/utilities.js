import styled from "styled-components"
import { colors, boxShadow } from "../constants"
import { Dialog, Rating, TableContainer, Drawer } from "@material-ui/core"

const Section = styled.section`
  margin-top: 48px;
  margin-bottom: 58px;
  .title-section {
    margin-bottom: 30px;
    @media (max-width: 991px) {
      margin-bottom: 15px;
    }
  }
  @media (max-width: 991px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`

const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    border-radius: 8px;
    position: relative;
    width: 560px;
    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 9;
    }
  }  
  #scroll-dialog-title {
    position: relative;
    font-size: 24px;
    letter-spacing: unset;
    @media (max-width: 991px) {
      font-size: 18px;
    }
  }
  .dialog-title {
    padding: 40px 0 16px;
    margin: 0 40px 16px;
    font-family: 'fontStyle-bold';
    @media (max-width: 991px) {
      padding: 20px 0 16px;
      margin: 0 20px 16px;
    }
    .success-icon {
      width: 56px;
      height: 56px;
      @media (max-width: 991px) {
        width: 46px;
        height: 46px;
      }
    }
    &:after {
      content: '';
      border-bottom: 4px solid #D7D7DC;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  .MuiDialogContent-root {
    padding: 40px;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 40px;
    @media (max-width: 991px) {
      padding: 20px;
      margin-bottom: 20px;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f5f5f5; 
      border-radius: 100px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #D7D7DC; 
      border-radius: 100px;
      transition: all .2s;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #888; 
    }
    #scroll-dialog-description {
      font-family: 'fontStyle-light';
      letter-spacing: unset;
      color: ${colors.titleText};
    }
  }

  /* review card dialog */
  .review-card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    .img-wrap {
      margin-right: 12px;
      line-height: 0;
    }
    .name-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      .name {
        font-size: 16px;
        font-family: 'fontStyle-bold';
        margin-bottom: 0;
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
  .review-dialog-title {
    padding: 40px 0 0px;
    margin: 0 40px 0px;
    font-family: 'fontStyle-light';
  }

  /* write review  */
  .write-review {
    margin-top: 8px;
    .title {
      font-size: 14px;
      font-family: 'fontStyle-bold';
    }
    .to-rate {
      margin-bottom: 30px;
    }
    .to-review {
      .MuiFormControl-root {
        width: 100%;
        .MuiFilledInput-root {
          padding: 8px;
          border-radius: 2px;
          textarea {
            font-size: 16px;
            font-family: 'fontStyle-light';
            &:focus-visible {
              outline: none;
            }
          }
          &:after {
            border-color: #6E6E78;
          }
          &::before {
            border-bottom: 0 none;
          }
        }
      }
    }
  }

  /* add to cart dialog  */
  &.add-to-cart-dialog {
    .MuiBackdrop-root {
      background: transparent;
    }
    .MuiPaper-root {
      background: rgba(0, 0, 0, .72);
      .close-icon {
        color: #FFF;
      }
    } 
    .dialog-title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 0;
      &:after {
        display: none;
      }
    }
    .add-to-cart {
      .title {
        text-align: center;
        color: #FFF;
        font-family: 'fontStyle-light';
        font-size: 16px;
        letter-spacing: unset;
        margin-bottom: 30px;
      }
    }
  }

  /* delivery address  */
  .edit-form-wrap {
    .default-check-label {
      .MuiFormControlLabel-label {
        font-family: 'fontStyle-light';
      }
    }
    .default-check {
      &.Mui-checked {
        svg {
          color: ${colors.primary};
        }
      }
    }
  }

  /* coupon code dialog */
  .coupon-code-wrap {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .icon {
      margin-bottom: 16px;
    }
    .text {
      text-align: center;
      margin-bottom: 24px;
      .coupon-name {
        font-size: 24px;
        font-family: 'fontStyle-bold';
        margin-bottom: 4px;
        @media (max-width: 991px) {
          font-size: 18px;
        }
      }
    }
    .copy-code {
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 2px dashed #D7D7DC;
      border-radius: 100px;
      min-width: 260px;
      background: #F5F5F6;
      .coupon-text {
        font-size: 18px;
        font-family: 'fontStyle-bold';
        margin-bottom: 0;
        padding-right: 16px;
        padding-left: 16px;
      }
      button {
        background: ${colors.primary};
        font-size: 14px;
        font-family: 'fontStyle-bold';
        color: #FFF;
        padding: 10px 12px;
        border-radius: 36px;
        letter-spacing: unset;
        text-transform: none;
        line-height: normal;
      }
    }
  }
`

const CustomRating = styled(Rating)`
  margin-right: 10px;
  .MuiRating-iconFilled {
    color: ${colors.paraText};
  }
`

const CustomTable = styled(TableContainer)`
  border: 1px solid #D7D7DC;
  border-radius: 4px;
  ::-webkit-scrollbar {
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f5f5f5; 
    border-radius: 100px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #D7D7DC; 
    border-radius: 100px;
    transition: all .2s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888; 
  }
  table {
    thead, tbody {
      tr {
        td, th {          
          letter-spacing: unset;
          font-size: 16px;
          position: relative;
          @media (max-width: 991px) {
            font-size: 14px;
          }      
        }
        th {
          font-family: 'fontStyle-bold';
          color: ${colors.paraText};
          background: #F5F5F6;
          &:last-child {
            text-align: right;
          }
        }
        td {
          font-family: 'fontStyle-light';
          color: ${colors.titleText};
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
  &.table-bottom {
    border: 0 none;
    margin-top: 8px;
    td {
      border: 0 none;
      padding: 12px 0;
      span {
        display: block;
      }
      .total, .total-price {
        font-family: 'fontStyle-bold';
      }
      .total {        
        color: ${colors.primary};
        margin-bottom: 4px;
        &.total-small {
          font-size: 14px;
        }
      }
      .total-price {
        font-size: 20px;
        color: ${colors.titleText};
        @media (max-width: 991px) {
          font-size: 18px;
        }
        &.total-small {
          font-size: 18px;
          @media (max-width: 991px) {
            font-size: 16px;
          } 
        }
      }
      .deli-fee {
        margin-top: 16px;
      }
    }
  }
  &.cart-table {
    .product-col {
      width: 40%;
    }
    th {
      width: 20%; 
      @media (max-width: 991px) {
        min-width: 200px;
      }      
    }
    .out-of-stock {
      padding: 2px 7px;
      font-size: 12px;
      font-family: 'fontStyle-bold';
      color: #F29423;
      background: #FEF3C7;
      border-radius: 2px;
      z-index: 9;
      display: inline-block;
      margin-bottom: 5px;
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      svg {
        width: 6px;
        height: 6px;
        margin-right: 6px;
      }
      @media (max-width: 991px) {
        font-size: 10px;
        padding: 2px 5px;
      }
    }
    .product-name {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media (max-width: 991px) {
        flex-direction: column;
      }
      .img-wrap {
        position: relative;
        width: 80px;
        height: 80px;
        flex: none;
        img {
          object-fit: contain;
        }
      }
      .title {
        color: ${colors.titleText};
        margin-bottom: 0;
        span {
          display: block;
          &.name {
            margin-bottom: 3px;
          }
          small {
            padding-right: 5px;
            &::after {
              content: ':';
            }
            &:last-child {
              &::after {
                content: '';
              }
            }
          }
        }
      }
    }
    .sub-total {
      .price-wrap {
        .unit {
          margin-left: 5px;
        }
      }
    }
    .price {
      .price-wrap {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .unit {
          margin-left: 5px;
        }
        
      }
      p {
        margin-bottom: 0;
        font-family: 'fontStyle-bold';
        span {
          font-size: 18px;
          color: ${colors.primary};
          display: block;
          @media (max-width: 991px) {
            font-size: 16px;
          }
        }
        small {
          color: ${colors.paraText};
          font-size: 12px;
          
          .unit {
            font-size: 12px;
          }
        }
      }
    }
    .qty {
      p {
        margin-bottom: 0;
        font-family: 'fontStyle-bold';
      }
    }
  }
  &.order-detail-table {
    margin-bottom: 24px;
    .delivery {
      max-width: 250px;
      .info {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 8px;
        .title {
          margin-right: 20px;
          flex: none;
          min-width: 60px;
        }
        .address-list {
          margin: 0;
          padding: 0;
          list-style: none;
          span {
            &::after {
              content: ',';
              margin-right: 5px;
            }
            &:last-child {
              &::after {
                content: '.';
              }
            }
          }
        }
      }
    }
    .status {
      span {
        font-size: 12px;
        font-family: 'fontStyle-bold';
        color: #FFF;
        padding: 6px 8px;
        border-radius: 100px;
      }
    }
  }
`

const QuantityCounter = styled.div`
  margin-bottom: 32px;
  &.cart-qty-counter {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1199px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .qty-title {
    font-size: 14px;
    font-family: 'fontStyle-bold';
    color: ${colors.titleText};
    margin-bottom: 12px;
    min-width: auto;
  }
  .btn-qty {
    button {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 0;
      color: ${colors.titleText};
      background: #EBEBED;
      border: 0 none;
      min-width: auto;
    }
    .qty-text {
      .MuiInput-root {
        input {
          color: ${colors.titleText};
          font-size: 18px;
          font-family: 'fontStyle-bold';          
          text-align: center;
          width: 40px;
        }
        &::after {
          border-bottom-color: ${colors.paraText};
        }
        &::before {
          border: 0 none;
        }
      }
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  }
  .remove-btn {
    font-family: 'fontStyle-light' !important;
    text-transform: unset !important;
    text-decoration: underline;
    color: ${colors.titleText};
    transition: all .2s;
    display: block;
    &:hover {
      text-decoration: underline;
      color: ${colors.primary};
    }
  }
`

const LoginSection = styled(Section)`
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  &::before {
    content: '';
    background: url('/cart-bg.png') no-repeat center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 250px;
    z-index: 1;
    @media (min-width: 1400px) {
      width: 500px;
      height: 300px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  &::after {
    content: '';
    background: url('/bag-bg.png') no-repeat center/cover;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 250px;
    z-index: 1;
    @media (min-width: 1400px) {
      width: 500px;
      height: 300px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`

const LoginContainer = styled.div`
  margin: 40px 0;
  position: relative;
  z-index: 2;
  @media (min-width: 1400px) {
    margin: 120px 0;
  }
  .login-logo {
    text-align: center;
    margin-bottom: 30px;
    @media (min-width: 1400px) {
      margin-bottom: 50px;
    }
    img {
      width: 76px;
      height: 64px;
    }
  }
  .title-wrap {
    width: 100%;
    justify-content: center !important;
    margin-bottom: 20px;
    @media (min-width: 1400px) {
      margin-bottom: 30px;
    }
  }
  .terms {
    margin-top: 0px;
    @media (min-width: 1400px) {
      margin-top: 20px;
    }
    p {
      text-align: center;
      margin-bottom: 0;
      a, span {
        color: ${colors.primary};
        cursor: pointer;
      }
      .resend-btn {
        color: ${colors.primary};
        border: 0 none;
        background: transparent;
        box-shadow: none;
        padding: 0;
        margin: 0;
        outline: none;
        text-decoration: underline;
        transition: all .2s;
        margin-left: 5px;
        margin-right: 5px;
        &:hover {
          opacity: .8;
        }
      }
    }
  }
  .save-btn-wrap {
    margin-top: 10px;
    @media (min-width: 1400px) {
      margin-top: 20px;
    }
    button {
      width: 100%;
      min-width: 100%;
    }
  }
  .separator {
    margin-top: 16px;
    &.have-account {
      margin-top: 0px;
    }
    p {
      text-align: center;
      margin-bottom: 0;
      a, span {
        color: ${colors.primary};
        cursor: pointer;
      }
    }
  }
`

const ErrorMsg = styled.p`
  margin: 3px 0 0;
  font-size: 12px;
  font-family: 'fontStyle-bold';
  color: ${colors.primary};
`

const Sorting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .sort-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1199px) {
      display: none;
    }
    .sort-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      p {
        margin-bottom: 0;
        color: ${colors.titleText};
        margin-right: 5px;
      }
      .dropdown {
        &.show {
          button.btn {
            &:after {
              transform: rotate(-180deg);
            }
          }
        }
        button.btn {
          min-width: 81px;
          padding: 0;
          margin: 0;
          border: 0 none;
          background: transparent;
          color: ${colors.titleText};
          display: flex;
          align-items: center;
          justify-content: flex-end;
          &:focus {
            box-shadow: none;
          }
          &:after {
            content: "";
            margin-left: 6px;
            border: 0 none;
            transition: all .3s;
            transform: translateY(-1px);
            background: url('/arrow-down-red.svg') no-repeat center/cover;
            display: inline-block;
            width: 12px;
            height: 7px;
          }
        }
        .dropdown-menu {
          min-width: auto;
          padding: 0;
          box-shadow: ${boxShadow.baseShadow}; 
          border-radius: 0;
          border: 0 none;
          transition: all .2s;
          &[aria-hidden="true"] {
            visibility: hidden;
            opacity: 0;
          }
          &[aria-hidden="false"] {
            visibility: visible;
            opacity: 1;
          }
          .dropdown-item {
            transition: all .2s;
          }
        }
      }
    }
  }
  .grid {
    @media (max-width: 1199px) {
      display: none;
    }
    .grid-item {
      height: 26px;
      padding: 3px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: 10px;
      border: 1px solid rgb(135, 135, 135);
      background-color: transparent;
      transition: all .2s;
      span {
        margin-right: 3px;
        width: 10px;
        height: 100%;
        background: rgb(135, 135, 135);
        transition: all .2s;
        display: inline-block;
        &:last-child {
          margin-right: 0;
        }
      }
      &:hover {
        border: 1px solid #000;
        span {
          background: #000;
        }
      }
      &.active {
        border: 1px solid #000;
        span {
          background: #000;
        }
      }
    }
  }
  .toggleDrawer {
    display: none;
    @media (max-width: 1199px) {
      display: block;
    }
    .MuiButtonBase-root {
      svg {
        color: ${colors.primary};
      }
    }
  }
`

const ProductListWrap = styled.div`
  padding-left: 28px;
  @media (max-width: 1199px) {
    padding-left: 0;
  }
`

const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding: 16px;
    width: 80%;    
  }
`

const ProductSidebar = styled.div`
  display: block;
  @media (max-width: 1199px) {
    display: none;
  }
`

export { 
  Section, 
  CustomDialog, 
  CustomRating, 
  CustomTable, 
  QuantityCounter, 
  LoginContainer, 
  LoginSection,
  ErrorMsg,
  Sorting,
  ProductListWrap,
  CustomDrawer,
  ProductSidebar
}