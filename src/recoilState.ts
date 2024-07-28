import { atom } from "recoil";

// export const photosState = atom<string[]>({
//   key: "photosState",
//   default: [],
// });

type PhotosState = {
  frame: string;
  actionType: string;
  images: string[];
};

// 객체 타입을 사용하여 atom 정의
export const photosState = atom<PhotosState>({
  key: "photosState",
  default: {
    frame: "frame1",
    actionType: "",
    images: [],
  },
});
