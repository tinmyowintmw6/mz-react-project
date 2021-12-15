import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/styles/constants'

const Placeholder = styled.p`
  position: relative;
  width: ${props => props.width === 'auto' ? 'auto' : props.width + 'px'};
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  opacity: ${props => props.opacity};
  ${props => props.data && `background: url("${props.data}") no-repeat center / contain`};
  margin: 0;
  &:before {
    content: "${props => !props.data && props.text}";
    color: ${colors.paraText};
    font-size: 20px;
    font-family: 'fontStyle-bold';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const CustomPlaceholder = props => {
  return (
    <Placeholder {...props} />
  )
}

export default CustomPlaceholder
