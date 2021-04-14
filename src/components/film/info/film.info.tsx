import { memo } from "react"
import { Box, Typography } from "@material-ui/core"
import Icon from '@mdi/react'
import { mdiVideo4kBox, mdiSubtitles } from '@mdi/js'

interface IFilmInfo {
  genre: string
  year: string
  plot: string
}

export const Info = memo<IFilmInfo>(({
  genre,
  year,
  plot
}) => {
  return (
    <Box m={3} padding='0 10px' width='60%'>
      <Typography variant='body1'>{plot}</Typography>
      <Box display='flex' alignItems='center'>
        <Typography variant='overline'>{genre} • {year}</Typography>
        <Icon path={mdiVideo4kBox} size={.7} style={{ margin: '0 10px' }} />
        <Icon path={mdiSubtitles} size={.7} style={{ margin: '0 10px' }} />
      </Box>
    </Box>   
  )
})

