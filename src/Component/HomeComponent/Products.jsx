import React , { useState } from 'react'
import { RiStarSFill } from "react-icons/ri";

import { MdFavorite } from "react-icons/md";
import img1 from '../imgs/Rectangle 3677 (1).png'
import img2 from '../imgs/Rectangle 3677 (2).png'
import img3 from '../imgs/Rectangle 3677 (4).png'
import img4 from '../imgs/Rectangle 3677 (5).png'
import img5 from '../imgs/Rectangle 3677 (7).png'
import img6 from '../imgs/Rectangle 3677 (8).png'
import img7 from '../imgs/Rectangle 3677 (9).png'
import img8 from '../imgs/Rectangle 3677 (6).png'

const Products = () => {
    const [showLink1 , setShowLink1] = useState(false);
    const [showLink2 , setShowLink2] = useState(false);
    const [showLink3 , setShowLink3] = useState(false);
    const [showLink4 , setShowLink4] = useState(false);
    const [showLink5 , setShowLink5] = useState(false);
    const [showLink6 , setShowLink6] = useState(false);
    const [showLink7 , setShowLink7] = useState(false);
    const [showLink8 , setShowLink8] = useState(false);


    return (
        <section className='Prod'>

            <section className='contProd'>
                <a>احدث المنتجات</a>
            </section>

            <section className='cont'>

            <section class="sec1">
  {/* first prod */}
  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink1(true)}
  onMouseLeave={() => setShowLink1(false)} src={img1} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink1 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

   {/* secound product */}

   <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink2(true)}
  onMouseLeave={() => setShowLink2(false)} src={img2} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink2 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

  {/* third Product  */}

  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink3(true)}
  onMouseLeave={() => setShowLink3(false)} src={img3} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink3 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

  {/* fourth Product  */}
  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink4(true)}
  onMouseLeave={() => setShowLink4(false)} src={img4} alt='prod1' className='imgprod4'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink4 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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
            </section>
            </section>

{/* section 2  */}
            <section className='sec1'>
            <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink5(true)}
  onMouseLeave={() => setShowLink5(false)} src={img5} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink5 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

  {/* secound product  */}
  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink6(true)}
  onMouseLeave={() => setShowLink6(false)} src={img6} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink6 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

  {/* third product  */}
  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink7(true)}
  onMouseLeave={() => setShowLink7(false)} src={img7} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink7 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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

  {/* fourth product */}
  <div className='prod1'>
  {/*pic*/}
  <div>
  <img onMouseOver={() => setShowLink8(true)}
  onMouseLeave={() => setShowLink8(false)} src={img8} alt='prod1' className='imgprod1'/>
   </div>
   <div className='iconHeart'><MdFavorite /></div>
  
   
   {showLink8 && (
    
    <button   className='btn'>اضف للعربة  </button>
   
            )}
   {/* شرح اسم المنتج*/}
   <div className='desc'>
     <div className='priceProd'>
     <div className='handlePound'>
     <div className='numPound'>ج.م</div>
   <div className='numPound'>800</div>
     </div>

     <div className='handlePound'>
     <div className='numPound2'>ج.م</div>
     <div className='numPound2'>800</div> 
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
            </section>
        </section>
    )
}

export default Products
