// Mainpage.css.ts

import { style } from "@vanilla-extract/css";

export const MainPageLogo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "64px",
  "@media": {
    "(max-width: 768px)": {
      margin: "auto",
      marginLeft: "10%",
    },
  },
});
export const MainPageContainer = style({
  padding: "0 0 0 65px", // 좌우 패딩 조정
  display: "flex",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 768px)": {
      margin: "auto",
      // padding: "0", // 모바일에서 패딩 제거
    },
  },
});
export const MainPageFilmPhoto = style({
  width: "45%",
  paddingBottom: "20px",
  fontSize: "20px",
});
