// src/components/FirstFrame.tsx

import React from "react";
import { FirstFrame as FirstFrameStyle } from "../css/FirstFrame.css.ts";

interface FirstFrameProps {
  images: (string | undefined)[];
}

const FirstFrame: React.FC<FirstFrameProps> = ({ images }) => {
  return (
    <div className={FirstFrameStyle}>
      {images.map((image, index) =>
        image === "null" ? (
          <div key={index}>hello</div>
        ) : (
          <img key={index} src={image} alt={`frame image`} />
        )
      )}
      <img src="/assets/logo.svg" alt="logo" />
    </div>
  );
};

export default FirstFrame;
