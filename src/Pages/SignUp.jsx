import React , {useState} from 'react'

import img from '../Component/imgs/Rectangle 3706(100).png'
import img1 from '../Component/imgs/Group 9318(19).svg'
import img2 from '../Component/imgs/Vector(19).png'
import img3 from '../Component/imgs/Group 9319.svg'
import img4 from '../Component/imgs/logos_pinterest.svg'
import img5 from '../Component/imgs/Facebook - Original (1).svg'
import img6 from '../Component/imgs/Twitter (1).svg'
import "../SignUpStyle/SignUp.css"
import "../LoginStyle/Login.css"
import axios from 'axios'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const navigate = useNavigate();

  const handleSubmit = () => {
    let userData = { name, password, email}
    // console.log(userData);
    // handle Api
    axios
    .post('http://localhost:8000/admins' , userData )
    .then((res) => {
      toast.success("user registered successfully !")
      setTimeout(() => {
        navigate(`/login`)
      } , 1000)
    })
    .catch((err) => {
      toast.error(err.message)
    })
  }
   return (
    <section className='Sign'>
      <section className='signup'>
      <div className='smart2'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    </div>

    <div className='loginDiv1'>
      <h5 className='loginH5'> انشاء حساب</h5>
      <p className='loginP'>انشئ حساب مجاني واستمتع به</p>
    </div>

<div className='input'>
 <div>
 <input type="text" placeholder='الاسم' className='Name' value={name} onChange={e => setName(e.target.value)} />
 </div>

 <div>
 <input type="email" placeholder='البريد الاكتروني' className='email' value={email} onChange={e => setEmail(e.target.value)} />
 </div>

 <div>
 <input type="password" placeholder='كلمة المرور' className='password' value={password} onChange={e => setPassword(e.target.value)} />
 </div>
</div>


    <div className='btnLogin'>
      <p className='loginP'>هل نسيت كلمه المرور؟</p>
      <button className='buttonLogin' onClick={handleSubmit}>انشاء حساب</button>
    </div>

    <div className='textOfLogin'>:او سجل الدخول عبر</div>

    <div className='imgsLogin'>
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
      </section>

      <section className='ImgSign'>
        <div>
          <img src={img} alt="" className='signOfImg' />
        </div>
      </section>
    </section>
  )
}

export default SignUp
