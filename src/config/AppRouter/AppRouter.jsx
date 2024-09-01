import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import SignUpPage from '../../Pages/SignUpPage/SignUpPage'
import MasterLogin from '../../Pages/MasterLogin/MasterLogin'
import SignInPage from '../../Pages/SignInPage/SignInPage'

export default function AppRouter() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/SignUpPage' element={<SignUpPage/>} />
                <Route path='/MasterLogin' element={<MasterLogin/>} />
                <Route path='/SignInPage' element={<SignInPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
