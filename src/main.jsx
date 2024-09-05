import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignupForm from './Components/SignUpForm/SignUpForm.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import SignInPage from './Pages/SignInPage/SignInPage.jsx'
import AppRouter from './config/AppRouter/AppRouter.jsx'
import Footer from './Components/Footer/Footer.jsx'
import MasterLogin from './Pages/MasterLogin/MasterLogin.jsx'
import Section1 from './Pages/HomePage/Section1/HomeSec1.jsx'
import Section2 from './Pages/HomePage/Section2/HomeSec2.jsx'
import Section3 from './Pages/HomePage/Section3/HomeSec3.jsx'
import Section4 from './Pages/HomePage/Section4/HomeSec4.jsx'
import NavButtons from './Components/NavButtons/NavButtons.jsx'
import GreenButton from './Components/GreenButton/GreenButton.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MasterLogin/> */}
    {/* <Section1/>
     <Section2/> 
    <Section3/> */}
    <Section4/>

  </StrictMode>,
)
