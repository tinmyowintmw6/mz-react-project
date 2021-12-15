import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const AccountSetting = styled.div`
  .account-card {
    padding: 20px;
    border: 1px solid #D7D7DC;
    border-radius: 4px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        svg {
          color: ${colors.primary};
          width: 20px;
          height: 20px;
        }
      }
      .text {
        display: flex;
        text-align: left;
        justify-content: flex-start;
        flex-direction: column;
        p {
          font-size: 16px;
          color: ${colors.titleText};
          margin-bottom: 0;
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
      .edit {
        width: 34px;
        height: 34px;
        background: #EBEBED;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 17px;
          height: 17px;
        }
      }
      .create-icon {
        border-radius: 4px;
      }
    }
  }
`

export { AccountSetting }