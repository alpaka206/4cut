// Mainpage.js

// import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../css/SelectFrame.css.ts";
import { useRecoilState } from "recoil";
import { photosState } from "../recoilState.ts";

const frames = ["frame1", "frame2", "frame3", "frame4"];

export default function SelectFrame() {
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
    navigate("/ChooseTheme"); // 선택 후 다른 페이지로 이동
  };

  return (
    <div>
      <div className={styles.Photoframe_picked_frame}>
        <img
          className={styles.Photoframe_picked_frame_img}
          src={`/assets/${chooseFrame.frame}.svg`}
        />
      </div>
      프레임 선택
      <div className={styles.Photoframe_frame_container}>
        {frames.map((frame) => (
          <div
            key={frame}
            onClick={() => pickFrame(frame)}
            className={styles.Photoframe_frame_element}
          >
            <img
              className={styles.Photoframe_frame_element_img}
              src={`/assets/${frame}.svg`}
              alt={`Frame ${frame}`}
            />
          </div>
        ))}
      </div>
      <div onClick={() => CheckButton()}>확인</div>
    </div>
  );
}
