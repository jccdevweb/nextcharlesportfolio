import React from 'react'

const Home = () => {
  return (
    <div>
      <section id = "home-section" className = "home container">
      <div className = "row">
        <div className = "row-left">
          <h3>hello!</h3>
          <h1>Im <span> Joseph charles </span></h1>
          <h2>a Full Stack Developer</h2>
          <div className = "home-pg-btn">
            <button type = "button" className = "btn"><a href = "#contact-section" className = "nav-link">hire me</a></button>
            <button type = "button" className = "btn"> <a href = "#project-section" className = "nav-link">my works</a></button>
          </div>
        </div>

        <div className = "row-right">
          <div className = "img-border">
            <div className = "img-container">
              <img className = "my-photo"src = "../assets/my-photo.jpg" alt = "my photo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home