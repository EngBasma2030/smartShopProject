
// import StyleSwiper from '../HomeStyle/Swiper/StyleSwiper.module.css'
import Ellipse1 from '../imgs/Ellipse 1 (1).png'
import Ellipse2 from '../imgs/Ellipse 2.png'
import Ellipse3 from '../imgs/Ellipse 3.png'
// import "../../HomeStyle/Swiper/Swiper.css"
// import "../HomeStyle/Swiper/StyleSwiper.css"

// Import Swiper styles

// import { Container, Row, Col } from "react-bootstrap"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import { Parallax, Pagination, Navigation } from "swiper/modules";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
 
   
< section className='sliderForSalles'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='sliderN1'>
        <div className='sliderUno'>
        <img src={Ellipse3} alt="Logo" className='Ellipse3'/>
        
        <div className='countaineer'>
        <img src={Ellipse2} alt="Logo" className='Ellipse2'/>
        <img src={Ellipse1} alt="Logo" className='Ellipse1'/>
        </div>
        
        </div>
        <div className='textslider'>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <p className='pargraph'>احدث ادوات الجمال</p>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
        </div>
          </SwiperSlide>
        <SwiperSlide><div className='sliderN1'>
        <div className='sliderUno'>
        <img src={Ellipse3} alt="Logo" className='Ellipse3'/>
        
        <div className='countaineer'>
        <img src={Ellipse2} alt="Logo" className='Ellipse2'/>
        <img src={Ellipse1} alt="Logo" className='Ellipse1'/>
        </div>
        
        </div>
        <div className='textslider'>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <p className='pargraph'>احدث ادوات الجمال</p>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='sliderN1'>
        <div className='sliderUno'>
        <img src={Ellipse3} alt="Logo" className='Ellipse3'/>
        
        <div className='countaineer'>
        <img src={Ellipse2} alt="Logo" className='Ellipse2'/>
        <img src={Ellipse1} alt="Logo" className='Ellipse1'/>
        </div>
        
        </div>
        <div className='textslider'>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <p className='pargraph'>احدث ادوات الجمال</p>
        <p className='pargraph2'>براندات نسائي عالمية</p>
        <button className='btnnum1'>اكتشف الان </button>
        </div>
        </div></SwiperSlide>
        
      </Swiper>
    </section>
  );
}

