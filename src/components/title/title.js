import React from 'react'
import Link from 'next/link'
import { TitleWrap } from './style/title-style'
import Components from "src/components"
import Image from "next/image"
import { Button } from '@material-ui/core'

const Title = ({props}) => {
  // console.log(`props`, props)
  return (  
    <TitleWrap>
      <div className="title-wrap">
        {
          props?.icon &&              
          <div className="icon-wrap">
            <Image src={props?.icon} width={24} height={24} alt="title's icon" />
          </div>
        }
        <h2 className="title">{props?.title}</h2>
        {
          props?.countDown &&
          <><span style={{marginRight: '10px'}}></span> <Components.CountDownTimer props={props?.countDown}/></>
        }
      </div>
      {
        props?.viewAll &&
        <Components.LinkButton link={props?.viewAll} text="View All" />
      }
      {/* {
        props?.upComing &&
        <span>
          Upcoming Sales: 4 July (5:30PM)
        </span>
      } */}
    </TitleWrap> 
  );
}
 
export default Title;