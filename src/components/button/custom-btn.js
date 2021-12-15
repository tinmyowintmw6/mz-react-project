import React from 'react'
import { Button } from '@material-ui/core'
// import styled from 'styled-components'
import { styled } from '@material-ui/system'
import { colors } from 'src/styles/constants'
import { ShoppingCart } from '@material-ui/icons'
import Link from 'next/link'
import BtnLoading from './btn-loading'

const ColorButton = styled(Button)`
    background: ${props => props?.color_data === 'primary' ? colors.primary : props?.color_data === 'gray' ? '#8C8C96' : 'transparent'};
    border-color: ${props => props?.color_data === 'primary' || props?.color_data === 'gray' ? 'transparent' : colors.primary};
    color: ${props => props?.color_data === 'transparent' && colors.primary};
    border-width: 2px;
    border-style: solid;
    font-size: 16px;
    font-family: 'fontStyle-bold' !important;
    text-transform: none;
    font-weight: unset;
    border-radius: 4px;
    line-height: normal;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    &.lg {
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px;
      @media (max-width: 991px) {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    &.md {
      min-width: 245px;
      padding-top: 12px;
      padding-bottom: 12px;
      @media (max-width: 991px) {
        min-width: 180px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    &.sm {
      min-width: 165px;
      padding-top: 10px;
      padding-bottom: 10px;
      @media (max-width: 991px) {
        min-width: 150px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }
    &:hover {
      background: ${props => props?.color_data === 'primary' ? '#AD171D': props?.color_data === 'gray' ? '#5C5C61' : 'rgba(232, 29, 37, .08)'};
      border-color: ${props => props?.color_data === 'primary' || props?.color_data === 'gray' ? 'transparent' : '#AD171D'};
      border-width: 2px;
    }
  `

const CustomButton = (props) => {
  //props object to pass to button
  // cartIcon: true, 
  // size: 'md', 
  // color: 'primary', 
  // text: 'Add to cart'
  // link: '/'
  // console.log(`props`, props)
  return (
    <>
      {
        props?.data?.link ?
        <Link href={props?.data?.link} passHref>
          <a>
            <ColorButton 
              variant={props?.data?.color !== 'transparent' ? 'contained' : 'outlined'}
              className={props?.data?.size === 'lg'? `lg` : props?.data?.size === 'sm' ? 'sm' : 'md' } 
              startIcon={props?.data?.cartIcon && <ShoppingCart />}
              color_data={props?.data?.color}
            >
              {props?.data?.text}
            </ColorButton>
          </a>
        </Link>
        :
        <ColorButton 
          variant={props?.data?.color !== 'transparent' ? 'contained' : 'outlined'}
          className={props?.data?.size === 'lg'? `lg` : props?.data?.size === 'sm' ? 'sm' : 'md' } 
          startIcon={props?.data?.cartIcon && <ShoppingCart />}
          color_data={props?.data?.color}
          onClick={props?.onClick}
          type={props?.data?.type === "submit" ? "submit" : "button"}
          disabled={props?.data?.disabled === true ? true : false}
        >
          {props?.data?.text}
          {
            props?.data?.loading &&
            <BtnLoading style={{
              width: 20,
              height: 20,
              border: '3px solid rgba(232, 29, 37, .23)',
              borderRight: '3px solid rgba(232, 29, 37, .85)',
            }} />
          }
        </ColorButton>
      }
    </>
  );
}
 
export default CustomButton;