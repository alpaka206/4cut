// src/css/SecondFrame.css.ts

import { style } from "@vanilla-extract/css";

export const SecondFramePropsStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
});

export const rowStyle = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  position: "relative",
});

export const imageStyle = style({
  width: "150px",
  height: "auto",
});

export const logoStyle = style({
  marginTop: "20px",
});

export const image1Style = style({
  position: "absolute",
  left: "0",
  top: "20px",
});

export const image2Style = style({
  position: "absolute",
  right: "0",
  top: "20px",
});

export const image3Style = style({
  position: "absolute",
  left: "0",
  top: "0",
});

export const image4Style = style({
  position: "absolute",
  right: "0",
  top: "0",
});
