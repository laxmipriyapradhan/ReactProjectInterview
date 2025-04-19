import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux';
import store from  './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </Provider>
  </StrictMode>
)
