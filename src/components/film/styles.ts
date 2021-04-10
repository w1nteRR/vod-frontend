import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const HEIGHT = 400

export const useFilmStyles = makeStyles<Theme, { wallpaper: string }>(({
  main: {
    margin: 80,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wallpaper: ({ wallpaper }) => ({   
    height: '100vh', 
    position: 'relative',
    top: 0,
    backgroundColor: 'silver',
    backgroundImage: `url(${wallpaper})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }),
  info: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: HEIGHT
  },
  gradient: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 36.98%, rgba(0, 0, 0, 0.37) 71.35%, #030303 100%)'
  },
  posterContainer: {
    minWidth: 300
  }
}))