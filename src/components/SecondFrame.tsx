// src/components/SecondFrame.tsx

import React from "react";
import {
  SecondFramePropsStyle,
  rowStyle,
  logoStyle,
  imageStyle,
  image1Style,
  image2Style,
  image3Style,
  image4Style,
} from "../css/SecondFrame.css.ts";

interface SecondFrameProps {
  images: (string | undefined)[];
}

const SecondFrame: React.FC<SecondFrameProps> = ({ images }) => {
  return (
    <div className={SecondFramePropsStyle}>
      <div className={rowStyle}>
        {images[0] === undefined ? (
          <div key="0" className={image1Style}>
            hello
          </div>
        ) : (
          <img
            key="0"
            src={images[0]}
            alt="frame image1"
            className={`${imageStyle} ${image1Style}`}
          />
        )}
        {images[2] === undefined ? (
          <div key="2" className={image3Style}>
            hello
          </div>
        ) : (
          <img
            key="2"
            src={images[2]}
            alt="frame image3"
            className={`${imageStyle} ${image3Style}`}
          />
        )}
      </div>
      <div className={rowStyle}>
        {images[1] === undefined ? (
          <div key="1" className={image2Style}>
            hello
          </div>
        ) : (
          <img
            key="1"
            src={images[1]}
            alt="frame image2"
            className={`${imageStyle} ${image2Style}`}
          />
        )}
        {images[3] === undefined ? (
          <div key="3" className={image4Style}>
            hello
          </div>
        ) : (
          <img
            key="3"
            src={images[3]}
            alt="frame image4"
            className={`${imageStyle} ${image4Style}`}
          />
        )}
      </div>
      <img className={logoStyle} src="/assets/logo.svg" alt="logo" />
    </div>
  );
};

export default SecondFrame;
