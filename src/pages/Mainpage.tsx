import FilmPhoto from "../components/FilmPhoto/FilmPhoto.tsx";
import * as styles from "../css/MainPage.css.ts";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { photosState } from "../recoilState";

export default function MainPage() {
  const navigate = useNavigate();
  const setPhotos = useSetRecoilState(photosState);

  const handleTakePhotoClick = () => {
    setPhotos((prevState) => ({ ...prevState, actionType: "shoot" }));
    navigate("/SelectFrame");
  };

  const handleLoadPhotoClick = () => {
    setPhotos((prevState) => ({ ...prevState, actionType: "load" }));
    navigate("/SelectFrame");
  };
  return (
    <div>
      <div className={styles.MainPageLogo}>Recorday</div>
      <div className={styles.MainPageContainer}>
        <FilmPhoto
          date="사진 촬영하기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
          onClick={handleTakePhotoClick}
        />
        <FilmPhoto
          date="사진 불러오기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
          onClick={handleLoadPhotoClick}
        />
      </div>
      <div className={styles.MainPageContainer}>
        <FilmPhoto
          date="나만의 프레임 만들기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
        />
        <FilmPhoto
          date="프레임 구경하기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
        />
        {/* <img src="/assets/logo.svg" className={styles.Logo} /> */}
      </div>
    </div>
  );
}
