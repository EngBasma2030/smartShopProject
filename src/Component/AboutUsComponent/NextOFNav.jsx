import React from 'react'
import imgHeader from '../imgs/Untitled design (5) 1.png'
import { Link } from 'react-router-dom'

const NextOFNav = () => {
  return (
    <div>
           <div className="NextOfNav">
        <img src={imgHeader} alt="" className='imgNextOfNav'/>
        <div className='textNextOfNav'>
            <h1 className='textNav' > تسوق احدث المنتجات العصرية</h1>
        </div>
        <div className='LinkNextOfNav'>
        <Link to={'/'} className='LinkNextNav'>الرئيسية</Link>
            <Link to={'/ProductPage'}  className='LinkNextNav'>السله</Link>
        </div>
        <div className='slachOfNav'>
            <p>/</p>
        </div>
      </div>
    </div>
  )
}

export default NextOFNav
