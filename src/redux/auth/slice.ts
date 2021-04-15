import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './types'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer