import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TestingScreen from './Components/TestingScreen/TestingScreen.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <TestingScreen/>
  </StrictMode>,
)
