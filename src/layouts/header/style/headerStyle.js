import styled from "styled-components";
import { colors, boxShadow } from "src/styles/constants";

const Primary = styled.div`
  background: ${colors.primary};
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  left: 0;
  z-index: 999;
  width: 100%;
  &#pri-header {
    @media (min-width: 1200px) {
      /* top: 0px; */
      margin-top: 33px;
      transition: top 0.2s ease-in;
    }
  }
  &.sticky {
    @media (min-width: 1200px) {
      position: sticky;
      position: -webkit-sticky;
      top: 33px !important;
    }
  }
  @media (max-width: 1199px) {
    top: 0;
    position: fixed;
    width: 100%;
    left: 0;
    height: 60px;
  }
  .primary-header {
    padding: 20px 0;
    @media (max-width: 1199px) {
      padding: 10px 0;
    }
    .search-col {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo-col {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .desktop-logo {
        display: block;
        @media (max-width: 1199px) {
          display: none;
        }
      }
      .mobile-logo {
        display: none;
        @media (max-width: 1199px) {
          display: block;
        }
        button {
          svg {
            color: #FFF;
          }
        }
      }
      .logo-wrap {
        padding: 0;
        margin: 0;
        line-height: 0;
        img {
          @media (max-width: 1199px) {
            height: 36px;
          }          
        }
      }
      .category-dropdown {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 1199px) {
          display: none;
        }
        .dropdown {
          position: relative;
          &.show {
            .dropdown-toggle {
              &:after {
                transform: rotate(-180deg);
              }
            }
          }
          .dropdown-toggle {
            padding: 0;
            margin: 0;
            background: transparent;
            border: 0 none;
            outline: none;
            color: #FFF;
            font-family: 'fontStyle-bold';
            padding: 0;
            display: flex;
            align-items: center;
            &:focus {
              box-shadow: none;
            }
            &:before {
              content: url('/toggle-icon.svg');
              margin-right: 6px;
              border: 0 none;
              transform: translateY(3px);
              width: 28px;
              display: inline-block;
            }
            &:after {
              content: url('/arrow-down.svg');
              margin-left: 6px;
              border: 0 none;
              transition: all .3s;
            }
          }
          .dropdown-menu {
            padding: 0;
            padding-top: 24px;
            display: block;
            transition: all .2s;
            border-radius: 0;
            background: transparent;
            border: 0 none;
            &[aria-hidden="true"] {
              visibility: hidden;
              opacity: 0;
            }
            &[aria-hidden="false"] {
              visibility: visible;
              opacity: 1;
            }
            .dropdown-menu-wrap {
              height: 460px;
              overflow: auto;
              width: 320px;
              max-width: 320px;
              box-shadow: ${boxShadow.baseShadow};
              border-radius: 0;
              background: #FFF;
              padding-top: 10px;
              padding-bottom: 10px;
              &::before {
                content: '';
                position: absolute;
                display: block;    
                width: 0px;        
                left: 20%;
                top: 13px;
                border: 8px solid transparent;
                border-top: 0;
                border-bottom: 12px solid #FFF;
                transform: translateX(-20%);
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
              .primary-cate {
                a, .dropdown-link {
                  padding: 5px 20px;
                  display: block;
                  color: ${colors.titleText};
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  &:first-child {
                    padding-top: 10px;
                  }
                  &:last-child {
                    padding-bottom: 10px;
                  }
                  &:hover {
                    color: ${colors.primary};
                  }
                  .img-wrap {
                    padding-right: 10px;
                    flex: none;
                    img {
                      max-width: 40px;
                    }                                        
                  }
                }
              }
              .primary-cate.active {
                .subcategory-menu {
                  opacity: 1;
                  visibility: visible;
                  transform: translateX(320px);
                }
              } 
              .subcategory-menu {
                position: absolute;
                top: 24px;
                right: 0px;
                transform: translateX(270px);
                transition: all .2s ease-in-out;
                visibility: hidden;
                opacity: 0;
                .subcategory-wrap {
                  padding: 0;
                  border-radius: 0;
                  max-width: 320px;
                  width: 320px;
                  height: 460px;
                  overflow: auto;
                  box-shadow: ${boxShadow.baseShadow};              
                  background: #FFF;
                  padding-top: 10px;
                  padding-bottom: 10px;
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
                  /* .subcategory-list {
                    padding: 5px 20px;
                    display: block;
                    color: ${colors.titleText};
                    font-size: 14px;
                  } */
                  .subcategory-cate {
                    a {
                      padding: 5px 20px;
                      display: block;
                      color: ${colors.titleText};
                      display: flex;
                      align-items: center;
                      justify-content: flex-start;
                      &:first-child {
                        padding-top: 10px;
                      }
                      &:last-child {
                        padding-bottom: 10px;
                      }
                      &:hover {
                        color: ${colors.primary};
                      }
                      .img-wrap {
                        /* flex: none; */
                        max-width: 60px;
                        padding-right: 10px;
                      }
                    }
                    .sub-child-category-wrap {
                      padding: 0;
                      border-radius: 0;
                      width: 320px;
                      transition: all .2s ease-in-out;
                      height: 460px;
                      overflow: auto;
                      box-shadow: ${boxShadow.baseShadow};
                      opacity: 0;
                      visibility: hidden;
                      position: absolute;
                      top: 0px;
                      right: 0px;
                      transform: translateX(270px);
                      background: #FFF;
                      padding-top: 10px;
                      padding-bottom: 10px;
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
                    }
                  }
                  .subcategory-cate.active {
                    .sub-child-category-wrap {
                      opacity: 1;
                      visibility: visible;
                      transform: translateX(320px);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .search-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 480px;
      border: 2px solid ${colors.primary};
      border-radius: 4px;
      position: relative;
      margin: 0 auto;
      .search-input {
        width: 100%;
        overflow: hidden;
        input {
          border-radius: 4px;
          outline: none;
          width: 100%;
          padding: 8px 16px;
          padding-right: 50px;
          border: 0 none;
          opacity: 1;          
          @media (max-width: 1199px) {
            border-radius: 2px;
            padding: 4px 8px;
          }
        }
        input::placeholder {
          color: ${colors.paraText};
          @media (max-width: 1199px) {
            font-size: 14px;
          }
        }
      }
      
      button.search-btn {
        border: 0 none;
        background: #000;
        border-radius: 0 4px 4px 0;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 48px;
        svg {
          color: #FFF;
        }
        @media (max-width: 1199px) {
          background: transparent;
          svg {
            display: inline-block;
            color: #6E6E78;
          }
        }
      }
    }
    .cart-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media (max-width: 1199px) {
        justify-content: center;
      }
      .cart {
        display: block;
        margin-left: 35px;
        transition: all .2s;
        @media (max-width: 1199px) {
          margin-left: 0;
        }
        &.wishlist, &.account {
          @media (max-width: 1199px) {
            display: none;
          }
        }
        .cart-title {
          margin-bottom: 0;
          font-size: 12px;
          font-family: 'fontStyle-bold';
          color: #FFF;
          @media (max-width: 1199px) {
            display: none;
          }
        }
        .cart-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: #FFF;            
          }
          .cart-btn {
            flex-direction: column;
            width: 50px;
            height: 50px;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0px;
            border: 0px;
            margin: 0px;
            cursor: pointer;
            user-select: none;
            vertical-align: middle;
            appearance: none;
            text-decoration: none;
            text-align: center;
            flex: 0 0 auto;
            font-size: 1.5rem;
            padding: 8px;
            border-radius: 50%;
            overflow: visible;
            color: rgba(0, 0, 0, 0.54);
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            &:hover {
              background-color: rgba(0, 0, 0, 0.04);
            }
            @media (max-width: 1199px) {
              width: 40px;
              height: 40px;
            }        
            .MuiBadge-root {
              .MuiBadge-badge {
                background: #000;
                font-family: 'fontStyle-bold';
                font-size: 12px;
                color: #FFF;
              }
            }  
          }
          .cart-number {
            position: relative;
            top: -22px;
            right: 18px;
            background: #000;
            font-family: 'fontStyle-bold';
            font-size: 14px;
            color: #FFF;
            min-width: 20px;
            padding: 0 .315rem;
            height: 20px;
            border-radius: 2.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width: 1199px) {
              top: -15px;
              font-size: 12px;
              min-width: 16px;
              height: 16px;
            }
          }
        }
        .bounce {
          -webkit-animation-name: bounce;
          animation-name: bounce;
          -webkit-transform-origin: center bottom;
          -ms-transform-origin: center bottom;
          transform-origin: center bottom;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        @-webkit-keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0);
          }
          70% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
          }
          90% {
            -webkit-transform: translate3d(0,-4px,0);
            transform: translate3d(0,-4px,0);
          }
        }
          
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0);
          }
          70% {
            -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
          }
          90% { 
            -webkit-transform: translate3d(0,-4px,0); transform: translate3d(0,-4px,0);
          }
        }
      }
    }
  }  
`

