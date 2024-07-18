import * as styles from "../css/FilmPhoto.css";

interface FilmPhotoProps {
  date: string;
}

export default function FilmPhoto({ date }: FilmPhotoProps) {
  return (
    <div className={styles.FilmPhoto}>
      <img
        src="./assets/logo.svg"
        className={styles.FilmPhotoElement}
        alt="Logo"
      />
      {date}
    </div>
  );
}
