import { memo, ReactNode } from "react"

import { useFilmStyles } from "./styles"

export const IntroWrapper = memo<{ wallpaper: string, children: ReactNode }>(({
  children,
  wallpaper
}) => {
  
  const styles = useFilmStyles({ wallpaper })
  
  return (
    <div className={styles.wallpaper}>
      <div className={`${styles.gradient} brightness`}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  )
})