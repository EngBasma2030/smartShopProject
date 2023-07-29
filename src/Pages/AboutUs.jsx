import React from 'react'
import Navbar from '../Shared/Navbar'
import NextOFNav from '../Component/AboutUsComponent/NextOFNav'
import "../AboutUsStyle/NextOfNav/NextOfNav.css"
import AsideAbout from '../Component/AboutUsComponent/AsideAbout'
import "../AboutUsStyle/AsideAbout/AsideAbout.css"
import AtherPROD from '../Component/ProductComponent/AtherPROD'
import Footer from '../Component/HomeComponent/Footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <NextOFNav/>
      <AsideAbout/>
      <AtherPROD/>
      <Footer/>
    </div>
  )
}

export default AboutUs
