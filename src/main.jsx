import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
