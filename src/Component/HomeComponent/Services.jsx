import React from 'react'
import gift from '../imgs/Gift.svg'
import wallet from '../imgs/wallet _remove.svg'
import mobile from '../imgs/mobile.svg'
import img from '../imgs/Group 8955 (1).svg'

const Services = () => {
    return (
        <div className='services'>
            <div className='div1'>
                <div className="divImg">
                    <img src={gift} alt="" />
                </div>
                <h3> عروض حصرية </h3>
                <div className="divP">
                    <p> خصومات كبيرة علي منتجاتنا </p>
                </div>
            </div>
            <div className="div2">
                <div className="divImg">
                    <img src={wallet} alt="" />
                </div>
                <h3> استرجاع الاموال </h3>

                <div className="divP2"> 
                <p> استرداد امن لاموالك او الاستبدال </p></div>
            </div>
            <div className="div3">
                <div className="divImg">
                    <img src={mobile} alt="" />
                </div>
                <h3> دعم فني </h3>
                <div className="divP3">
                    <p> دعم علي مدار الساعه </p>
                </div>
            </div>
            <div className="div4">

                <img src={img} alt="" />

                <h3> توصيل مجاني </h3>
                <div className="divP4">
                    <p> للطلبات اعلي من 200 جنيه </p>
                </div>
            </div>
        </div>
    )
}

export default Services
