// Mainpage.css.ts

import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  width: "550px",
  height: "100vh",
  margin: "auto",
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
    },
  },
});

export const container_element_left = style({
  width: "44%",
  padding: "0 2% 0 4%", // 좌우 패딩 조정
  height: "calc(100vh - 81px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 768px)": {
      margin: "auto",
      // padding: "0", // 모바일에서 패딩 제거
    },
  },
});

export const container_element_right = style({
  width: "44%",
  padding: "0 4% 0 2%", // 좌우 패딩 조정
  height: "calc(100vh - 81px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 768px)": {
      margin: "0 auto ",
      // padding: "0",
    },
  },
});

export const Logo = style({
  marginTop: "16px", // 로고의 상단 여백 추가
  color: "#ffffff",
  width: "100%",
});

export const first_photo = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // paddingTop: "100%", // 너비의 1:1 비율로 높이 설정
  // margin: "16px 0", // 상하 여백 추가
  backgroundColor: "#FFFFFF",
  "@media": {
    "(max-width: 768px)": {
      paddingTop: "100%", // 너비의 1:1 비율로 높이 설

      margin: "16px 0 0 0", // 상하 여백 추가
    },
  },
});
