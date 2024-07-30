import { useState } from "react";
import FilmPhoto from "../components/FilmPhoto/FilmPhoto";
import * as styles from "../css/LoginPage.css";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import RegisterNickname from "./RegisterNickname";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const rotations = ["0deg", "2deg", "-2deg", "4deg"];
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccess = async (res: CredentialResponse) => {
    // console.log(res);

    try {
      const response = await axios.post(
        "https://recordayser.vercel.app/api/users/google-login",
        // "http://localhost:5000/api/users/google-login",
        {
          token: res.credential,
        }
      );

      console.log("Success:", response.data);
      // 로그인 성공 시 토큰을 로컬 스토리지에 저장
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      // 로그인 성공 시 상태 업데이트
      // 역할에 따라 리다이렉트
      if (response.data.role === "ROLE_USER") {
        navigate("/mainpage");
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  const handleNicknameRegistered = () => {
    console.log("Nickname registered");
    navigate("/mainpage");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        {isAuthenticated ? (
          <RegisterNickname onNicknameRegistered={handleNicknameRegistered} />
        ) : (
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
                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
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
        )}
      </div>
    </GoogleOAuthProvider>
  );
}