const Secondary = styled.div`
  background: ${colors.primary};
  z-index: 999;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  @media (max-width: 1199px) {
    display: none;
  }
  .secondary-header {
    .secondary-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      .info-menu {
        ul {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            padding-right: 20px;
            line-height: 16px;
            &:last-child {
              padding-right: 0;
            }
            a {
              color: #FFF;
              font-size: 12px;
              font-family: 'fontStyle-bold';
              &:hover {
                opacity: .8;
              }
            }
          }
        }
      }
      .language-wrap {
        ul {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            padding-right: 20px;
            &:last-child {
              padding-right: 0;
            }
            img {
              cursor: pointer;
              width: 20px;
              height: 20px;
              transition: all .2s;
              &:hover {
                opacity: .8;
              }
            }
          }
        }
      }
    }
  }
  
`

const MobileNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: ${boxShadow.mediumShadow};
  display: none;
  @media (max-width: 1199px) {
    display: block;
  }
  .MuiBottomNavigation-root {
    justify-content: space-around;
    .active {
      .MuiButtonBase-root {
        svg {
          color: ${colors.primary};
        }
      }
      .MuiBottomNavigationAction-label {
        color: ${colors.primary} !important;
      }
    }
    .MuiButtonBase-root {
      padding-top: 8px;
      padding: 8px;
      .MuiBottomNavigationAction-label {
        opacity: 1;
        font-family: 'fontStyle-light';
        font-size: 12px;
        color: ${colors.titleText};
      }
    }
  }
`

export { Primary, Secondary, MobileNavigation }
