import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { photosState } from "../recoilState";
// import { Photoframe_Title } from "../css/Photoframe.css.ts";
import FirstFrame from "../components/FirstFrame/FirstFrame.tsx";
import SecondFrame from "../components/SecondFrame/SecondFrame.tsx";
import ThirdFrame from "../components/ThirdFrame/ThirdFrame.tsx";
import FourthFrame from "../components/FourthFrame/FourthFrame.tsx";

const ChoosePhoto: React.FC = () => {
  const photos = useRecoilValue(photosState);
  const [selectedPhotos, setSelectedPhotos] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const togglePhotoSelection = (photoUrl: string) => {
    const photoIndex = selectedPhotos.indexOf(photoUrl);
    if (photoIndex !== -1) {
      // Deselect the photo
      const newSelectedPhotos = [...selectedPhotos];
      newSelectedPhotos[photoIndex] = null;
      setSelectedPhotos(newSelectedPhotos);
    } else {
      // Select the photo if there is an empty spot
      const emptySpotIndex = selectedPhotos.indexOf(null);
      if (emptySpotIndex !== -1) {
        const newSelectedPhotos = [...selectedPhotos];
        newSelectedPhotos[emptySpotIndex] = photoUrl;
        setSelectedPhotos(newSelectedPhotos);
      }
    }
  };
  const renderFrame = () => {
    switch (photos.frame) {
      case "frame1":
        return (
          <FirstFrame
            images={[
              `${selectedPhotos[0]}`,
              `${selectedPhotos[1]}`,
              `${selectedPhotos[2]}`,
              `${selectedPhotos[3]}`,
            ]}
          />
        );
      case "frame2":
        return (
          <SecondFrame
            images={[
              `${selectedPhotos[0]}`,
              `${selectedPhotos[1]}`,
              `${selectedPhotos[2]}`,
              `${selectedPhotos[3]}`,
            ]}
          />
        );
      case "frame3":
        return (
          <ThirdFrame
            images={[
              `${selectedPhotos[0]}`,
              `${selectedPhotos[1]}`,
              `${selectedPhotos[2]}`,
              `${selectedPhotos[3]}`,
            ]}
          />
        );
      case "frame4":
        return (
          <FourthFrame
            images={[
              `${selectedPhotos[0]}`,
              `${selectedPhotos[1]}`,
              `${selectedPhotos[2]}`,
              `${selectedPhotos[3]}`,
            ]}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="container">
      {renderFrame()}
      <div>사진 선택</div>
      <div>
        {photos.images.map((photoUrl, index) => (
          <img
            key={index}
            src={photoUrl}
            alt={`Photo ${index + 1}`}
            style={{
              width: "150px",
              margin: "10px",
              border: selectedPhotos.includes(photoUrl)
                ? "2px solid blue"
                : "none",
              cursor: "pointer",
            }}
            onClick={() => togglePhotoSelection(photoUrl)}
          />
        ))}
      </div>
      {selectedPhotos.filter((photo) => photo !== null).length === 4 && (
        <div style={{ marginTop: "10px", color: "red" }}>
          최대 4개의 사진을 선택할 수 있습니다.
        </div>
      )}
    </div>
  );
};

export default ChoosePhoto;
