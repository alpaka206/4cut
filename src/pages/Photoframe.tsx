// Mainpage.js

// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Photoframe_Title,
  Photoframe_Top__element,
  Photoframe_first,
  Photoframe_third,
  Photoframe_second,
  Photoframe_fourth,
} from "../css/Photoframe.css.ts";

export default function Photoframe() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={Photoframe_Title}>
        프레임 선택
        <div className={Photoframe_Top__element}>
          <div onClick={() => navigate("/TakePhoto")}>
            <img className={Photoframe_first} src="/assets/frame1.svg" />
          </div>
          <div onClick={() => navigate("/TakePhoto")}>
            <img className={Photoframe_third} src="/assets/frame3.svg" />
          </div>
        </div>
        <div className={Photoframe_Top__element}>
          <div onClick={() => navigate("/TakePhoto")}>
            <img className={Photoframe_second} src="/assets/frame2.svg" />
          </div>
          <div onClick={() => navigate("/TakePhoto")}>
            <img className={Photoframe_fourth} src="/assets/frame4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
