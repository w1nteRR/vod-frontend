import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const HEIGHT = 400

export const useFilmStyles = makeStyles<Theme, { poster: string }>(({
  poster: ({ poster }) => ({
    width: '100%',
    height: HEIGHT,
    
    borderRadius: 5,

    backgroundImage: `url(${poster})`,
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
  posterContainer: {
    minWidth: 300
  }
}))