import React , {useState} from 'react'
import img from '../imgs/Rectangle 3705(50).png'
import Counters from '../Count/Counters'

const AsideAbout = () => {

    const [count, setCount]= useState(0);
  let incNum =()=>{
    if(count<10)
    {
    setCount(Number(count)+1);
    }
  };
  let decNum = () => {
    if(count>0)
    {
      setCount(count - 1);
    }
  }
  let handleChange = (e)=>{
    setCount(e.target.value);
    }
  return (
    <section className='CouponAside'>
        <section className='couponAside'>
            <div className='Coupon'>الكوبون</div>
            <p className='CouponP'>.ادخل رمز الكوبون الخاص بك اذا كان لديك</p>
            <div className='buttonCoupon'>
                <button className='sure'>تاكيد الكوبون</button>
                <button className='code'>رمز الكوبون</button>
            </div>

            <div className='NB'>
                <h2 className='NBH2'>ملحوظة</h2>
                <p className='NBP'>...اضافه ملحوظه للبائع</p>
            </div>

            <div className='inputAside'>
            <input class="input" type="" name="" className="inputAside2" placeholder="...اكتب ملحوظة هنا"></input>
            </div>

            <div className='sub'>
                <p className='subNum'>6000 ج.م</p>
                <p className='subb'>المجموع الفرعي</p>
            </div>

            <div className='total'>
                <p className='totalNum'>6000 ج.م</p>
                <p className='totall'>المجموع الاجمالي</p>
            </div>

            <div className='couponP'>
                <p>الشحن والضرائب محسوبة عند الدفع</p>
            </div>

            <div className='btnCoupon'>
            <button className='btnCoupon2'>الدفع</button>
                <button className='btnCoupon1'>تحديث السله</button>
            
            </div>
        </section>

        <section className='basketAside'>
            <div className='Basket'>
                <p>سلة التسوق</p>
            </div>

            <div className='addresses'>
                <p className='Total'>المجموع</p>
                <p className='quantity'>الكمية</p>
                <p className='PriceAside'>السعر</p>
                <p className='PRODUCT'>المنتج</p>
            </div>

            <div className='productAside'>
                <p className='PriceAside2'>2500 ج.م</p>
               <div className='countersAside'>
               <div className='counter'>  {/*counter*/}
                <button className='decrease' onClick={decNum}>-</button>
                <p className='elCount' onChange={handleChange}>{count}</p>
                <button className='plusY' onClick={incNum}>+</button>
            </div>
               </div>
              <p className='PriceAside1'>2500 ج.م</p>
                <div className='imgOfAside'>
                   {/* <div className='textOFAside'> */}
                   <h6 className='AsideH6'>فستان ابيض عصري</h6>
                    <p className='AsideP2'>اللون : ابيض</p>
                    <p className='AsideP1'>الوزن : 2كيلو</p>
                   {/* </div> */}
                    <img src={img} alt="" className='AsideOfImg'/>
                </div  >
                <p  className='closeOfAside'>X</p>
            </div>

            <div className='productAside'>
                <p className='PriceAside2'>2500 ج.م</p>
               <div className='countersAside'>
               <div className='counter'>  {/*counter*/}
                <button className='decrease' onClick={decNum}>-</button>
                <p className='elCount' onChange={handleChange}>{count}</p>
                <button className='plusY' onClick={incNum}>+</button>
            </div>
               </div>
              <p className='PriceAside1'>2500 ج.م</p>
                <div className='imgOfAside'>
                   {/* <div className='textOFAside'> */}
                   <h6 className='AsideH6'>فستان ابيض عصري</h6>
                    <p className='AsideP2'>اللون : ابيض</p>
                    <p className='AsideP1'>الوزن : 2كيلو</p>
                   {/* </div> */}
                    <img src={img} alt="" className='AsideOfImg'/>
                </div  >
                <p  className='closeOfAside'>X</p>
            </div>

            <div className='productAside'>
                <p className='PriceAside2'>2500 ج.م</p>
               <div className='countersAside'>
               <div className='counter'>  {/*counter*/}
                <button className='decrease' onClick={decNum}>-</button>
                <p className='elCount' onChange={handleChange}>{count}</p>
                <button className='plusY' onClick={incNum}>+</button>
            </div>
               </div>
              <p className='PriceAside1'>2500 ج.م</p>
                <div className='imgOfAside'>
                   {/* <div className='textOFAside'> */}
                   <h6 className='AsideH6'>فستان ابيض عصري</h6>
                    <p className='AsideP2'>اللون : ابيض</p>
                    <p className='AsideP1'>الوزن : 2كيلو</p>
                   {/* </div> */}
                    <img src={img} alt="" className='AsideOfImg'/>
                </div  >
                <p  className='closeOfAside'>X</p>
            </div>

            <div className='productAside'>
                <p className='PriceAside2'>2500 ج.م</p>
                
               <div className='countersAside'>
               <div className='counter'>  {/*counter*/}
                <button className='decrease' onClick={decNum}>-</button>
                <p className='elCount' onChange={handleChange}>{count}</p>
                <button className='plusY' onClick={incNum}>+</button>
            </div>
               </div>
              <p className='PriceAside1'>2500 ج.م</p>
                <div className='imgOfAside'>
                   {/* <div className='textOFAside'> */}
                   <h6 className='AsideH6'>فستان ابيض عصري</h6>
                    <p className='AsideP2'>اللون : ابيض</p>
                    <p className='AsideP1'>الوزن : 2كيلو</p>
                   {/* </div> */}
                    <img src={img} alt="" className='AsideOfImg'/>
                </div  >
                <p  className='closeOfAside'>X</p>
            </div>

            <div className='textOfAside'>
                <p className='textP1'>مسح السله</p>
                <p className='textP2'>واصل التسوق</p>
            </div>
        </section>

    </section>
  )
}

export default AsideAbout
