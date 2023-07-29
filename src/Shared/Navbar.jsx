import React ,{useState}from 'react'
import "./Navbar.css"
import { TbShoppingCart } from "react-icons/tb";//cart
import { AiOutlineHeart } from "react-icons/ai";//Heart
import { AiOutlineUser } from "react-icons/ai";//user
import { AiOutlineSearch } from "react-icons/ai";//search
import { Link } from 'react-router-dom';
import logo from '../Component/imgs/Vector.png'
import Search from '../Component/search/SlideSearch'
import Card from '../Component/card/SlideCard'

const Navbar = () => {
  const [showCard , setShowCard] = useState(false)
  const [search , setsearch] = useState(false)
  return (
    
    <div className='NAV'>
    {  search ||
     <div className='handleIcons'>
    <div className="iconsss" onClick={() =>setShowCard(true)}  ><TbShoppingCart /></div>
    <div className="iconsss"><AiOutlineHeart /></div>
    <div className="iconsss"><AiOutlineUser /></div>
    <div className="iconsss" onClick={() =>setsearch(true)}><AiOutlineSearch /></div>
    
    
      
    </div>
    }
    
   {search ||  <Link to={"/"} className='btnNav1'>الرئيسية</Link>}
    {search || <Link to={"/ProductPage"} className='btnNav'>المنتجات</Link>}
    {search || <Link to={"/services"} className='btnNav'> الخدمات </Link>}
    {search || <Link to={"/aboutus"} className='btnNav'> نبذه عن  </Link>}
   {search ||  <Link className='btnNav'> المدونة </Link>}
   {search ||  <Link className='btnNav'> اتصل بنا </Link>}
    

    

    {search || <img src={logo} alt="Logo" className='logo'/>}
    {
   
      search &&   <Search search={search} setSearch={setsearch}/>
    }

    {
      showCard && <Card showCard = {showCard} setShowCard = {setShowCard}/>
    }
   
    </div>
   
  )
}

export default Navbar