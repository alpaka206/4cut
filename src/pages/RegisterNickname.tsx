import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import * as styles from "../css/RegisterNickname.css";
import { useNavigate } from "react-router-dom";

export default function RegisterNickname({
  onNicknameRegistered,
}: {
  onNicknameRegistered: () => void;
}) {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(true);

  const checkNickname = async () => {
    try {
      const response = await axiosInstance.post("/users/check-nickname", {
        nickname: nickname,
      });

      if (response.data.success) {
        setIsNicknameValid(true);
        setError("");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsNicknameValid(false);
      setError("이미 사용 중인 닉네임입니다.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNicknameValid) {
      setError("이미 사용 중인 닉네임입니다.");
      return;
    }
    try {
      const response = await axiosInstance.post("/users/register-nickname", {
        nickname: nickname,
      });

      console.log("Success:", response.data);
      // 닉네임 등록이 성공하면 부모 컴포넌트에 알림
      onNicknameRegistered();
      navigate("/mainpage");
    } catch (error) {
      console.error("Error:", error);
      setError("닉네임 등록에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1 className={styles.Nicknametitle}>닉네임 등록</h1>
      <form onSubmit={handleSubmit} className={styles.Nicknameform}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onBlur={checkNickname}
          placeholder="닉네임을 입력하세요"
          className={styles.Nicknameinput}
        />
        <button type="submit" className={styles.Nicknamebutton}>
          등록
        </button>
      </form>
      {error && <p className={styles.Nicknameerror}>{error}</p>}
    </div>
  );
}
