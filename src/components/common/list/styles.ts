import { makeStyles } from "@material-ui/core"

export const useListStyles = makeStyles({
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    overflowX: 'scroll',
    '&:hover': {
      overflowX: 'scroll',
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'gray'
      }
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'unset',
      borderRadius: 10
    }
  },
  end: {
    height: 200,
    width: 100
  }
})