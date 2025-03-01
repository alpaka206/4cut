// src/components/SecondFrame.tsx

import React from "react";
import {
  ThirdFramePropsStyle,
  logoStyle,
  image1Style,
  image2Style,
  image3Style,
  image4Style,
} from "./ThirdFrame.css.ts";

interface ThirdFrameProps {
  images: (string | undefined)[];
}

const ThirdFrame: React.FC<ThirdFrameProps> = ({ images }) => {
  return (
    <div className={ThirdFramePropsStyle}>
      <img className={logoStyle} src="/assets/logo.svg" alt="logo" />
      {images.map((image, index) =>
        image === undefined ? (
          <div key={index}>hello</div>
        ) : (
          <img
            key={index}
            src={image}
            alt={`frame image`}
            className={
              index === 0
                ? image1Style
                : index === 1
                  ? image2Style
                  : index === 2
                    ? image3Style
                    : image4Style
            }
          />
        )
      )}
    </div>
  );
};

export default ThirdFrame;
