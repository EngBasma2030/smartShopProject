import React from 'react'
import imgCard from '../imgs/Rectangle 3675.png'
import Counters from '../Count/Counters'
import "./card.css"


const SlideCard = ({showCard, setShowCard}) => {
  return (
    <div className='Card'>
   
          <div >
          <div className='btnCatd' >
                    <button className='btnCard' onClick={() => {
                        showCard && setShowCard(false)
                    }}>X</button>
                </div>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>

            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>

            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>

            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>
            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>

            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>

            <div className='card'>
              <div>
              <img src={imgCard} alt="" className='imgCard' />
              </div>

                <p className='pCard'>جاكت جلد اسود</p>
                <h5 className='cardH5'>xl</h5>
                <h4 className='cardH4'>500</h4>  
                
          
                <p className='closeCard'>X</p>
            
                <div className='Counters'>
                <Counters  />
                </div>
            </div>
    </div>
  )
}

export default SlideCard
