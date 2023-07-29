import React from 'react'
import img1 from '../imgs/Rectangle 3677 (11).png'
import img2 from '../imgs/Rectangle 3677 (12).png'
import img3 from '../imgs/Rectangle 3677 (10).png'

// import 'bootstrap/dist/css/bootstrap.css';
import { RiStarSFill } from "react-icons/ri";

import { MdFavorite } from "react-icons/md";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const SliderPROD = () => {
    const [showLink1, setShowLink1] = useState(false);
    const [showLink2, setShowLink2] = useState(false);
    const [showLink3, setShowLink3] = useState(false);
  return (
    <div className='sliderPROD'>
        <section className='lm'>
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
                    <section className='slider'>
                        <SwiperSlide className='Swiper1'>

                            {/* first prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink1(true)}
                                        onMouseLeave={() => setShowLink1(false)} src={img1} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink1 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>799</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1199</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* secound prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink2(true)}
                                        onMouseLeave={() => setShowLink2(false)} src={img2} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink2 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>582</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>785</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* third prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink3(true)}
                                        onMouseLeave={() => setShowLink3(false)} src={img3} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink3 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>1200</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1500</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='Swiper1'>
                                                        {/* first prod */}
                                                        <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink1(true)}
                                        onMouseLeave={() => setShowLink1(false)} src={img1} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink1 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>799</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1199</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* secound prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink2(true)}
                                        onMouseLeave={() => setShowLink2(false)} src={img2} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink2 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>582</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>785</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* third prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink3(true)}
                                        onMouseLeave={() => setShowLink3(false)} src={img3} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink3 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>1200</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1500</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='Swiper1'>
                                                        {/* first prod */}
                                                        <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink1(true)}
                                        onMouseLeave={() => setShowLink1(false)} src={img1} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink1 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>799</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1199</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* secound prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink2(true)}
                                        onMouseLeave={() => setShowLink2(false)} src={img2} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink2 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>582</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>785</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>

                            {/* third prod */}
                            <div className='prod1'>
                                {/*pic*/}
                                <div>
                                    <img onMouseOver={() => setShowLink3(true)}
                                        onMouseLeave={() => setShowLink3(false)} src={img3} alt='prod1' className='imgprod1' />
                                </div>
                                <div className='iconHeart'><MdFavorite /></div>


                                {showLink3 && (

                                    <button className='btn'>اضف للعربة  </button>

                                )}
                                {/* شرح اسم المنتج*/}
                                <div className='desc'>
                                    <div className='priceProd'>
                                        <div className='handlePound'>
                                            <div className='numPound'>ج.م</div>
                                            <div className='numPound'>1200</div>
                                        </div>

                                        <div className='handlePound'>
                                            <div className='numPound2'>ج.م</div>
                                            <div className='numPound2'>1500</div>
                                        </div>
                                    </div>
                                    <div className='prodInfo'>
                                        <div className='star'>
                                            <div className='starB'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>
                                            <div className='starG'><RiStarSFill /></div>

                                        </div>
                                        <div className='nameOfProd'> بلوزه قطنية بيضاء</div>
                                    </div>
                                </div>

                                <div className='size'>
                                    <span >
                                        XL
                                    </span>
                                    <span >
                                        L
                                    </span>
                                    <span >
                                        M
                                    </span>
                                    <span >
                                        S
                                    </span>
                                    <span className='blue' >
                                        XS
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </section>
                    {/* <section className='' > */}
                <div className='Species'> 
                            <h5 className='SpeciesH5'>تسوق عبر الفئات</h5>
                            <div className='SpeciesP'>
                            <p className='SpeciesP1'>رجالي</p>
                            <p className='SpeciesP1'>حريمي</p>
                            <p className='SpeciesP1'>اطفال</p>
                            <p className='SpeciesP1'>اكسسوارات</p>
                            <p className='SpeciesP1'>العاب</p>
                            </div>
                           
                        </div> 
                {/* </section> */}
                </Swiper>
      
            </section>
    </div>
  )
}

export default SliderPROD
