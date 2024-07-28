import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DownloadImage: React.FC = () => {
  const location = useLocation();
  const imgDataUrl = location.state?.imgDataUrl;
  const [bwDataUrl, setBwDataUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imgDataUrl) {
      convertToBlackAndWhite(imgDataUrl);
    }
  }, [imgDataUrl]);

  const convertToBlackAndWhite = (dataUrl: string) => {
    const image = new Image();
    image.src = dataUrl;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }

      ctx.putImageData(imageData, 0, 0);
      setBwDataUrl(canvas.toDataURL("image/png"));
    };
  };

  return (
    <div>
      <div>다운로드</div>
      {imgDataUrl && (
        <>
          <img src={imgDataUrl} alt="Selected Frame" />
          <div>
            <a href={imgDataUrl} download="Recorday_color.png">
              컬러 이미지 다운로드
            </a>
          </div>
        </>
      )}
      {bwDataUrl && (
        <>
          <img src={bwDataUrl} alt="Black and White Frame" />
          <div>
            <a href={bwDataUrl} download="Recorday_black.png">
              흑백 이미지 다운로드
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default DownloadImage;
