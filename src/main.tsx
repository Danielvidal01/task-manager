import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'
import { BrowserRouter, Router } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
