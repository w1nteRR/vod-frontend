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
  padding: 10,
  width: 200,
  margin: '10px 0'
}