// Mainpage.js

// import React from "react";
import {
  first_photo,
  Logo,
  container_element_left,
  container_element_right,
} from "../css/Mainpage.css.ts";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={container_element_left}>
        <img src="/assets/logo.svg" className={Logo} />
        <div className={first_photo} onClick={() => navigate("/Photoframe")}>
          <img src="/assets/TakePhoto.svg" className={Logo} />
          사진 촬영하기
        </div>
        <div className={first_photo}>
          <img src="/assets/TakePhoto.svg" className={Logo} />
          테마 만들기
        </div>
      </div>
      <div className={container_element_right}>
        <div className={first_photo}>
          <img src="/assets/TakePhoto.svg" className={Logo} />
          가지고 있는 사진으로 만들기
        </div>
        <div className={first_photo}>
          <img src="/assets/TakePhoto.svg" className={Logo} />
          로그인하기
        </div>
        <img src="/assets/logo.svg" className={Logo} />
      </div>
    </div>
  );
}
