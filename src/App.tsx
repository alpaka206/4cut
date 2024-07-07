// import React from "react";
import Mainpage from "./pages/Mainpage.tsx";
import Photoframe from "./pages/Photoframe.tsx";
import TakePhoto from "./pages/TakePhoto.tsx";
import ChoosePhoto from "./pages/ChoosePhoto.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";

export default function App() {
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
