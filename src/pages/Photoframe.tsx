// Mainpage.js

// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Photoframe_Title,
  Photoframe_picked_frame_img,
  Photoframe_picked_frame,
  Photoframe_frame_container,
  Photoframe_frame_element,
  Photoframe_frame_element_img,
} from "../css/Photoframe.css.ts";
import { useRecoilState } from "recoil";
import { photosState } from "../recoilState.ts";

const frames = ["frame1", "frame2", "frame3", "frame4"];

export default function Photoframe() {
  const navigate = useNavigate();
  const [chooseFrame, setChooseFrame] = useRecoilState(photosState);

  const pickFrame = (frameSrc: string) => {
    setChooseFrame((prevFrame) => ({
      ...prevFrame,
      frame: frameSrc,
    }));
    //  navigate("/takephoto"); // 선택 후 다른 페이지로 이동
  };
  const CheckButton = () => {
    navigate("/takephoto"); // 선택 후 다른 페이지로 이동
  };

  return (
    <div className="container">
      <div className={Photoframe_Title}>
        프레임 선택
        <div className={Photoframe_picked_frame}>
          <img
            className={Photoframe_picked_frame_img}
            src={`/assets/${chooseFrame.frame}.svg`}
          />
        </div>
        <div className={Photoframe_frame_container}>
          {frames.map((frame) => (
            <div
              key={frame}
              onClick={() => pickFrame(frame)}
              className={Photoframe_frame_element}
            >
              <img
                className={Photoframe_frame_element_img}
                src={`/assets/${frame}.svg`}
                alt={`Frame ${frame}`}
              />
            </div>
          ))}
        </div>
        <div onClick={() => CheckButton()}>확인</div>
      </div>
    </div>
  );
}
