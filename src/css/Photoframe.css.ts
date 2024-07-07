// Mainpage.css.ts

import { style } from "@vanilla-extract/css";

export const Photoframe_Title = style({
  fontSize: "32px",
  "@media": {
    "(max-width: 768px)": {
      //   width: "100%",
      //   // padding: "0 10px", // 좌우 여백 줄이기
      //   // display: "initial",
      //   flexDirection: "column",
    },
  },
});

export const Photoframe_Top__element = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginTop: "20px",
});

export const Photoframe_first = style({
  width: "70px",
});
export const Photoframe_third = style({
  width: "200px",
});

export const Photoframe_second = style({
  width: "150px",
});

export const Photoframe_fourth = style({
  width: "150px",
});
