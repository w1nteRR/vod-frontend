import { makeStyles } from "@material-ui/core"

export const useNavigationStyles = makeStyles({
  appbar: {
    background: 'unset',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 50
  },
  linksBox: {
    display: 'inherit'
  },
  navlink: {
    fontSize: 14,
    color: 'gray',
    textDecoration: 'none',
    fontWeight: 500,
    margin: '0 30px'
  },
  navlinkActive: {
    color: 'silver',
    fontWeight: 700
  }
})