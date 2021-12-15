import React, { useState, useEffect, useMemo } from 'react'
import Slider from 'react-slick'
import { DetailSliderWrap } from './style/detailslider-style'
import Components from "src/components"
import { IconButton } from '@material-ui/core'

const DetailSlider = (props) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1 = useMemo(() => [], []);
  let slider2 = useMemo(() => [], []);
  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])
  
  return (  
    <>
      {
        props?.data ?
        <DetailSliderWrap>
          {
            props?.data?.length > 1 &&
            <Slider
              className="slide-nav"
              infinite={props?.data?.length > 7 ? true : false}
              asNavFor={nav1}
              ref={slider => (slider2 = slider)}
              slidesToShow={7}
              swipeToSlide={true}
              vertical={true}
              arrows={false}
              focusOnSelect={true}>
              {
                props?.data?.map((x, i) => (
                  <div key={i}>
                    <IconButton style={{padding: 0}}>
                      <Components.ImgWithFallback 
                        src={x} 
                        width={64} 
                        height={64} 
                        alt="detail image"
                      />
                    </IconButton>
                  </div>
                ))
              }
            </Slider>
          }
          <Slider
            className="main-slide"
            infinite={props?.data?.length > 7 ? true : false}
            arrows={false}
            asNavFor={nav2}
            ref={slider => (slider1 = slider)}
            // vertical={true}
            // centerMode={true}
            // verticalSwiping={true}
          >
            {
              props?.data?.length > 0 ?
              props?.data?.map((x, i) => (
                <div key={i} className="img-wrap">
                  {/* <Image src={x} width={480} height={480} layout="responsive" /> */}
                  <Components.ImgWithFallback 
                    src={x} 
                    // width={480} 
                    // height={480} 
                    alt="detail image"
                    layout="fill"
                  />
                </div>
                ))
                :
                <img src="/no-img.png" style={{width: '100%'}} alt="no img" />
            }
          </Slider>
        </DetailSliderWrap>
        :
        <img src="/no-img.png" style={{width: '100%'}} alt="no img" />
      }
    </>
  );
}
 
export default DetailSlider;