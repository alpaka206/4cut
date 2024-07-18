import { style, globalStyle } from "@vanilla-extract/css";

globalStyle(".container", {
  backgroundColor: "#FF8EA2",
  justifyContent: "center",
  padding: "40px 0",
  "@media": {
    "(max-width: 768px)": {
      // width: "100%",
      // padding: "0 10px", // 좌우 여백 줄이기
      // display: "initial",
    },
  },
});

export const LoginContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  width: "60%",
  backgroundColor: "#EDEAE0",
  borderRadius: "24px",
});

export const logo = style({
  width: "70%",
  marginTop: "10%",
});

export const title = style({
  fontSize: "24px",
  margin: "10px 0",
  color: "#ff69b4",
  textShadow: "2px 2px #ff1493",
});

export const loginSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px 0",
});

export const button = style({
  backgroundColor: "#4285F4",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  margin: "5px 0",
  cursor: "pointer",
  width: "80%",
  fontSize: "16px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  selectors: {
    "&:hover": {
      backgroundColor: "#357ae8",
    },
  },
});

export const photoSection = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
  padding: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
});

export const photo = style({
  width: "70px",
  height: "70px",
  overflow: "hidden",
  borderRadius: "5px",
  border: "2px solid #ff69b4",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  position: "relative",
  cursor: "pointer",
  background: "#f5f5f5",
});

export const photoImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const decorativeElements = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  backgroundImage: "url('path_to_your_decorative_elements_image')",
  backgroundSize: "cover",
  zIndex: -1,
});
