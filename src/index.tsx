import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import { App } from './App'
import store from './redux/store'

import { darkTheme } from './theme'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
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
  </BrowserRouter>, 
  document.getElementById('root')
)

