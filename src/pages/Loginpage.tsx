import FilmPhoto from "../components/FilmPhoto";
import * as styles from "../css/LoginPage.css";
// import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  //   const navigate = useNavigate();

  return (
    <div>
      <div className={styles.LoginTop}>
        <FilmPhoto />
        <FilmPhoto />
        <FilmPhoto />
        <FilmPhoto />
      </div>
      <div className={styles.LoginContainer}>
        <img src="./assets/logo.svg" className={styles.logo} />
        <h1 className={styles.title}>Photo Booth</h1>
        <button className={styles.button}>Google 로그인</button>
      </div>
      {/* <div className={styles.photoSection}>
        {Array.from({ length: 16 }).map((_, index) => (
          <div className={styles.photo} key={index}>
            <img
              className={styles.photoImg}
              src={`path_to_photo_${index + 1}`}
              alt={`Photo ${index + 1}`}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
