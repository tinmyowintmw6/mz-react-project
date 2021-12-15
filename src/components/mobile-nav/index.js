import React from "react";
// import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { colors } from 'src/styles/constants'
import { useSelector } from 'react-redux'
import { Skeleton } from "@material-ui/core";

const BottomNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-box-pack: center;
  height: 56px;
  background-color: rgb(255, 255, 255);
  .btn-nav-link {
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
    border-radius: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 8px;
    min-width: 80px;
    max-width: 168px;
    color: rgba(0, 0, 0, 0.6);
    flex-direction: column;
    flex: 1 1 0%;
    img.red {
      display: none;
    }
    img.black {
      display: block;
    }
    &.active {
      color: ${colors.primary};
      img.red {
        display: block;
      }
      img.black {
        display: none;
      }
    }
    span {
      font-family: 'fontStyle-light';
      font-size: 14px;
    }
  }
`

const MobileNav = () => {
  const router = useRouter();
  const { isCateLoading } = useSelector(state => state.category)
  return ( 
    <BottomNavigation>
      {
        !isCateLoading ?
        <>
          <Link href="/" passHref>
            <a className={`btn-nav-link ${router.pathname === "/" ? "active" : ""}`}>
              {/* <BottomNavigationAction label="Home" icon={<Home />} /> */}
              <img src="/home_black.svg" alt="home" className="black" />
              <img src="/home_red.svg" alt="home" className="red" />
              <span>Home</span>
            </a>
          </Link>
          <Link href="/categories" passHref>
            <a className={`btn-nav-link ${router.pathname === "/categories" ? "active" : ""}`}>
              {/* <BottomNavigationAction label="Categories" icon={<Apps />} /> */}
              <img src="/apps_black.svg" alt="apps" className="black" />
              <img src="/apps_red.svg" alt="apps" className="red" />
              <span>Categories</span>
            </a>
          </Link>
          <Link href="/account" passHref>
            <a className={
              `btn-nav-link
              ${
                router.pathname === "/address" || 
                router.pathname === "/order" || 
                router.pathname === "/review" || 
                router.pathname === "/coupon" || 
                router.pathname === "/account" ? "active" : ""
              }`
            }
            >
              {/* <BottomNavigationAction label="Account" icon={<AccountCircle />} /> */}
              <img src="/account_circle_black.svg" alt="account" className="black" />
              <img src="/account_circle_red.svg" alt="account" className="red" />
              <span>Account</span>
            </a>  
          </Link>
        </>
        :
        <>
          {
            Array(3).fill().map((x, i) =>
            <div className="btn-nav-link" key={i}>
              <Skeleton variant="circular" width={25} height={25} />
            </div>
            )
          }
        </>
        }
    </BottomNavigation>
  );
}
 
export default MobileNav;