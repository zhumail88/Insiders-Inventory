import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import SignupForm from './Components/SignUpForm/SignUpForm.jsx'
import SignupPage from './Components/SignupPage/SignupPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Navbar/> */}
    {/* <SignupPage/> */}
  </StrictMode>,
)
