import { style } from "@vanilla-extract/css";

export const FilmPhoto = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F0EDE2",
  width: "20%",
  padding: "6px",
  textAlign: "center",
  border: " solid 1px ",
  aspectRatio: "1 / 1",
  fontSize: "10px",
});
export const FilmPhotoElement = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  width: "100%",
  height: "100%",
});
