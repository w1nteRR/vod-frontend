import { FC } from 'react'
import { Box, Button } from '@material-ui/core'

export const FilmControl: FC = () => {
  return (
    <Box flex={1} display='inherit' alignItems='center'>
      <Button color='primary' variant='outlined'>Watch now</Button>
    </Box>
  )
}