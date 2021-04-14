import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Auth0Provider } from '@auth0/auth0-react'

import { App } from './App'
import store from './redux/store'

import { darkTheme } from './theme'
import './index.css'

const domain = process.env.REACT_APP_DOMAIN
const clientId = process.env.REACT_APP_CLIENT_ID

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin + '/login'}
    >
      <Provider 
        store={store}
      >
        <MuiThemeProvider 
          theme={darkTheme}
        >
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </Provider>
    </Auth0Provider>
  </BrowserRouter>, 
  document.getElementById('root')
)

