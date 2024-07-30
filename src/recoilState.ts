import { atom } from "recoil";

type PhotosState = {
  frame: string;
  actionType: string;
  Theme: string;
  images: string[];
  videos: string[];
};

export const photosState = atom<PhotosState>({
  key: "photosState",
  default: {
    frame: "frame1",
    actionType: "",
    Theme: "",
    images: [],
    videos: [],
  },
});
