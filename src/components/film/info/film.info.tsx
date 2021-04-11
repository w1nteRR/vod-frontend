import { FC } from "react"
import { Box, Typography } from "@material-ui/core"
interface IFilmInfo {
  name: string
  genre: string
  year: string
}

export const FilmInfo: FC<IFilmInfo> = ({
  name,
  genre,
  year
}) => {
  return (
    <Box>
      <Typography variant='h1'>{name}</Typography>
      <Typography variant='overline'>{genre} • {year}</Typography>
    </Box>    
  )
}