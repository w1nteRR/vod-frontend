import { Container } from "@material-ui/core"
import { Redirect, Route, Switch } from "react-router-dom"

import { HeaderNav } from "../components/navigation/header/header.bar"

import { SignIn } from "../pages/auth/SignIn"
import { Film } from "../pages/film/Film"
import { Home } from "../pages/Home"

export const useRoutes = () => {

  const auth = true

  if(auth) return (
    <>
    <HeaderNav />
    <Container>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/film/:id' component={Film} />
      </Switch>
    </Container>
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