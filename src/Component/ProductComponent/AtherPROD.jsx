import React from 'react'
import img1 from '../imgs/Rectangle 3677 (13).png'
import img2 from '../imgs/Rectangle 3677 (14).png'
import img3 from '../imgs/Rectangle 3677 (15).png'
import img4 from '../imgs/Rectangle 3677 (16).png'
import img5 from '../imgs/Rectangle 3677 (17).png'
import { useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";

const AtherPROD = () => {
    const [showLink1, setShowLink1] = useState(false);
    const [showLink2, setShowLink2] = useState(false);
    const [showLink3, setShowLink3] = useState(false);
    const [showLink4, setShowLink4] = useState(false);
    const [showLink5, setShowLink5] = useState(false);
    return (
        <section className='Prod2'>

            <section className='contProd1'>
                <a>منتجات مشابهة</a>
            </section>

            <section>
                {/* جزء المنتجات */}

                <section className='sec3'>
                    {/* first Product  */}
                    <div className='prod4'>
                        {/* pic */}
                        <div>
                            <img
                                onMouseOver={() => setShowLink1(true)}
                                onMouseLeave={() => setShowLink1(false)}
                                src={img1} alt="prod1"
                                className='imgHeader1' />
                        </div>
                        <div className='iconHeart'><MdFavorite /></div>

                        {showLink1 && (

                            <button className='btn'>اضف للعربة  </button>

                        )}

                        {/* شرح اسم المنتج  */}

                        <div className='desc'>
                            <div className="priceProd">
                                <div className="handlePound">
                                    <div className="numPound"> ج.م</div>
                                    <div className="numPound">800</div>
                                </div>
                                <div className="handlePound">
                                    <div className="numPound2">ج.م</div>
                                    <div className="numPound2">800</div>
                                </div>
                            </div>

                            <div className="prodInfo">
                                <div className="star">
                                    <div className='starB'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                </div>
                                <div className="nameOfProd">بلوزه قطنيه بيضاء</div>
                            </div>
                        </div>
                        <div className="size">
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

  {/* first Product  */}
  <div className='prod4'>
                        {/* pic */}
                        <div>
                            <img
                                onMouseOver={() => setShowLink2(true)}
                                onMouseLeave={() => setShowLink2(false)}
                                src={img2} alt="prod1"
                                className='imgHeader1' />
                        </div>
                        <div className='iconHeart'><MdFavorite /></div>

                        {showLink2 && (

                            <button className='btn'>اضف للعربة  </button>

                        )}

                        {/* شرح اسم المنتج  */}

                        <div className='desc'>
                            <div className="priceProd">
                                <div className="handlePound">
                                    <div className="numPound"> ج.م</div>
                                    <div className="numPound">800</div>
                                </div>
                                <div className="handlePound">
                                    <div className="numPound2">ج.م</div>
                                    <div className="numPound2">800</div>
                                </div>
                            </div>

                            <div className="prodInfo">
                                <div className="star">
                                    <div className='starB'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                </div>
                                <div className="nameOfProd">بلوزه قطنيه بيضاء</div>
                            </div>
                        </div>
                        <div className="size">
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

  {/* first Product  */}
  <div className='prod4'>
                        {/* pic */}
                        <div>
                            <img
                                onMouseOver={() => setShowLink3(true)}
                                onMouseLeave={() => setShowLink3(false)}
                                src={img3} alt="prod1"
                                className='imgHeader1' />
                        </div>
                        <div className='iconHeart'><MdFavorite /></div>

                        {showLink3 && (

                            <button className='btn'>اضف للعربة  </button>

                        )}

                        {/* شرح اسم المنتج  */}

                        <div className='desc'>
                            <div className="priceProd">
                                <div className="handlePound">
                                    <div className="numPound"> ج.م</div>
                                    <div className="numPound">800</div>
                                </div>
                                <div className="handlePound">
                                    <div className="numPound2">ج.م</div>
                                    <div className="numPound2">800</div>
                                </div>
                            </div>

                            <div className="prodInfo">
                                <div className="star">
                                    <div className='starB'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                </div>
                                <div className="nameOfProd">بلوزه قطنيه بيضاء</div>
                            </div>
                        </div>
                        <div className="size">
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

  {/* first Product  */}
  <div className='prod4'>
                        {/* pic */}
                        <div>
                            <img
                                onMouseOver={() => setShowLink4(true)}
                                onMouseLeave={() => setShowLink4(false)}
                                src={img4} alt="prod1"
                                className='imgHeader1' />
                        </div>
                        <div className='iconHeart'><MdFavorite /></div>

                        {showLink4 && (

                            <button className='btn'>اضف للعربة  </button>

                        )}

                        {/* شرح اسم المنتج  */}

                        <div className='desc'>
                            <div className="priceProd">
                                <div className="handlePound">
                                    <div className="numPound"> ج.م</div>
                                    <div className="numPound">800</div>
                                </div>
                                <div className="handlePound">
                                    <div className="numPound2">ج.م</div>
                                    <div className="numPound2">800</div>
                                </div>
                            </div>

                            <div className="prodInfo">
                                <div className="star">
                                    <div className='starB'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                </div>
                                <div className="nameOfProd">بلوزه قطنيه بيضاء</div>
                            </div>
                        </div>
                        <div className="size">
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

  {/* first Product  */}
  <div className='prod4'>
                        {/* pic */}
                        <div>
                            <img
                                onMouseOver={() => setShowLink5(true)}
                                onMouseLeave={() => setShowLink5(false)}
                                src={img5} alt="prod1"
                                className='imgHeader1' />
                        </div>
                        <div className='iconHeart'><MdFavorite /></div>

                        {showLink5 && (

                            <button className='btn'>اضف للعربة  </button>

                        )}

                        {/* شرح اسم المنتج  */}

                        <div className='desc'>
                            <div className="priceProd">
                                <div className="handlePound">
                                    <div className="numPound"> ج.م</div>
                                    <div className="numPound">800</div>
                                </div>
                                <div className="handlePound">
                                    <div className="numPound2">ج.م</div>
                                    <div className="numPound2">800</div>
                                </div>
                            </div>

                            <div className="prodInfo">
                                <div className="star">
                                    <div className='starB'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                    <div className='starG'><RiStarSFill /></div>
                                </div>
                                <div className="nameOfProd">بلوزه قطنيه بيضاء</div>
                            </div>
                        </div>
                        <div className="size">
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

                </section>
            </section>
        </section>
    )
}

export default AtherPROD
