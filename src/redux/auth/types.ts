interface AuthState {
  checking: boolean
  isAuthenticated: boolean
  user: unknown //to do
}

export const initialState: AuthState = {
  checking: true,
  isAuthenticated: false,
  user: {}
}