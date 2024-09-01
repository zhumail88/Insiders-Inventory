import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignupForm from './Components/SignUpForm/SignUpForm.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import SignInPage from './Pages/SignInPage/SignInPage.jsx'
import AppRouter from './config/AppRouter/AppRouter.jsx'
import Footer from './Components/Footer/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
