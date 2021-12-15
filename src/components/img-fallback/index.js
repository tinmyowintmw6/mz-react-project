import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
  const { src, type, ...rest } = props;
  const [fallback, setFallback] = useState(false);

  return (
    <>
      {
        fallback ?
        <img 
          src={`${type === 'banner' ? '/banner-no-img.png' : '/no-img.png'}`} 
          alt={props?.data?.name}
          style={
            type === "subcate" ?
            {width: '40px', height: '40px'} :
            type === "cart" || type === "order" ?
            {width: '80px', height: '80px'} :
            {width: '100%'}
          }
        />
        :
        <Image
          alt="mz"
          {...rest}
          src={src}
          onError={() => {
            setFallback(true);
          }}
        />
      }
    </>
  );
};

export default ImageWithFallback;