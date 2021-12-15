import styled from "styled-components";
import { colors } from "src/styles/constants";

const SideBarContainer = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .sidebar-wrap {
    .title-btn {
      background: none;
      border: 0 none;
      padding: 0;
      color: ${colors.titleText};
      font-size: 16px;
      font-family: 'fontStyle-bold';
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #D7D7DC;
      padding-bottom: 10px;
      border-radius: 0;
      text-transform: capitalize;
      letter-spacing: unset;
      line-height: normal;
      transition: all .2s;
      svg {
        color: ${colors.paraText};
        font-size: 22px;
        transition: all .2s;
      }
      &.close {
        svg {
          transform: rotate(180deg);
        } 
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
      &:hover {
        background: none;
        color: ${colors.primary};
        svg {
          color: ${colors.primary};
        }
      }
    }
    .sidebar-list {
      max-height: 255px;
      overflow: auto;
      margin-top: 16px;
      .sidebar-btn {
        margin-bottom: 22px;
        background: none;
        border: 0 none;
        padding: 0;
        color: ${colors.paraText};    
        font-family: 'fontStyle-light';
        width: 100%;
        border-radius: 0;
        text-transform: none;
        letter-spacing: unset;
        line-height: normal;
        text-align: left;
        justify-content: flex-start;
        font-size: 16px;
        font-weight: unset;
        &:hover {
          background: none;
          color: ${colors.primary};
        }
      }
      .MuiFormControlLabel-label, .sidebar-check-label {
        font-family: 'fontStyle-light';
        text-transform: unset;
        letter-spacing: unset;
      }
      .sidebar-check-label {
        margin-left: 0;
        margin-right: 0;
        width: 100%;        
        margin-bottom: 10px;
        .sidebar-check {
          padding: 5px;
          margin-right: 5px;
          &.Mui-checked {
            svg {
              color: ${colors.primary};
            }
          }
        }
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
      .cate-item {
        /* margin-bottom: 22px; */
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .cate-name {
          transition: all .2s;
        }
        svg {
          color: ${colors.primary};
        }
        &:hover {
          .cate-name {
            color: ${colors.primary};
          }
        }
      }
      .custom-check {
        margin-bottom: 22px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: nowrap;
        &:last-child {
          margin-bottom: 0;
        }
        label {
          cursor: pointer;
        }
      }
    }
    .range-wrap {
      margin: 16px 10px 0;
      .range-number {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 14px;
        }
      }
      .MuiSlider-root {
        .MuiSlider-thumb {
          width: 12px;
          height: 12px;
          color: ${colors.primary};
          &:hover {
            box-shadow: 0px 0px 0px 8px rgba(232, 29, 37, .16);
          }
          &.Mui-focusVisible {
            box-shadow: 0px 0px 0px 8px rgba(232, 29, 37, .16);
          }
        }
        .MuiSlider-track {
          color: ${colors.primary};
        }
        .MuiSlider-rail {
          color: #D7D7DC;
          opacity: 1;
        }
      }
    }
    .payment-method-wrap {
      margin-top: 10px;
      label {
        margin-left: 0;
        .MuiTypography-root {
          font-family: 'fontStyle-light';
          letter-spacing: unset;
          text-transform: unset;
        }
        .MuiRadio-root {
          color: ${colors.primary};
          padding: 3px;
          margin-right: 7px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .special-instruction {
      margin-top: 10px;
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
    .product-item {
      margin-top: 20px;
    }
    .MuiAccordion-root {
      box-shadow: none;
      margin-bottom: 16px;
      .MuiAccordionSummary-root {
        padding: 0;
        min-height: auto;
        border-bottom: 1px solid #D7D7DC;
        .MuiAccordionSummary-content {
          margin: 0 0 10px;
          &.Mui-expanded {
            margin: 0 0 10px;
          }
          .title-btn {
            margin: 0;
            padding: 0;
            border: none 0;
          }
        }
        .MuiAccordionSummary-expandIconWrapper {
          margin-bottom: 10px;
        }
      }
      .MuiCollapse-root {
        .MuiCollapse-wrapper {
          .MuiCollapse-wrapperInner {
            .MuiAccordionDetails-root {
              padding-right: 0;
              padding-left: 0;
            }
          }
        }
      }
    }
  }
`

export { SideBarContainer }