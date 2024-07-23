import { style } from "@vanilla-extract/css";

export const LoginTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "10%",
  padding: "45px 0 30px 0",
  borderRadius: "24px",
  "@media": {
    "(max-width: 768px)": {
      marginLeft: "14%",
    },
  },
});

export const LoginContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: "15%",
  width: "calc(150% - 60px)",

  padding: "30px",
  backgroundColor: "#F0EDE2",
  borderRadius: "24px",
  aspectRatio: "1 / 1",
  "@media": {
    "(max-width: 768px)": {
      width: "calc(100% - 60px)",
    },
  },
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
export const LoginCenter = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});
export const LoginBottom = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "10%",
  padding: "30px 0",
  borderRadius: "24px",
  "@media": {
    "(max-width: 768px)": {
      marginLeft: "14%",
    },
  },
});

export const LoginCenterFilmPhoto = style({
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});
export const specialFilmPhoto = style({
  width: "100%",
});
