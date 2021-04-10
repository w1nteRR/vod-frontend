import { FC } from "react"
import { AppBar, Box } from "@material-ui/core"

import { useNavigationStyles } from "../navigation.styles"
import { LinksList } from "./links.list"
import { UserAvatar } from "../../common/user/user.avatar"

export const HeaderNav: FC = () => {

  const styles = useNavigationStyles()

  return (
    <AppBar position="static" className={`${styles.appbar} backdrop`}>
      <Box>logo</Box>
      <Box className={styles.linksBox}>
        <LinksList />
      </Box>
      <UserAvatar />
    </AppBar>
  )
}
