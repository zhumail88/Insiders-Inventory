import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PropertyListingPage from './Pages/PropertyListingPage/PropertyListingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <PropertyListingPage/> */}
  </StrictMode>,
)
