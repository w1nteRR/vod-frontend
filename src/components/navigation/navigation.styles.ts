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
    marginBottom: 50,
    position: 'fixed',
    top: 0,
    borderBottom: '1px solid black'
  },
  linksBox: {
    display: 'inherit'
  },
  navlink: {
    fontSize: 14,
    color: 'silver',
    textDecoration: 'none',
    fontWeight: 500,
    margin: '0 30px'
  },
  navlinkActive: {
    color: '#fff',
    fontWeight: 700
  }
})