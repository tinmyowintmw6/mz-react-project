import React from 'react'
import Link from 'next/link'
import { Settings, History, Room, LocalActivity, Grade, List, Favorite, LocalShipping, Stars } from '@material-ui/icons'
import styled from 'styled-components'
import { IconButton, Drawer } from '@material-ui/core'
import { colors } from 'src/styles/constants'
import { useRouter } from 'next/router'

const AccountContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
    button {
      border-radius: 4px;
      font-size: 16px;
      color: ${colors.titleText};
      padding: 10px 14px;
      transition: all .2s;
      width: 100%;
      justify-content: flex-start;
      svg {
        color: ${colors.paraText};
        margin-right: 14px;
        transition: all .2s;
      }
      &:hover {
        /* border-radius: 0; */
        color: ${colors.primary};
        svg {
          color: ${colors.primary};
        }
      }
    }
    &.active {
      button {
        color: ${colors.primary};
        background: rgba(0, 0, 0, 0.04);
        svg {
          color: ${colors.primary};
        }
      }
    }
    &.mobile-wishlist {
      display: none;
      @media (max-width: 991px) {
        display: block;
      }
    }
  }
`

const AccountSidebarResponsive = styled.div`
  .accountSidebar-mobile {
    display: none;
    @media (max-width: 991px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .MuiButtonBase-root {
        border-radius: 4px;
        background: #EBEBED;
      }      
    }
  }
  .accountSidebar-desktop {
    display: block;
    @media (max-width: 991px) {
      display: none;
    }
  }
`

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    padding: 16px;
    width: 80%;    
  }
`

const AcountSidebarList = () => {
  const router = useRouter();
  return (
    <AccountContainer>
      <li className={router.pathname === "/account" ? "active" : ""}>
        <Link href="/account" passHref>
          <a>
            <IconButton>
              <Settings />
              Account Settings
            </IconButton>
          </a>
        </Link>
      </li>
      <li className={router.pathname === "/order" ? "active" : ""}>
        <Link href="/order" passHref>
          <a>
            <IconButton>
              <History />
              Order History
            </IconButton>
          </a>
        </Link>
      </li>
      <li className={router.pathname === "/address" ? "active" : ""}>
        <Link href="/address" passHref>
          <a>
            <IconButton>
              <Room />
              Address
            </IconButton>
          </a>
        </Link>
      </li>
      {/* <li className={router.pathname === "/rental" ? "active" : ""}>
        <Link href="/" passHref>
          <a>
            <IconButton>
              <LocalShipping />
              Rental Orders
            </IconButton>
          </a>
        </Link>
      </li> */}
      <li className={router.pathname === "/coupon" ? "active" : ""}>
        <Link href="/coupon" passHref>
          <a>
            <IconButton>
              <LocalActivity />
              My Coupons
            </IconButton>
          </a>
        </Link>
      </li>     
      {/* <li className={router.pathname === "/review" ? "active" : ""}>
        <Link href="/review" passHref>
          <a>
            <IconButton>
              <Grade />
              My Reviews
            </IconButton>
          </a>
        </Link>
      </li> */}
      {/* <li className={router.pathname === "/point" ? "active" : ""}>
        <Link href="/" passHref>
          <a>
            <IconButton>
              <Stars />
              Points Balance
            </IconButton>
          </a>
        </Link>
      </li> */}
      {/* <li className={`${router.pathname === "/wishlist" ? "active" : ""} mobile-wishlist`}>
        <Link href="/wishlist" passHref>
          <a>
            <IconButton>
              <Favorite />
              Wishlist
            </IconButton>
          </a>
        </Link>
      </li> */}
    </AccountContainer>
  )
}

const AccountSidebar = () => {
  // handle drawer 
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  }

  return (
    <AccountSidebarResponsive>
      <div className="accountSidebar-mobile">
        <IconButton aria-label="List" component="span" onClick={toggleDrawer('left', true)}>
          <List />
        </IconButton>
        <CustomDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          className="drawer-wrap"
        >
          <div 
            className="drawer-box"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
          >
            <AcountSidebarList />
          </div>
        </CustomDrawer>
      </div>
      <div className="accountSidebar-desktop">
        <AcountSidebarList />
      </div>
    </AccountSidebarResponsive>
  )
}

export default AccountSidebar
