import { FC } from "react"
import { Box, Typography } from "@material-ui/core"

interface IFilmInfo {
  name: string
  genre: string
  plot: string
}

export const FilmInfo: FC<IFilmInfo> = ({
  name,
  genre,
  plot
}) => {
  return (
    <>
      <Box flex={1}>
        <Typography variant='h1'>{name}</Typography>
        <Typography variant='overline'>{genre}</Typography>
      </Box>
      <Box flex={2} display='inherit' alignItems='center'>
        <Typography variant='body1'>{plot}</Typography>
      </Box>
    </>
  )
}