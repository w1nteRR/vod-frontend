import { makeStyles } from "@material-ui/core"

export const useListStyles = makeStyles({
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    overflowX: 'scroll'
  },
  end: {
    height: 200,
    width: 100
  }
})