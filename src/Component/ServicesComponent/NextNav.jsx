import React from 'react'
import imgHeader from '../imgs/Untitled design (5) 1.png'
import { Link } from 'react-router-dom'
const NextNav = () => {
  return (
    <div>
           <div className="Header">
        <img src={imgHeader} alt="" className='imgHeader'/>
        <div className='textHeader'>
            <h1 className='textH' > تسوق احدث المنتجات العصرية</h1>
        </div>
        <div className='LinkH'>
        <Link to={'/'} className='LinkHeader'>الرئيسية</Link>
            <Link to={'/ProductPage'}  className='LinkHeader'>المنتجات</Link>
            <Link to={'/services'} className='LinkHeader'>فستان ازرق عصري</Link>
        </div>
        <div className='slach'>
            <p className='slach1'>/</p>
            <p className='slach2'>/</p>
        </div>
      </div>
    </div>
  )
}

export default NextNav
