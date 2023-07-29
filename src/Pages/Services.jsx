import React from 'react'
import Navbar from '../Shared/Navbar'
import NextNav from '../Component/ServicesComponent/NextNav'
import "../servicesStyle/NextNAv/NextNAv.css"
import ProductDetails from '../Component/ServicesComponent/ProductDetails'
import "../servicesStyle/productDetails/ProductDetails.css"
import Comment from '../Component/ServicesComponent/Comment'
import "../servicesStyle/Comment/Comment.css"
import AtherPROD from '../Component/ProductComponent/AtherPROD'
import Footer from '../Component/HomeComponent/Footer'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <NextNav/>
      <ProductDetails/>
      <Comment/>
      <AtherPROD/>
      <Footer/>
    </div>
  )
}

export default Services
