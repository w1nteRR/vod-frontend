import { createMuiTheme } from "@material-ui/core"

export const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: '#030303'
    }
  },
  typography: {
    allVariants: {
      color: '#fafafa'
    },
    h1: {
      fontWeight: 'bolder',
      fontSize: 48
    },
    body1: {
      fontSize: 12.5,
      lineHeight: 2,
      fontWeight: 500
    },
    body2: {
      color: 'silver',
      fontSize: 11,
      lineHeight: 2
    },
    overline: {
      fontSize: 9,
      color: 'gray',
      fontWeight: 'bold'
    },
    button: {
      fontSize: 12,
      textTransform: 'unset'
    }
  }
})