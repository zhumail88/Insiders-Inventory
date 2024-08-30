import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import SignupForm from './Components/SignUpForm/SignUpForm.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import PropertyCard from './Components/PropertyCard/PropertyCard.jsx'
import GreenButton from './Components/GreenButton/GreenButton.jsx'
import MasterLogin from './Pages/MasterLogin/MasterLogin.jsx'
import SignupPage from './Pages/SignUpPage/SignUpPage.jsx'
import PropertyType from './Components/PropertyType/PropertyType.jsx'
import ClientReviews from './Components/ClientReviews/ClientReviews.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage/>
    {/* <MasterLogin/> */}
    {/* <SignupPage/> */}
    {/* <ClientReviews/> */}
    
  </StrictMode>,
)
