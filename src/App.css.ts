import { globalStyle } from "@vanilla-extract/css";

globalStyle("#root", {
  margin: "0 auto",
  textAlign: "center",
});

globalStyle("body", {
  width: "600px",
  minHeight: "100vh",
  margin: "auto",
  padding: 0,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: "#EAE2CE",
  backgroundSize: "100% 20px",
  backgroundAttachment: "local",
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
    },
  },
});

globalStyle(".container", {
  // width: "90%",
  margin: "0 auto",
  padding: "20px",
  // backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});
globalStyle(".springStyle", {
  position: "absolute",
  top: 0,
  left: "20px", // 스프링 위치 조정
  height: "100vh",
  width: "20px", // 스프링 너비 조정
  backgroundImage: `linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    #000 30%,
    #000 70%,
    transparent 70%,
    transparent 100%
  )`,
  backgroundSize: "100% 30px", // 스프링 간격 조정
  "@media": {
    "(max-width: 768px)": {
      left: "15px", // 스프링 위치 조정
    },
  },
});
globalStyle(".linesStyle", {
  position: "absolute",
  top: 0,
  // left: 0,
  right: 0,
  bottom: 0,
  width: "92%",
  backgroundImage: `linear-gradient(
    to bottom,
    transparent 0%,
    transparent 95%,
    #419FB6 95%,
    #419FB6 100%
  )`,
  backgroundSize: "100% 20px", // 줄 간격 조정
  zIndex: -1,
  "@media": {
    "(max-width: 768px)": {
      width: "88%",
    },
  },
});
globalStyle(".redLine", {
  position: "absolute",
  top: 0,
  left: "60px", // 노트 왼쪽 여백 조정
  height: "100vh",
  width: "2px",
  backgroundColor: "rgba(255, 0, 0, 0.5)",
  boxShadow: "0 0 5px rgba(255, 0, 0, 0.5)",
  zIndex: -1,
});
