import React from 'react'
import Navbar from '../Shared/Navbar'
import Swiper from '../Component/HomeComponent/Swiper'
import "../HomeStyle/Swiper/Swiper.css"
import "../HomeStyle/Nav/Nav.css"
import Services from '../Component/HomeComponent/Services'
import "../HomeStyle/Services/styleServices.css"
import Offers from '../Component/HomeComponent/Offers'
import "../HomeStyle/offers/StyleOffers.css"
import Products from '../Component/HomeComponent/Products'
import "../HomeStyle/Prod/Produces.css"
import StopWatching from '../Component/HomeComponent/StopWatching'
import "../HomeStyle/StopWatching/StopWatching.css"
import SliderPROD from '../Component/HomeComponent/SliderPROD'
import "../HomeStyle/sliderPROD/SliderPROD.css"
import Brands from '../Component/HomeComponent/Brands'
import "../HomeStyle/Brand/Brands.css"
import Aside from '../Component/HomeComponent/Aside'
import "../HomeStyle/Aside/Aside.css"
import Footer from '../Component/HomeComponent/Footer'
import "../HomeStyle/Footer/Footer.css"


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Swiper/>
     <Services/>
     <Offers/>
     <Products/>
     <StopWatching/>
     <SliderPROD/>
     <Brands/>
     <Aside/>
     <Footer/> 
    </div>
  )
}

export default Home
