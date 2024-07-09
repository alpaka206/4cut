// src/components/TakePhoto.tsx
import React, { useState, useEffect, useRef } from "react";
import { Photoframe_TakePhoto } from "../css/TakePhoto.css.ts";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { photosState } from "../recoilState.ts";

const TakePhoto: React.FC = () => {
  const navigate = useNavigate();
  const [takePhotos, setTakePhotos] = useRecoilState(photosState);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const webcamRef = useRef<HTMLVideoElement>(null);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    setTakePhotos((prevState) => ({
      ...prevState,
      images: [],
    }));
  }, [setTakePhotos]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    intervalIdRef.current = window.setInterval(() => {
      takePicture();
      setTimer(10);
      // }, 10000);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current!);
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (count === 8) {
      navigate("/ChoosePhoto");
    }
  }, [count, navigate]);

  const takePicture = () => {
    if (webcamRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = webcamRef.current.videoWidth;
      canvas.height = webcamRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(webcamRef.current, 0, 0);

      const photoUrl = canvas.toDataURL("image/jpeg");
      setTakePhotos((prevPhotos) => ({
        ...prevPhotos,
        images: [...prevPhotos.images, photoUrl],
      }));
      setCount((prevCount) => prevCount + 1);

      // if (count === 7) {
      //   clearInterval(intervalIdRef.current!); // Stop interval after 8 photos
      // }
    }
  };

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
      <div>
        <div className={Photoframe_TakePhoto}>사진촬영 {timer} </div>
        <video
          ref={webcamRef}
          autoPlay
          style={{ display: "block", margin: "10px auto", maxWidth: "100%" }}
        />
        {count}/8
      </div>
    </div>
  );
};

export default TakePhoto;
