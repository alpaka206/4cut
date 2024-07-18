import * as styles from "../css/FilmPhoto.css";

interface FilmPhotoProps {
  date: string;
  rotate?: string; // rotate prop 추가
}

export default function FilmPhoto({ date, rotate = "0deg" }: FilmPhotoProps) {
  // 기본값을 0deg로 설정
  return (
    <div
      className={styles.FilmPhoto}
      style={{ transform: `rotate(${rotate})` }}
    >
      {" "}
      {/* 인라인 스타일로 회전 각도 적용 */}
      <img
        src="./assets/logo.svg"
        className={styles.FilmPhotoElement}
        alt="Logo"
      />
      {date}
    </div>
  );
}
