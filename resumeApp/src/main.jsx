import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import GlobalState from './context/GlobalContext.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <GlobalState>

        <Navbar />
        <App />
      </GlobalState>

    </React.StrictMode>

  </BrowserRouter>

)
