import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import axios from 'axios'
import AuthProvider from './utility/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Aos from 'aos'
import 'aos/dist/aos.css';



Aos.init({
  once: false,
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom',
  offset: 100
});

const queryClient = new QueryClient()

axios.defaults.baseURL = 'https://b8a11-server-side-jibon-roy.vercel.app';
axios.defaults.withCredentials = 'true'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
