import { colors } from 'src/styles/constants'
import styled from 'styled-components'

const imgUrl = {
  leftArrow: "../../arrow_back_ios_black.svg",
  rightArrow: "../../arrow_forward_ios_black.svg",
  leftArrowWhite: "../../arrow_back_ios_white.svg",
  rightArrowWhite: "../../arrow_forward_ios_white.svg",
}

const PaginationWapper = styled.div`
  margin: 20px 0;
  .rc-pagination {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      cursor: pointer;
      &:focus {
        outline: none;
      }
      a, button {
        text-decoration: none;
        position: relative;
        display: block;
        padding: 10px;
        margin: 0 4px;
        line-height: 1.25;
        background-color: #EBEBED;
        border: 1px solid transparent;
        color: ${colors.titleText};
        font-family: 'fontStyle-bold';
        transition: all .2s;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: ${colors.primary};
          color: #FFF !important;
        }
      }
      &.rc-pagination-disabled {
        a, button {
          background-color: #EBEBED;
          cursor: default;
        }
      }
      button {
        &:focus {
          outline: none;
        }
        &:before {
          content: '';
          width: 12px;
          height: 12px;
          display: inline-block;
        }
      }
      &.rc-pagination-item-active {
        a {
          background: ${colors.primary};
          color: #FFF;
          &:hover {
            color: #FFF !important;
          }
        }
      }
      &.rc-pagination-prev {
        button {
          margin: 0;
          margin-right: 3px;
          border-radius: 5px;
          &:before {                        
            background: url(${imgUrl.leftArrow}) no-repeat center/cover;
          }
          &:hover {
            &:before {                        
              background: url(${imgUrl.leftArrowWhite}) no-repeat center/cover;
            }
          }
        }
      }
      &.rc-pagination-prev.rc-pagination-disabled {
        button {
          &:hover {
            &:before {                        
              background: url(${imgUrl.leftArrow}) no-repeat center/cover;
            }
          }
          &:before {
            opacity: .4;
          }
        }
      }
      &.rc-pagination-next.rc-pagination-disabled {
        button {
          &:hover {
            &:before {                        
              background: url(${imgUrl.rightArrow}) no-repeat center/cover;
              opacity: .5;
            }
          }
          &:before {
            opacity: .4;
          }
        }
      }
      &.rc-pagination-next {
        button {
          border-radius: 5px;
          margin: 0;
          margin-left: 3px;
          &:before {
            background: url(${imgUrl.rightArrow}) no-repeat center/cover;
          }
          &:hover {
            &:before {                        
              background: url(${imgUrl.rightArrowWhite}) no-repeat center/cover;
            }
          }
        }
      }
      &.rc-pagination-jump-prev, &.rc-pagination-jump-next {
        button {
          &:before {
            content: '...';
          }
        }
      }
    }
  }
`

export {
  PaginationWapper
}