import { makeStyles, Theme } from "@material-ui/core"
import { IFilmCardStyles } from "./interfaces"

const WIDTH = 390
const HEIGHT = 200

export const useFilmCardStyles = makeStyles<Theme, IFilmCardStyles>(({
  card: ({ image }) => ({
    minWidth: WIDTH,
    height: HEIGHT,
    
    borderRadius: 5,

    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    margin: '0 10px 10px 0',

    cursor: 'pointer',

    '&:hover': {
      opacity: .8
    }
  })
}))