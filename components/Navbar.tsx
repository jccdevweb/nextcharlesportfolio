import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
          <nav className = "navbar">
      <div className = "container">
        <div className = "brand-and-toggler">
          <Link href = "index.html" className = "navbar-brand">jcc</Link>
          <button type = "button" className = "navbar-toggler" id = "navbar-toggler">
            <span>
              <i className = "fas fa-bars"></i>
            </span>
          </button>
        </div>

        <div className = "navbar-collapse">
          <ul className = "navbar-nav">
            <li className = "nav-item">
              <Link href = "/" className="nav-link">home</Link>
            </li>
            <li className = "nav-item nav-active">
              <Link href = "/about" className = "nav-link">about</Link>
            </li>
            <li className = "nav-item">
              <Link href = "/resume" className = "nav-link">resume</Link>
            </li>
            <li className = "nav-item">
              <Link href = "/services" className = "nav-link">services</Link>
            </li>
            <li className = "nav-item">
              <Link href = "/skills" className = "nav-link">skills</Link>
            </li>
            <li className = "nav-item">
              <Link href = "/projects" className = "nav-link">projects</Link>
            </li>
            <li className = "nav-item">
              <Link href = "/contact" className = "nav-link">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar