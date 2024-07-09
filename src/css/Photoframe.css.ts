// Mainpage.css.ts

import { style } from "@vanilla-extract/css";

export const Photoframe_Title = style({
  fontSize: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 768px)": {
      //   width: "100%",
      //   // padding: "0 10px", // 좌우 여백 줄이기
      //   // display: "initial",
      //   flexDirection: "column",
    },
  },
});

export const Photoframe_picked_frame = style({
  backgroundColor: "#ffffff",
  width: "550px",
  height: "300px",
  margin: "20px 0",
  "@media": {
    "(max-width: 768px)": {
      height: "220px",
      width: "100%",
    },
  },
});

export const Photoframe_picked_frame_img = style({
  marginTop: "20px",
  height: "260px",
  "@media": {
    "(max-width: 768px)": {
      height: "180px",
    },
  },
});

export const Photoframe_frame_container = style({
  display: "flex",
  // alignItems: "center",
  backgroundColor: "#ffffff",
  padding: "10px",
});
export const Photoframe_frame_element = style({
  width: "21%",
  height: "21%",
  padding: "2%",
});
export const Photoframe_frame_element_img = style({
  width: "100%",
});
