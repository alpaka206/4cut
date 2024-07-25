import FilmPhoto from "../components/FilmPhoto/FilmPhoto.tsx";
import * as styles from "../css/Mainpage.css.ts";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.MainPageLogo}>
        Recorday
        {/* <img src="/assets/logo.svg" className={styles.Logo} /> */}
      </div>
      <div className={styles.MainPageContainer}>
        <FilmPhoto
          date="사진 촬영하기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
          onClick={() => navigate("/Photoframe")}
        />
        <FilmPhoto
          date="사진 불러오기"
          rotate="0deg"
          src={`/assets/TakePhoto.svg`}
          className={styles.MainPageFilmPhoto}
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
