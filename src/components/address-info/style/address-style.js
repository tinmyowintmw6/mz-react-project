import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const AddressInfoContainer = styled.div`
  .deliveryInfo-wrap {
    margin-top: 10px;
    .delivery-item {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border: 1px solid #D7D7DC;
      border-radius: 4px;
      @media (max-width: 991px) {
        flex-direction: column;
        align-items: flex-start;
      }
      .item {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 80%;
        flex: none;
        @media (max-width: 991px) {
          margin-bottom: 10px;
          width: 100%;
        }
      }
      .action-icon {
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        width: 100%;      
        .edit {
          width: 34px;
          height: 34px;
          background: #EBEBED;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          .create-icon {
            border-radius: 4px;
            svg.action-icon {
              width: 17px;
              height: 17px;
            }
          }       
          &:first-child {
            margin-right: 10px;
          }
        }
      }        
    }
    label {
      cursor: pointer;
      color: ${colors.titleText};
      span {
        &::after {
          content: ',';
          margin-right: 5px;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }          
      }
    }
    .address-check {
      padding: 3px;
      margin-right: 7px;
      svg {
        width: 20px;
        height: 20px;
      }
      &.Mui-checked {
        svg {
          color: ${colors.secondaryGreen};
        }
      }
    }
    .btn-link {
      color: ${colors.primary};
      font-size: 16px;
      font-family: 'fontStyle-bold';
      text-decoration: none;
      position: relative;
      text-transform: none;
      letter-spacing: unset;
      padding: 0;
      &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        border-bottom: 2px solid ${colors.primary};
        width: 100%;
        transition: all .2s;
      }
      &:hover {
        color: #AD171D;
        background: rgba(232, 29, 37, .08);
        &:after {
          border-color: #AD171D;
        }
      }
    }
  }
`

export { AddressInfoContainer }