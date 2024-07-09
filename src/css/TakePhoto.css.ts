import { style } from "@vanilla-extract/css";

export const Photoframe_TakePhoto = style({
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
