import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  
 
  RouterProvider,
} from "react-router-dom";
import Routes from './Router/Routes';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
   <HelmetProvider>  
  <div className='max-w-screen-xl mx-auto'> 
     <RouterProvider router={Routes} />
   </div>
   </HelmetProvider>
   </AuthProvider>

  </React.StrictMode>,
)
