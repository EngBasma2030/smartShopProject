import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../src/Pages/Home"
import Product from "../src/Pages/Product"
import Services from './Pages/Services'
import AboutUs from './Pages/AboutUs'
import Main from './Pages/Main'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify';

const Routs = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/home' element={<Home/>} />
          <Route path='/ProductPage' element={<Product />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
      </Router>
 
      <ToastContainer />
    </>
  )
}

export default Routs