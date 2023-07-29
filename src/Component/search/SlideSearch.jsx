import React from 'react'
import "./Search.css"

const SlideSearch = ({search , setSearch}) => {
  return (
    <div className='search'>
            <button 
           onClick={() =>{
            search && setSearch(false)
           }}
           className="closeBtn">X</button>
      <p className='searchP'> عن ماذا تبحث ؟</p>
       <input class="input" type="search" name="search" className="inputSearch" placeholder="اكتب كلمه للبحث...."></input>
    </div>
  )
}

export default SlideSearch
