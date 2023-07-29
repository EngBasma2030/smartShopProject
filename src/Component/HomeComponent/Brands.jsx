import React from 'react'
import Brand1 from '../imgs/brandlogo4.png'
import Brand2 from '../imgs/brandlogo5.png'
import Brand3 from '../imgs/brandlogo2.png'
import Brand4 from '../imgs/brandlogo6.png'
import Brand5 from '../imgs/brandlogo4 (1).png'
import Brand6 from '../imgs/tablogo1.png'
import Brand7 from '../imgs/brandlogo5 (1).png'

import 'bootstrap/dist/css/bootstrap.css';

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
const Brands = () => {
    return (
        <div>
        
                <div>
      <div className='Brands'>
        <a> البراندات </a> 
      </div>

      <div className='imgs'>
        <img src={Brand1} alt="" />
        <img src={Brand2} alt="" />
        <img src={Brand3} alt="" />
        <img src={Brand4} alt="" />
        <img src={Brand5} alt="" />
        <img src={Brand6} alt="" />
        <img src={Brand7} alt="" />
      </div>
    </div>
            
        </div>
    )
}

export default Brands
