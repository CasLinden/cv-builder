import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CvDataProvider } from './CvDataContext'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CvDataProvider>
      <App />
    </CvDataProvider>
  </React.StrictMode>,
)

