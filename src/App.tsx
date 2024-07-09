// import React from "react";
import Mainpage from "./pages/Mainpage.tsx";
import Photoframe from "./pages/Photoframe.tsx";
import TakePhoto from "./pages/TakePhoto.tsx";
import ChoosePhoto from "./pages/ChoosePhoto.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/Photoframe" element={<Photoframe />} />
            <Route path="/TakePhoto" element={<TakePhoto />} />
            <Route path="/ChoosePhoto" element={<ChoosePhoto />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}
