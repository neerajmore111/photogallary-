import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Photogallary.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './REdux/store.js'
import Photogallary from './Photogallary.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <Provider store={store}>
  //   <App />
  //   </Provider>
  //   </BrowserRouter>
  <App/>
)
