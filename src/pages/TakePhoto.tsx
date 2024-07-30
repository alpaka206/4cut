import React, { useState, useEffect, useRef } from "react";
import { Photoframe_TakePhoto } from "../css/TakePhoto.css.ts";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { photosState } from "../recoilState.ts";

const TakePhoto: React.FC = () => {
  const navigate = useNavigate();
  const setTakePhotos = useSetRecoilState(photosState);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const webcamRef = useRef<HTMLVideoElement>(null);
  const intervalIdRef = useRef<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setTakePhotos((prevState) => ({
      ...prevState,
      images: [],
      videos: [],
    }));
  }, [setTakePhotos]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    intervalIdRef.current = window.setInterval(() => {
      takePicture();
      stopRecording();
      setTimer(10);
      if (count < 7) {
        startRecording();
      }
    }, 10000);

    return () => {
      clearInterval(intervalIdRef.current!);
      clearInterval(countdown);
    };
  }, [count]);

  useEffect(() => {
    if (count === 8) {
      // stopRecording();
      navigate("/SelectPhoto");
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
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }
      startRecording();
      // startRecording(stream);
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

  const startRecording = () => {
    if (webcamRef.current) {
      const stream = webcamRef.current.srcObject as MediaStream;
      const options = { mimeType: "video/webm; codecs=vp9" };
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        const videoUrl = URL.createObjectURL(blob);
        setTakePhotos((prevPhotos) => ({
          ...prevPhotos,
          videos: [...prevPhotos.videos, videoUrl],
        }));
        recordedChunksRef.current = [];
      };

      mediaRecorder.start();
    }
  };

  // const stopRecording = () => {
  //   if (mediaRecorderRef.current) {
  //     mediaRecorderRef.current.stop();
  //     const blob = new Blob(recordedChunksRef.current, {
  //       type: "video/webm",
  //     });
  //     const videoUrl = URL.createObjectURL(blob);
  //     setTakePhotos((prevPhotos) => ({
  //       ...prevPhotos,
  //       videos: [...prevPhotos.videos, videoUrl],
  //     }));
  //     console.log(videoUrl);
  //   }
  // };
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
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
