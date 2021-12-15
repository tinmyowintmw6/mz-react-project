import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  .input-field {
    display: flex;
    &.textarea {
      .MuiFilledInput-underline {
        padding: 0;
      }
    }
    .MuiFilledInput-underline {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      font-family: 'fontStyle-light';
      color: ${colors.titleText};
      font-size: 16px;
      letter-spacing: normal;
      /* padding-left: 8px;
      padding-right: 8px; */
      .MuiInputAdornment-root {
        margin: 0 !important;
        color: ${colors.titleText};
        img {
          margin-right: 12px;
        }
      }
      .MuiFilledInput-input, .MuiSelect-select {
        width: 100%;
        padding: 10px;        
        background: #EBEBED;
        &:focus-visible {
          outline: none;
        }
      }
      &::after {
        border-color: ${colors.paraText};
      }
      &::before {
        border-color: transparent;
      }
      &.Mui-error {
        &::after {
          border-color: ${colors.primary};
        }
      }
    }    
    p.Mui-error {
      margin-right: 0;
      margin-left: 0;
      font-size: 12px;
      font-family: 'fontStyle-bold';
      letter-spacing: normal;
    }
  }
  .otp-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-otp-field {
      width: 15% !important;
      position: relative;
      &:hover {
        &::before {
          content: '';
          border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
      }
      &::before {
        content: '';
        left: 0;
        bottom: 0;
        position: absolute;
        right: 0;
        border-bottom: 1px solid transparent;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .otp-input {      
        background: #EBEBED;
        border: 0;
        width: 100% !important;
        height: 40px;
        border-bottom: 1px solid transparent;
        &:focus-visible {
          outline: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
      }
      &.error {
        .otp-input {
          border-bottom: 1px solid ${colors.primary};
        }
      }
    }
  }
  &.otp-group {
    margin-bottom: 0;
    .error {
      margin-top: 3px;
      margin-bottom: 0;
      font-size: 12px;
      font-family: 'fontStyle-bold';
      color: ${colors.primary};
    }
  }
`

const Label = styled.label`
  color: ${colors.titleText};
  font-family: 'fontStyle-bold';
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`

export {
  InputGroup,
  Label
}