import React from 'react'

const About = () => {
  return (
    <div>
      <section id = "about-section" className = "about container">
      <div className = "title">
        <h2>about</h2>
        <div>
          <h2>about me</h2>
        </div>
      </div>

      <div className = "row">
        <div className = "row-left">
          <img className = "about-img" src = "../assets/about-photo.jpg" alt = "about photo"/>
        </div>

        <div className = "row-right">
          <p className = "text">I am creative and highly motivated Full Stack Web Developer / Server Administrator seeking a position that will utilize my experience and skills as well as offer me the opportunity for advancement. <br/>My core competence lies in complete end to end management of a new software development project, and I am seeking opportunities to build websites or softwares from the ground up for you or your business.</p>
          <div className = "about-content">
            <ul>
              <li className = "text">
                <span>Name: </span>
                <span>Joseph charles Vargas</span>
              </li>
              <li className = "text">
                <span>Date of Birth: </span>
                <span>June 02, 1993</span>
              </li>
              <li className = "text">
                <span>Residence: </span>
                <span>PH</span>
              </li>
              <li className = "text">
                <span>Address: </span>
                <span>Metro Manila, Quezon City</span>
              </li>
              <li className = "text">
                <span>Email: </span>
                <span>jcc.devweb@gmail.com</span>
              </li>
              <li className = "text">
                <span>Phone: </span>
                <span>+639 1937 11606</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About