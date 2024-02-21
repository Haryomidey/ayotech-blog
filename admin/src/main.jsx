import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './global.css'
import Router from './router/main.routes.jsx'
import ContextWrapper from './context/AdminContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <Router />
      <ToastContainer />
    </ContextWrapper>
  </React.StrictMode>,
)
