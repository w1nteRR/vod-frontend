import { memo } from "react";
import { useFilmStyles } from "../styles";

export const Trailer = memo<{ poster: string, video: string }>(({
  poster,
  video
}) => {

  const styles = useFilmStyles({})

  return <video 
    className={styles.trailer}
    muted
    autoPlay
    src={video}
    width='100%'
    height='100%'
    poster={poster} 
  />
})