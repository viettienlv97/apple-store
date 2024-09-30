import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './scss/custom.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import ClientSDK from './services/index.ts'

ClientSDK.init({
  base_url: import.meta.env.VITE_API_URL
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
