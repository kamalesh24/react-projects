import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Notifier from './Notifier.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notifier />
    <App />
  </React.StrictMode>,
)
