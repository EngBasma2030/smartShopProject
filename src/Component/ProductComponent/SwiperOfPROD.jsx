import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//IMPORT images and icons
import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import slideImg1 from '../imgs/Rectangle 3677.png'
import slideImg2 from '../imgs/Rectangle 3677(1).png'
import slideImg3 from '../imgs/Rectangle 3677(2).png'
import slideImg4 from '../imgs/Rectangle 3677(11).png'
import slideImg5 from '../imgs/Rectangle 3677(5).png'
import slideImg6 from '../imgs/Rectangle 3677(12).png'
import slideImg7 from '../imgs/Rectangle 3677.png'
import slideImg8 from '../imgs/Rectangle 3677(1).png'
import slideImg9 from '../imgs/Rectangle 3677(2).png'
// import img12 from '../imgs/Vector (4).svg'
import vectoria from '../imgs/Vector.svg'
import color1 from "../imgs/Ellipse 195.svg"
import color2 from "../imgs/Ellipse 197.svg"
import color3 from "../imgs/Ellipse 198.svg"
import color4 from "../imgs/Ellipse 199.svg"
import color5 from "../imgs/Ellipse 200.svg"
// import rectangle1 from "../imgs/Rectangle 3708.png"
// import rectangle2 from "../imgs/Rectangle 3708(1).png"
// import rectangle3 from "../imgs/Rectangle 3708(2).png"
import img13 from '../imgs/Rectangle 3708 (30).png'
import img14 from '../imgs/Rectangle 3708 (31).png'
import img15 from '../imgs/Rectangle 3708 (32).png'
import ico from '../imgs/iconCmd.jpg'
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import "../../ProductStyle/swiperPROD/swiperPROD.css"
// import "../../ProductStyle/swiperPROD/swiperPROD.scss"

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    const [showLink1, setShowLink1] = useState(false);
    const [showLink2, setShowLink2] = useState(false);
    const [showLink3, setShowLink3] = useState(false);
    const [showLink4, setShowLink4] = useState(false);
    const [showLink5, setShowLink5] = useState(false);
    const [showLink6, setShowLink6] = useState(false);
    const [showLink7, setShowLink7] = useState(false);
    const [showLink8, setShowLink8] = useState(false);
    const [showLink9, setShowLink9] = useState(false);
    return (
        <>
            <section className='filterProducts'> {/*main section*/}
                <section className='filterPro'>{/*filter and products*/}
                    <section className='filter'> {/*filter*/}
                        {/*filter*/}
                        <div className='select'>
                            <select>
                                <option value='الاقل سعرا'>الاقل سعرا</option>
                                <option value='البرندات'>البرندات</option>
                                <option value='المنتجات'>المنتجات</option>
                                <option value='الاكثر شهرة'>الاكثر شهرة</option>
                            </select>
                            <p className='t5'> ترتيب حسب </p>
                        </div>
                        {/*view*/}
                        <div className='view'>
                            <p>30</p>
                            <p>24</p>
                            <p>18</p>
                            <p>12</p>
                            <p>6</p>
                            <p className='t6 '> مشاهدة </p>
                        </div>
                        {/*icon*/}
                        <div className='ico'>
                            {/*lines*/}
                            <div className='line'>
                                <p className='line1'></p>
                                <p className='line2'></p>
                            </div>
                            {/*img*/}
                            <img src={ico} alt='icon' />
                            <p className='t7'> عرض </p>
                        </div>
                    </section>
                    {/*end of section(filter)*/}

                    {/*swiper*/}
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {/*section (products)*/}
                            <section className='productss'>
                                <section className='product'>
                                    <section className='productt'>
                                        <div>
                                            <img src={slideImg1} alt='pic1' onMouseOver={() => { setShowLink1(true) }} onMouseLeave={() => setShowLink1(false)} />
                                        </div>
                                        {/*link*/}
                                        <div className='linnk'>
                                            {showLink1 && (<button>أضف للعربة</button>)}
                                        </div>
                                        {/*heart icon*/}
                                        <div className='heartIcon'><MdFavorite /></div>
                                        {/*div3*/}
                                        <div className='div3'>
                                            {/*price*/}
                                            <div className='pricce2'> <p>800 ج.م</p> </div>
                                            {/*rate*/}
                                            <div className='staars'>
                                                <div className='grey'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                            </div>
                                        </div>
                                        {/*div4*/}
                                        <div className='div4'>
                                            {/*price*/}
                                            <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                                            {/*text*/}
                                            <div> <p className='p1'>بلوزة قطنية بيضاء</p></div>
                                        </div>
                                        {/*size*/}
                                        <div className='sizze'>
                                            <p>XL</p>
                                            <p>L</p>
                                            <p>M</p>
                                            <p>S</p>
                                            <p className='xs'>XS</p>
                                        </div>
                                    </section>
                                    {/*end of productt*/}
                                       {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}

            </SwiperSlide> 
            <SwiperSlide>
                            {/*section (products)*/}
                            <section className='productss'>
                                <section className='product'>
                                    <section className='productt'>
                                        <div>
                                            <img src={slideImg1} alt='pic1' onMouseOver={() => { setShowLink1(true) }} onMouseLeave={() => setShowLink1(false)} />
                                        </div>
                                        {/*link*/}
                                        <div className='linnk'>
                                            {showLink1 && (<button>أضف للعربة</button>)}
                                        </div>
                                        {/*heart icon*/}
                                        <div className='heartIcon'><MdFavorite /></div>
                                        {/*div3*/}
                                        <div className='div3'>
                                            {/*price*/}
                                            <div className='pricce2'> <p>800 ج.م</p> </div>
                                            {/*rate*/}
                                            <div className='staars'>
                                                <div className='grey'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                            </div>
                                        </div>
                                        {/*div4*/}
                                        <div className='div4'>
                                            {/*price*/}
                                            <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                                            {/*text*/}
                                            <div> <p className='p1'>بلوزة قطنية بيضاء</p></div>
                                        </div>
                                        {/*size*/}
                                        <div className='sizze'>
                                            <p>XL</p>
                                            <p>L</p>
                                            <p>M</p>
                                            <p>S</p>
                                            <p className='xs'>XS</p>
                                        </div>
                                    </section>
                                    {/*end of productt*/}
                                       {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}

            </SwiperSlide> 
            <SwiperSlide>
                            {/*section (products)*/}
                            <section className='productss'>
                                <section className='product'>
                                    <section className='productt'>
                                        <div>
                                            <img src={slideImg1} alt='pic1' onMouseOver={() => { setShowLink1(true) }} onMouseLeave={() => setShowLink1(false)} />
                                        </div>
                                        {/*link*/}
                                        <div className='linnk'>
                                            {showLink1 && (<button>أضف للعربة</button>)}
                                        </div>
                                        {/*heart icon*/}
                                        <div className='heartIcon'><MdFavorite /></div>
                                        {/*div3*/}
                                        <div className='div3'>
                                            {/*price*/}
                                            <div className='pricce2'> <p>800 ج.م</p> </div>
                                            {/*rate*/}
                                            <div className='staars'>
                                                <div className='grey'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                            </div>
                                        </div>
                                        {/*div4*/}
                                        <div className='div4'>
                                            {/*price*/}
                                            <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                                            {/*text*/}
                                            <div> <p className='p1'>بلوزة قطنية بيضاء</p></div>
                                        </div>
                                        {/*size*/}
                                        <div className='sizze'>
                                            <p>XL</p>
                                            <p>L</p>
                                            <p>M</p>
                                            <p>S</p>
                                            <p className='xs'>XS</p>
                                        </div>
                                    </section>
                                    {/*end of productt*/}
                                       {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}

            </SwiperSlide> 
            <SwiperSlide>
                            {/*section (products)*/}
                            <section className='productss'>
                                <section className='product'>
                                    <section className='productt'>
                                        <div>
                                            <img src={slideImg1} alt='pic1' onMouseOver={() => { setShowLink1(true) }} onMouseLeave={() => setShowLink1(false)} />
                                        </div>
                                        {/*link*/}
                                        <div className='linnk'>
                                            {showLink1 && (<button>أضف للعربة</button>)}
                                        </div>
                                        {/*heart icon*/}
                                        <div className='heartIcon'><MdFavorite /></div>
                                        {/*div3*/}
                                        <div className='div3'>
                                            {/*price*/}
                                            <div className='pricce2'> <p>800 ج.م</p> </div>
                                            {/*rate*/}
                                            <div className='staars'>
                                                <div className='grey'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                                <div className='yellow'>{<RiStarSFill />}</div>
                                            </div>
                                        </div>
                                        {/*div4*/}
                                        <div className='div4'>
                                            {/*price*/}
                                            <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                                            {/*text*/}
                                            <div> <p className='p1'>بلوزة قطنية بيضاء</p></div>
                                        </div>
                                        {/*size*/}
                                        <div className='sizze'>
                                            <p>XL</p>
                                            <p>L</p>
                                            <p>M</p>
                                            <p>S</p>
                                            <p className='xs'>XS</p>
                                        </div>
                                    </section>
                                    {/*end of productt*/}
                                       {/*start of prod2*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg2} alt='pic1' onMouseOver={()=>{setShowLink2(true)}} onMouseLeave={()=>setShowLink2(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink2 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    {/*start of prod3*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg3} alt='pic1' onMouseOver={()=>{setShowLink3(true)}} onMouseLeave={()=>setShowLink3(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink3 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section> {/*end of productt*/}
              </section> {/*end of product*/}

              {/*start of section 2*/}
              <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg4} alt='pic1' onMouseOver={()=>{setShowLink4(true)}} onMouseLeave={()=>setShowLink4(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink4 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod5*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg5} alt='pic1' onMouseOver={()=>{setShowLink5(true)}} onMouseLeave={()=>setShowLink5(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink5 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod6*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg6} alt='pic1' onMouseOver={()=>{setShowLink6(true)}} onMouseLeave={()=>setShowLink6(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink6 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}
                    </section> {/*end of product*/}

                    {/*start of section 3*/}
                    <section className='product'>
              <section className='productt'>
              <div>
                        <img src={slideImg7} alt='pic1' onMouseOver={()=>{setShowLink7(true)}} onMouseLeave={()=>setShowLink7(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink7 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod8*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg8} alt='pic1' onMouseOver={()=>{setShowLink8(true)}} onMouseLeave={()=>setShowLink8(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink8 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*start of prod9*/}
                    <section className='productt'>
              <div>
                        <img src={slideImg9} alt='pic1' onMouseOver={()=>{setShowLink9(true)}} onMouseLeave={()=>setShowLink9(false)}/>
              </div>
              {/*link*/}
              <div className='linnk'>
                        {showLink9 && (<button>أضف للعربة</button>)}
                    </div>
              {/*heart icon*/}
                    <div className='heartIcon'><MdFavorite/></div>
                  {/*div3*/}
                    <div className='div3'>
                        {/*price*/}
                        <div className='pricce2'> <p>800 ج.م</p> </div>
                        {/*rate*/}
                        <div className='staars'>
                            <div className='grey'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                            <div className='yellow'>{<RiStarSFill/>}</div>
                        </div>
                    </div>
                    {/*div4*/}
                    <div className='div4'>
                        {/*price*/}
                        <div className='pricce1'><span className='dec'>800 ج.م</span></div>
                        {/*text*/}
                        <div> <p className= 'p1'>بلوزة قطنية بيضاء</p></div>
                    </div>
                    {/*size*/}
                    <div className='sizze'>
                        <p>XL</p>
                        <p>L</p>
                        <p>M</p>
                        <p>S</p>
                        <p className='xs'>XS</p>
                    </div>
                    </section>{/*end of productt*/}

                    {/*section2*/}

              </section>{/*end of product*/}
            </section> {/*end of productss*/}

            </SwiperSlide> 
                    </Swiper>
                </section>
         <section className='omar'>
       <div className='categories'>
       <div className='categories1'>
       <img src={vectoria} alt="" />
        <h1 className='categoriesH'>الفئات</h1>
      </div>
         <div className='categories2'>
          <div className='accessories'>
            <p>اكسسوارات</p>
             <p>ملابس</p>
            <p>الكترونيات</p>
            <p>الاثاث</p>
             <p>الاحذية</p>
             <p>المجوهرات</p>
            <p>اخري</p>
          </div>
          <div className='clothes'>
          <p>+</p>
         <p>+</p>
          <p className='furniture'>+</p>
          <p className='ather'>+</p>
          <p className='ather'>+</p>
          </div>
        </div>
      </div>

       <div className='price'>
         <div className='divPrice1'>
         <img src={vectoria} alt="" />
         <h1 className='priceH'>السعر</h1>
         </div>
         <div className='divPrice2'>
          <div className='RC'>
            <p className='RCP1'>70 رس</p>
          <p className='RCP2'>500 رس</p>
          </div>
          <div className='input2'>
          {/* <input type="range" name="range" className="range" /> */}
          {/* <input type="range" name="range" className="range" /> */}
          <input type="range" name='range' className='range' />
          <input type="range" name='range' className='range' />
           </div>
           <div className='GM'>
           <p>10ج.م</p>
             <p className='GMP'>1000ج.م</p>
           </div>
         </div>
       </div>

       <div className='size'>
                 <div className='divSize1'>
          <img src={vectoria} alt="" />
          <h1 className='sizeH'>المقاس</h1>
        </div>
      <div className='divSize2'>
      <p className='sizeOfP'>S</p>
         <p className='sizeOfP'>M</p>
         <p className='sizeOfP'>L</p>
         <p className='sizeOfP'>XL</p>
      </div>
       </div>

      <div className='color'>
         <div className='divColor1'>
           <img src={vectoria} alt="" />
           <h1 className='colorH'>اللون</h1>
         </div>
        <div className='divColor2'>
          <img src={color1} alt="" className='color1'/>
          <img src={color2} alt="" className='color1'/>
         <img src={color3} alt="" className='color1'/>
          <img src={color4} alt="" className='color1'/>
           <img src={color5} alt="" className='color1'/>
        </div>
      </div>

       <div className='sign'>
        <div className='divSign1'>
          <img src={vectoria} alt="" />
          <h1 className='signH'>العلامة التجارية</h1>
         </div>
        <div className='divSign2'>
          <p>سوني</p>
         <p>لينوفو</p>
          <p>جونسون & هاندسون</p>
         <p>ابل</p>
        <p>جوجل</p>
         <p>سامسونج</p>
        </div>
      </div>

       <div className='items'>
         <div className='divItem1'>
           <img src={vectoria} alt="" />
           <h1 className='itemH'>عناصر مميزة</h1>
       </div>       
        <div className='divItem2'>
         <img src={img13} alt="" />
          <div className='itemText'>
            <p className='itemTextP1'>فستان ازرق عصري للسيدات</p>
          <p className='itemTextP2'>800 ج.م</p>
          </div>
        </div>

        <div className='divItem2'>
          <img src={img14} alt="" />
          <div className='itemText'>
           <p className='itemTextP1' >فستان اسود عصري للسيدات</p>
          <p className='itemTextP2'>800 ج.م</p>
          </div>
        </div>

        <div className='divItem2'>
           <img src={img15} alt="" />
          <div className="itemText">
           <p className='itemTextP1'>فستان ابيض عصري للسيدات</p>
          <p className='itemTextP2'>800 ج.م</p>
          </div>
        </div>
       </div>
     </section>
            </section>
        </>
    )
}


