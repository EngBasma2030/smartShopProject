import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Main = () => {
  return (
    <div className='bg-dark vh-100 text-white'>
      <h1 className='text-center mg-5 pt-4'>Smart Shop Project</h1>
      <div className='w-50 m-auto text-center'>
      <Link to={'/login'} className='me-2'>
      <Button variant="danger">Login</Button>
      </Link>
      <Link to={'/SignUp'}>
      <Button variant="danger">SignUp</Button>
      </Link>
      </div>
    </div>
  )
}

export default Main
