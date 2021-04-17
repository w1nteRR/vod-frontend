import { Redirect, Route, Switch } from "react-router-dom"

import { HeaderNav } from "../components/navigation/header/header.bar"

import { Auth } from "../pages/auth/Auth"
import { SignIn } from "../pages/auth/SignIn"
import { Film } from "../pages/film/Film"
import { Home } from "../pages/Home"
import { Profile } from "../pages/profile/Profile"
import { checkAuth } from "../redux/auth/thunks"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useRoutes = () => {
  const { checking, isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  if(checking) {

    dispatch(checkAuth())

    return <p>checking auth</p>
  }

  if(isAuthenticated) return (
    <>
    <HeaderNav />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/film/:id' component={Film} />
        <Route path='/me' component={Profile} />
        
        <Redirect to='/home' />
      </Switch>
    </>
  )
  
  return (
    <>
      <Switch>
        <Route path='/signin' component={SignIn} /> 
        <Route path='/auth' component={Auth} />   
      
        <Redirect to='/signin' />
      </Switch>
    </>
  )
}