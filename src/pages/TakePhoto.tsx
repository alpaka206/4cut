// src/components/TakePhoto.tsx
import React, { useState, useEffect, useRef } from "react";
import { Photoframe_Title } from "../css/Photoframe.css.ts";
import { atom, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// Recoil atom 정의
export const photoState = atom<string[]>({
  key: "photoState",
  default: [],
});

export default function TakePhoto() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const webcamRef = useRef<HTMLVideoElement>(null);
  const intervalIdRef = useRef<number | null>(null); // Ref for intervalId
  const [photos, setPhotos] = useRecoilState(photoState);

  const takePicture = () => {
    if (webcamRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = webcamRef.current.videoWidth;
      canvas.height = webcamRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(webcamRef.current, 0, 0);

      const photoUrl = canvas.toDataURL("image/jpeg");
      setPhotos((prevPhotos) => [...prevPhotos, photoUrl]);
      setCount(count + 1);

      if (count === 7) {
        clearInterval(intervalIdRef.current!); // Stop interval after 8 photos
        navigate("./ChoosePhoto");
      }
    }
  };

  useEffect(() => {
    intervalIdRef.current = window.setInterval(() => {
      takePicture();
    }, 10000);

    return () => clearInterval(intervalIdRef.current!); // Clean up interval
  }, [takePicture]); // Depend on takePicture function

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopCamera = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      const stream = webcamRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="container">
      <div className={Photoframe_Title}>사진촬영</div>
      <video
        ref={webcamRef}
        autoPlay
        style={{ display: "block", margin: "10px auto", maxWidth: "100%" }}
      />
      <div>타이머: {`${time} 초 남음`}</div>
    </div>
  );
}
