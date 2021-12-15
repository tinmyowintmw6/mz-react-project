import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const FooterWrap = styled.div`
  padding-top: 55px;
  padding-bottom: 55px;
  border-top: 1px solid #D7D7DC;
  background: ${colors.grayBg};
  @media (max-width: 991px) {
    display: none;
  }
  footer {
    .footer-col {
      .title {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .logo-wrap {
          margin-right: 8px;
          img {
            width: 48px;
            height: 40px;
          }
        }
        .title-text {
          font-size: 18px;
          font-family: 'fontStyle-bold';
        }
      }
      .about-text {
        margin-bottom: 40px;
        max-width: 360px;
      }
      .callus {
        font-family: 'fontStyle-bold';
        color: ${colors.titleText};
        margin-bottom: 12px;
      }
      .call-us-btn {
        color: ${colors.primary};
        font-size: 14px;
        font-family: 'fontStyle-bold';
        letter-spacing: unset;
        border: 1px solid ${colors.primary};
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .info-wrap {
        margin: 0;
        padding: 0;
        list-style: none;
        margin-bottom: 40px;
        li {
          margin-bottom: 8px;
          a {
            &:hover {
              color: ${colors.primary};
            }
          }
        }
        &.app {
          li {
            a {
              img {
                width: 128px;
                height: 40px;
              }
            }
          }
        }
      }
      .logi-title {
        .title {
          font-size: 14px;
          font-family: "fontStyle-bold";
          margin-bottom: 12px;
        }
        img {
          width: 96px;
          height: 28px;
        }
      }
    }
  }
`

const CopyRight = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #D7D7DC;
  background: ${colors.grayBg};
  @media (max-width: 991px) {
    display: none;
  }
  .copy-right-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .copy-right {
      p {
        font-size: 14px;
        margin-bottom: 0;
      }
    }
    .social-icon {
      @media (max-width: 767px) {
        margin-bottom: 15px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        li {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
          a {
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
`

export { FooterWrap, CopyRight }