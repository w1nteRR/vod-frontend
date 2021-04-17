import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth0Api } from '../../api/auth0.api'

const accessTokenStorage = 'accessToken'

export const checkAuth = createAsyncThunk('auth/check', async () => {
  const token = localStorage.getItem(accessTokenStorage)

  if(!token) throw new Error('No access token')

  const data = await auth0Api().me(token)

  console.log(data)
})

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('accessToken')
})