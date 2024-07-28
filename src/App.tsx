import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import SelectFrame from "./pages/SelectFrame.tsx";
import SelectTheme from "./pages/SelectTheme.tsx";
import TakePhoto from "./pages/TakePhoto.tsx";
import SelectPhoto from "./pages/SelectPhoto.tsx";
import DownloadImage from "./pages/DownloadImage.tsx";

import "./App.css.ts";
import OpenExternalBrowser from "./OpenExternalBrowser.tsx";

// import setScreenHeight from "./utils/setScreenHeight.tsx";
// import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   setScreenHeight();
  //   window.addEventListener("resize", setScreenHeight);
  //   return () => {
  //     window.removeEventListener("resize", setScreenHeight);
  //   };
  // }, []);
  return (
    <RecoilRoot>
      {/* <div className="springStyle">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="springSegment"></div>
        ))}
      </div>
      <div className="redLine"></div>
      <div className="linesStyle"></div> 
      <div className="container"> */}
      <OpenExternalBrowser />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/SelectFrame" element={<SelectFrame />} />
          <Route path="/SelectTheme" element={<SelectTheme />} />
          <Route path="/TakePhoto" element={<TakePhoto />} />
          <Route path="/SelectPhoto" element={<SelectPhoto />} />
          <Route path="/DownloadImage" element={<DownloadImage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
