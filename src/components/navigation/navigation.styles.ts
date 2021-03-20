import { makeStyles } from "@material-ui/core"

export const useNavigationStyles = makeStyles({
  appbar: {
    background: 'unset',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px',
  },
  linksBox: {
    display: 'inherit'
  },
  navlink: {
    fontSize: 12,
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