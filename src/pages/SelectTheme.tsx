// Mainpage.js

// import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../css/SelectTheme.css";
import { useSetRecoilState } from "recoil";
import { photosState } from "../recoilState.ts";

const themes = ["theme1", "theme2", "theme3", "theme4"];

export default function SelectTheme() {
  const navigate = useNavigate();
  const setChooseTheme = useSetRecoilState(photosState);

  const pickFrame = (frameSrc: string) => {
    setChooseTheme((prevFrame) => ({
      ...prevFrame,
      frame: frameSrc,
    }));
  };
  const CheckButton = () => {
    navigate("/takephoto"); // 선택 후 다른 페이지로 이동
  };

  return (
    <div>
      <div className={styles.Photoframe_frame_container}>
        {themes.map((theme) => (
          <div
            key={theme}
            onClick={() => pickFrame(theme)}
            className={styles.Photoframe_frame_element}
          >
            <img
              className={styles.Photoframe_frame_element_img}
              src={`/assets/${theme}.svg`}
              alt={`Frame ${theme}`}
            />
          </div>
        ))}
      </div>
      <div onClick={() => CheckButton()}>확인</div>
    </div>
  );
}
