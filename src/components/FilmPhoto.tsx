import * as styles from "../css/FilmPhoto.css";

interface FilmPhotoProps {
  date: string;
  rotate?: string;
  src: string;
  className?: string;
}

export default function FilmPhoto({
  date,
  rotate = "0deg",
  src,
  className,
}: FilmPhotoProps) {
  // 기본값을 0deg로 설정
  return (
    <div
      className={`${styles.FilmPhoto} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <img src={src} className={styles.FilmPhotoElement} alt="Logo" />
      {date}
    </div>
  );
}
