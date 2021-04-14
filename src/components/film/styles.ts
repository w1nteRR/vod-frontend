import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const HEIGHT = 400

export const useFilmStyles = makeStyles<Theme, { wallpaper?: string }>(({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wallpaper: ({ wallpaper }) => ({   
    height: '100vh', 
    position: 'relative',
    top: 0,
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
  },
  infoContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    margin: '100px 0' 
  },
  trailer: {
    position: 'absolute', 
    top: 0, 
    minWidth: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    zIndex: -1
  }
}))