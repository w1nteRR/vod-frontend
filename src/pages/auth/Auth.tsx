import { useAuth0 } from "@auth0/auth0-react"
import { FC, useEffect } from "react"
import { Redirect } from "react-router"

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { setAuth } from "../../redux/auth/slice"

export const Auth: FC = () => {

  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuthenticated)
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {    
      const token = await getAccessTokenSilently()
      localStorage.setItem('accessToken', token)
      dispatch(setAuth({ auth: true }))
    })()
  }, [])

  if(!isAuth) return <Redirect to='/login' />

  return <div>loading</div>
}