import { FC } from "react"
import { NavLink } from "react-router-dom"

import { useNavigationStyles } from "../navigation.styles"

export const LinksList: FC = () => {

  const styles = useNavigationStyles()
  
  const links = [
    {
      path: '/home',
      name: 'Feed'
    },
    {
      path: '/library',
      name: 'Library'
    }
  ]

  return <>
    {
      links.map((link, index) => 
        <NavLink 
          key={index} 
          to={link.path}
          className={styles.navlink}
          activeClassName={styles.navlinkActive}
        >
          {link.name}
        </NavLink>
      )
    }
  </>
}
