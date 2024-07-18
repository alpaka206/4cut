// import React from "react";
import Mainpage from "./pages/Mainpage.tsx";
import Loginpage from "./pages/Loginpage.tsx";
import Photoframe from "./pages/Photoframe.tsx";
import TakePhoto from "./pages/TakePhoto.tsx";
import ChoosePhoto from "./pages/ChoosePhoto.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css.ts";
import { RecoilRoot } from "recoil";
import setScreenHeight from "./utils/setScreenHeight.tsx";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);
    return () => {
      window.removeEventListener("resize", setScreenHeight);
    };
  }, []);
  return (
    <RecoilRoot>
      <div className="springStyle">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="springSegment"></div>
        ))}
      </div>
      <div className="redLine"></div>
      <div className="linesStyle"></div> {/* 줄 스타일을 적용 */}
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/Mainpage" element={<Mainpage />} />
            <Route path="/Photoframe" element={<Photoframe />} />
            <Route path="/TakePhoto" element={<TakePhoto />} />
            <Route path="/ChoosePhoto" element={<ChoosePhoto />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}
