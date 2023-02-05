"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const NavbarTwo = () => {
  const Links = [
    {name:'HOME', link:'/',id:'1',},
    {name:'ABOUT', link:'/about',id:'2',},
    {name:'RESUME', link:'/resume',id:'3',},
    {name:'SERVICES', link:'/services',id:'4',},
    {name:'SKILLS', link:'/skills',id:'5',},
    {name:'PROJECT', link:'/projects',id:'6',},
    {name:'CONTACT', link:'/contact',id:'7',},
  ]
  const [showNav, setShownav] = useState(false);

  console.log(showNav)
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className=" text-center md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-center items-ceter font-bold text-2xl items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black-600 mr-1 pt-2">
          <Link className="cursor-pointer" href = "/" >JCC</Link>
          </span>
        </div>
        <div onClick={()=>setShownav(!showNav)}className="text-black text-3xl absolute right-8 top-6 cursor-point md:hidden cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={showNav ? 'M6 18L18 6M6 6l12 12':'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'} />
        </svg>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${showNav ? 'top-15' : 'top-[-490px]'}`
      }>
       
        {
          
          Links.map((link)=>(
            <li key={link.id} className="nav-item md:ml-8 text-xl md:my-0 my-7">
              <Link className="nav-item text-gray-800 hover:text-gray-400 duration-500" href={link.link}>{link.name}</Link>
            </li>))
        }
        </ul>
        </div>
    </div>
  )
}

export default NavbarTwo