interface AuthState {
  checking: boolean
  user: unknown //to do
}

export const initialState: AuthState = {
  checking: true,
  user: {}
}