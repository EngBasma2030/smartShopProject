import React , {useState} from 'react'
import img from '../Component/imgs/Rectangle 3706(60).png'
import img1 from '../Component/imgs/Group 9318(19).svg'
import img2 from '../Component/imgs/Vector(19).png'
import img3 from '../Component/imgs/Group 9319.svg'
import img4 from '../Component/imgs/logos_pinterest.svg'
import img5 from '../Component/imgs/Facebook - Original (1).svg'
import img6 from '../Component/imgs/Twitter (1).svg'
import "../LoginStyle/Login.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  const navigate = useNavigate()
  

  const handleSubmit = () => {
    let userData = { password , email }
    console.log(userData);
    // handle Api
    setIsLoading(true)
    axios.get(`http://localhost:8000`)
    .then(res => {
      toast.success(`user logged in succ`)
      setIsLoading(false)
      navigate(`/home`)
    }).catch(e => {
      toast.error(e.message);
      setIsLoading(false)
    })
 
  }
  return (
  <section className='Login'>
   <section className='loginSec1'>
   <div className='smart'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    </div>

    <div className='loginDiv1'>
      <h5 className='loginH5'>تسجل الدخول</h5>
      <p className='loginP'>تسجيل الدخول للمتابعة في موقعنا</p>
    </div>

    <div className='divInput'>
      <div className='inputE-mail'>
      <input type="e-mail" name="e-mail" className="inputEmail" placeholder="البريد الالكتروني" value={email} onChange={e => setEmail(e.target.value)}>
    </input>
      </div>

      <div>
    <input type="password" name="password" className="inputPassword" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)}>
    </input>
      </div>
    </div>

    <div className='btnLogin'>
      <p className='loginP'>هل نسيت كلمه المرور؟</p>
      <button className='buttonLogin' onClick={handleSubmit} disabled={isLoading ? true : false}>تسجيل الدخول</button>
    </div>

    <div className='textOfLogin'>:او سجل الدخول عبر</div>

    <div className='imgsLogin'>
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
   </section>

   <section className='sectionOfImg'>
    <div>
      <img src={img} alt="" className='loginImg' />
    </div>
   </section>
  </section>
  )
}

export default Login
