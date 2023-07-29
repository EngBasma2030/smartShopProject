import React from 'react'
import Navbar from '../Shared/Navbar'
import Header from '../Component/ProductComponent/Header'
import "../ProductStyle/Header/Header.css"
// import SwiperPROD from '../Component/ProductComponent/SwiperPROD'
// import "../ProductStyle/swiperPROD/swiperPROD.css"
// import "../ProductStyle/swiperProduct/SwiperProduct.css"
import SwiperOfPROD from '../Component/ProductComponent/SwiperOfPROD'
import "../ProductStyle/SwiperOfPROD/SwiperOfPRROD.css"

import AtherPROD from '../Component/ProductComponent/AtherPROD'
import "../ProductStyle/AtherPROD/AtherPROD.css"
import Footer from '../Component/HomeComponent/Footer'


const Product = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <SwiperPROD/> */}
      <SwiperOfPROD/>
      <AtherPROD/>
      <Footer/>
    </div>
  )
}

export default Product
