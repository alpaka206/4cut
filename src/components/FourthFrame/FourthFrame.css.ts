// src/css/SecondFrame.css.ts

import { style } from "@vanilla-extract/css";

export const FourthFramePropsStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto auto auto",
  gap: "10px",
  alignItems: "center",
  justifyItems: "center",
  padding: "20px",
});

export const logoStyle = style({
  gridColumn: "span 2",
  justifySelf: "center",
});

export const image1Style = style({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
});

export const image2Style = style({
  gridColumn: "1 / 2",
  gridRow: "3 / 4",
});

export const image3Style = style({
  gridColumn: "2 / 3",
  gridRow: "2 / 3",
});

export const image4Style = style({
  gridColumn: "2 / 3",
  gridRow: "3 / 4",
});
