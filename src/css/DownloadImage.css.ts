// Mainpage.css.ts

import { style } from "@vanilla-extract/css";

export const Photoframe_picked_frame = style({
  display: "flex",
  width: "180px",
  height: "250px",
  margin: "auto",
  marginBottom: "20px",
  "@media": {
    "(max-width: 768px)": {
      height: "220px",
      width: "100%",
    },
  },
});

export const Photoframe_picked_frame_img = style({
  width: "100%",
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
