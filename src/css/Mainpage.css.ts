// Mainpage.css.ts

import { style, globalStyle } from "@vanilla-extract/css";

globalStyle(".container", {
  width: "550px",
  margin: "auto",
  padding: "20px 0",
  backgroundColor: "#FF8EA2",
  display: "flex",
  justifyContent: "space-around", // 요소 사이의 공간을 균등하게 배치
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      // padding: "0 10px", // 좌우 여백 줄이기
      // display: "initial",
      flexDirection: "column",
    },
  },
});

export const container_element_left = style({
  width: "44%",
  padding: "0 2% 0 4%", // 좌우 패딩 조정
  "@media": {
    "(max-width: 768px)": {
      margin: "auto",
      width: "85%",
      padding: "0", // 모바일에서 패딩 제거
    },
  },
});

export const container_element_right = style({
  width: "44%",
  padding: "0 4% 0 2%", // 좌우 패딩 조정
  "@media": {
    "(max-width: 768px)": {
      margin: "-16px auto auto auto",
      width: "85%",
      padding: "0",
    },
  },
});

export const Logo = style({
  marginTop: "16px", // 로고의 상단 여백 추가
  color: "#ffffff",
  fontSize: "64px",
});

export const first_photo = style({
  width: "100%",
  paddingTop: "100%", // 너비의 1:1 비율로 높이 설정
  margin: "16px 0", // 상하 여백 추가
  backgroundColor: "#FFFFFF",
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      margin: "16px 0 16px 0", // 상하 여백 추가
      paddingTop: "60%", // 모바일에서는 너비의 2:1 비율로 높이 설정
    },
  },
});
