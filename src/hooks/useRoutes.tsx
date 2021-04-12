import { Redirect, Route, Switch } from "react-router-dom"

import { HeaderNav } from "../components/navigation/header/header.bar"

import { SignIn } from "../pages/auth/SignIn"
import { Film } from "../pages/film/Film"
import { Home } from "../pages/Home"
import { Profile } from "../pages/profile/Profile"

export const useRoutes = () => {

  const auth = true

  if(auth) return (
    <>
    <HeaderNav />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/film/:id' component={Film} />
        <Route path='/me' component={Profile} />
      </Switch>
    </>
  )
  
  return (
    <>
      <Switch>
        <Route path='/signin' component={SignIn} />    
        <Redirect to='/signin' />
      </Switch>
    </>
  )
}