import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  
  const [btnname,setbtname]=useState("Login")
   
  return (
    <>
      <nav style={{background:'#171717'}} className='d-flex justify-content-between p-4 shadow   align-items-center  mx-auto'>
        <div className='ms-3'>
        <img width={150} src={logo} alt="" />
        </div>
        <div className='mt-2'>
            <ul className='list-unstyled d-flex align-items-center gap-4 me-5 fw-semibold text-white' >
                <Link className='text-white text-decoration-none' to={'/'}>Home</Link>
                <Link className='text-white text-decoration-none' to={'/upload'}>Upload</Link>
                <Link className='text-white text-decoration-none' to={'/history'}>History</Link>
                <button onClick={()=>{
                   if(btnname=="Login"){
                    setbtname("Logout")
                   }
                   else{
                    setbtname("Login")
                   }
                 
                }} className='btn btn-success' >{btnname}</button>
           
                <li><i className="fa-solid fa-user"></i></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header