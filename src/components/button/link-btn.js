import React from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/system'
import { colors } from 'src/styles/constants'
import Link from 'next/link'

const LinkButtonContainer = styled(Button)`
  color: ${colors.primary};
  font-size: 16px;
  font-family: 'fontStyle-bold';
  text-decoration: none;
  position: relative;
  text-transform: none;
  letter-spacing: unset;
  padding: 0;
  @media (max-width: 991px) {
    font-size: 14px;
    min-width: 54px;
  }
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
`

const LinkButton = (props) => {
  return (
    <>
      {
        props?.link ?
        <Link href={props?.link} passHref>
          <a>
            <LinkButtonContainer 
              startIcon={props?.icon}
            >
              
              {props?.text}
            </LinkButtonContainer>
          </a>
        </Link>
        :
        <LinkButtonContainer 
          startIcon={props?.icon}
        >
          {props?.text}
        </LinkButtonContainer>
      }
      
    </>
  );
}
 
export default LinkButton;