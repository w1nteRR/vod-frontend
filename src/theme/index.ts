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
      fontWeight: 'lighter',
      fontSize: 48
    },
    body1: {
      fontSize: 11.5,
      lineHeight: 2,
      fontWeight: 600,
      color: 'silver'
    }
  }
})