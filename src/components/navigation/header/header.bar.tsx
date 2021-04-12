import { FC } from "react"
import { AppBar, Box } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

import { UserAvatar } from "../../common/user/user.avatar"

import { useNavigationStyles } from "../navigation.styles"
import { LinksList } from "./links.list"

export const HeaderNav: FC = () => {

  const styles = useNavigationStyles()
  const history = useHistory()
  
  return (
    <AppBar className={`${styles.appbar} backdrop`}>
      <Box>logo</Box>
      <Box className={styles.linksBox}>
        <LinksList />
      </Box>
      <UserAvatar onClick={() => history.push('/me')} />
    </AppBar>
  )
}
