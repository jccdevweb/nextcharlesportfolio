import React from 'react'

const Skills = () => {
  return (
    <div>
      <section id = "skills-section" className="skills container">
  <div className="title">
    <h2>skills</h2>
    <div>
      <h2>my skills</h2>
    </div>
  </div>

  <div className = "row">
    <div className = "row-left">
      <div className = "item-header">
        <h1>Front-End<span> Skills</span></h1>
      </div>
      <div className = "item">
        <span><i className="fa-brands fa-html5"></i></span>
        <h2>HTML5</h2>
      </div>

      <div className = "item">
        <span><i className="fa-brands fa-css3-alt"></i></span>
        <h2>CSS3</h2>
      </div>

      <div className = "item">
        <span><i className="fa-brands fa-js"></i></span>
        <h2>JS</h2>
      </div>
      <div className = "item">
        <span><i className="fa-brands fa-react"></i></span>
        <h2>ReactJS</h2>
      </div>
    </div>
  <div className = "row-right">
    <div className = "item-header">
      <h1>Back-End <span>Skills</span></h1>
    </div>
    
    <div className = "item">
      <span><i className="fa-brands fa-php"></i></span>
      <h2>PHP</h2>
    </div>

    <div className = "item">
      <span><i className = "fab fa-sketch"></i></span>
      <h2>MySQL</h2>
    </div>

    <div className = "item">
      <span><i className="fa-solid fa-diamond"></i></span>
      <h2>NodeJS</h2>
    </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Skills