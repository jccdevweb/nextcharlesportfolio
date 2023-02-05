import Link from 'next/link'
import React from 'react'
import {EnvelopeIcon,PhoneIcon,MapPinIcon} from '@heroicons/react/24/solid'
const Footer = () => {
  return (
    <div>
       <footer className = "footer container">
      <div className = "row">
        <div className = "row-left">
          <div className = "item-header">
            <h3 className = "footer-title">About</h3>
          </div>
          <div className = "footer-about-content">
          <p>
            I am creative and highly motivated Full Stack Web Developer / Server Administrator seeking a position that will utilize my experience and skills as well as offer me the opportunity for advancement
          </p>
          </div>
          <div className = "social-links">
            <Link href = "https://github.com/jccdevweb"><i className="fab fa-github" ></i></Link>
            <Link href = "https://www.linkedin.com/in/joseph-charles-vargas/" target="_blank"><i className="fab fa-linkedin-in" ></i></Link>
          </div>
        </div>

      <div className = "row-right">
        <div className = "item-header">
          <h3 className = "footer-title">have a question?</h3>
          <div className="flex pt-2">
          <div className="pt-1 mr-1"> <MapPinIcon className='w-5 h-5' /> </div>
            <div className = "text">Blk 11 Lot 19 Ephraim Street St. North Olympus, Quezon City, Philippines</div>
          </div>

          <div className="flex items-center">
          <div className="mr-1"> <PhoneIcon className='w-5 h-5' /> </div>
            <div className = "text">+639 1937 11606</div>
          </div>

          <div className="flex items-center">
            <div className="mr-2"> <EnvelopeIcon className='w-5 h-5' /> </div>
            <div className = "text"> jcc.devweb@gmail.com</div>
          </div>
        </div>
        </div>
      </div>
      
      <div className = "footer-text">
        <p className = "text">© 2020 Full Stack Developer | Joseph charles Vargas</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer