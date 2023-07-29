import React from 'react'
import img1 from '../imgs/c1 1 (1).png'
import img2 from '../imgs/c3 (1).png'

const StopWatching = () => {
    return (
        <section className='ContOffer'>
            {/* /*   first pic for the boy */}
 <div className='c1'>
 <img src={img1} alt="child" />
 </div>

 {/**   component in middle */}
            <div className='c2'>
                <div className='text1'><p>اكبر  خصم  علي  الاطلاق</p></div>

                <div className='text2'><h1><b>احدث ملابس الاطفال</b></h1></div>
                {/** timer component */}
                <div className='timer'>







                    <div className='secound'>
                        <h1>00 </h1>
                        <h1>ثانية</h1>
                    </div>

                    <div className='minute'>
                        <h1>00 </h1>
                        <h1>دقيقة</h1>
                    </div>


                    <div className='hour'>
                        <h1>00 </h1>
                        <h1>ساعة</h1>
                    </div>


                    <div className='day'>
                        <h1> 00 </h1>
                        <h1>يوم</h1>
                    </div>


                </div>


                <div className='shopNow'><button> تسوق الان</button></div>


            </div>

            {/* /*   secound pic for the girl/ */}
 <div className='c3'> <img src={img2} alt="child" /></div>
 </section>
    )
}
export default StopWatching
