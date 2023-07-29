import React from 'react'
import imgHeader from '../imgs/Untitled design (5) 1.png'
import { Link } from 'react-router-dom'
// import imgHeader2 from '../imgs'
const Header = () => {
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
        </div>
        <div className='slachOfHeader'>
            <p>/</p>
        </div>
      </div>
    </div>
  )
}

export default Header
