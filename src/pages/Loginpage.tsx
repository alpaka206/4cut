import FilmPhoto from "../components/FilmPhoto";
import * as styles from "../css/LoginPage.css";
// import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  //   const navigate = useNavigate();
  const rotations = ["0deg", "2deg", "-2deg", "4deg"];
  return (
    <div>
      <div className={styles.LoginTop}>
        {rotations.map((rotate, index) => (
          <FilmPhoto
            key={index}
            date="2023.09.10"
            rotate={rotate}
            src={`./assets/peopleimage/cat${index + 1}.png`}
          />
        ))}
      </div>
      <div className={styles.LoginCenter}>
        <div className={styles.LoginContainer}>
          <img src="./assets/logo.svg" className={styles.logo} />
          <h1 className={styles.title}>Photo Booth</h1>
          <button className={styles.button}>Google 로그인</button>
        </div>
        <div className={styles.LoginCenterFilmPhoto}>
          <FilmPhoto
            date="2023.09.10"
            rotate="4deg"
            src={`./assets/peopleimage/dog.png`}
            className={styles.specialFilmPhoto}
          />
        </div>
      </div>
      <div className={styles.LoginTop}>
        {rotations.map((rotate, index) => (
          <FilmPhoto
            key={index}
            date="2023.09.10"
            rotate={rotate}
            src={`./assets/peopleimage/love${index + 1}.png`}
          />
        ))}
      </div>
    </div>
  );
}
