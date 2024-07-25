import * as styles from "./FilmPhoto.css";

export interface FilmPhotoProps {
  date: string;
  rotate?: string;
  src: string;
  className?: string;
  onClick?: () => void;
}

export default function FilmPhoto({
  date,
  rotate = "0deg",
  src,
  className,
  onClick,
}: FilmPhotoProps) {
  // 기본값을 0deg로 설정
  return (
    <div
      className={`${styles.FilmPhoto} ${className || ""}`}
      onClick={onClick}
      style={{ transform: `rotate(${rotate})` }}
    >
      <img src={src} className={styles.FilmPhotoElement} alt="Logo" />
      {date}
    </div>
  );
}
