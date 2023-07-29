import React from 'react'
import img1 from '../imgs/2-removebg-preview (1) 1 (1).png'
import img2 from '../imgs/1-removebg-preview (1) 1.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='girl'>
      <div className="text2">
            <p className='p'>خصم كبير</p>
            <h3 className='h3'>فساتين بناتي</h3>
            <a className='a'>تسوق الآن</a>
        </div>
        <div className="imgGirl">
            <img src={img1} alt="" />
        </div>
      </div>

      <div className="boy">
        <div className="textOfBoy">
            <h3 className='offerH3'>ملابس الاطفال</h3>
            <p className='offerP'>%50 خصم</p>
            <a>تسوق الآن</a>
        </div>
        <div className="imgBoy">
            <img src={img2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offers
