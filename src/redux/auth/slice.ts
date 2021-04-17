import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './types'
import { checkAuth } from './thunks'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.auth
    }
  },
  extraReducers: builder => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.checking = false
      state.isAuthenticated = true
      state.user = action.payload
    })
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.checking = false
      state.isAuthenticated = false

      console.log(action.error)
    })
  }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer