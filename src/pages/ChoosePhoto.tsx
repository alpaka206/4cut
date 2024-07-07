// src/components/ChoosePhoto.tsx
import React from "react";
import { useRecoilValue } from "recoil";
import { photoState } from "./TakePhoto";

const ChoosePhoto: React.FC = () => {
  const photos = useRecoilValue(photoState);

  return (
    <div className="container">
      <div>선택한 사진들</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photoUrl, index) => (
          <img
            key={index}
            src={photoUrl}
            alt={`Photo ${index + 1}`}
            style={{ width: "150px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChoosePhoto;
