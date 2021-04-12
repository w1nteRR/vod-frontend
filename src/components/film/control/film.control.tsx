import { memo } from 'react'
import { Box, Button } from '@material-ui/core'

export const FilmControl = memo(() => {
  return (
    <Box display='inherit' flexDirection='column'>
      <Button
        variant='contained'
        color='primary'
        style={btn}
      >
        Watch now
      </Button>
      <Button
        variant='contained'
        color='default'
        style={btn}
      >
        Add to watchlist
      </Button>
    </Box>
  )
})

const btn = {
  padding: 17,
  width: 270,
  margin: '5px 0',
  borderRadius: 10
}