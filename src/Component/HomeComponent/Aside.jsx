import React from 'react'
import imgAside1 from '../imgs/Frame 112.png'
import imgAside2 from '../imgs/woman-with-phone 1.png'
import imgAside3 from '../imgs/woman-with-phone.png'
const Aside = () => {
  return (
    <section className='Aside'>
    <section className='S1'>
        <div>
            <img src={imgAside1} alt="" />
            <h4>مع اجمل صيحات الموضه والفاشون</h4>
            <p>اطلاله فريده مع افضل تشكيله ملابس شبابي</p>
        </div>
    </section>
    <section className='S1'>
        <div>
            <h4>اشتري اللي يخليك شيك</h4>
            <p>مع احدث واجمل ملابس الشباب الحديثه</p>
            <img src={imgAside2} alt="" />
        </div>
    </section>
    <section className='S1'>
        <img src={imgAside3} alt="" />
        <h4>استمتعي بأجواء مبهره في الخروجات</h4>
        <p>مع باقه من اجمل الملابس الكاجوال بناتي المودرن</p>
    </section>
</section>
  )
}

export default Aside
