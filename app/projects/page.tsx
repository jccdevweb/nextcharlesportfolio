import React from 'react'

const page = () => {
  return (
    <div>
          <section id="project-section" className = "projects container">
      <div className = "title">
        <h2>projects</h2>
        <div>
          <h2>My Projects</h2>
        </div>
      </div>

    
      <div className = "row">
        <div className = "item">
          <div className = "item-overlay">
            <div>
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
            <button className="btn" data-target="#modal1">View More</button>
          </div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-overlay">
            <div>
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
            <button className="btn" data-target="#modal2">View More</button>
            </div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-overlay">
            <div>
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
          </div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-overlay">
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
          </div>
        </div>

        <div className = "item">
          <div className = "item-overlay">
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
          </div>
        </div>

        <div className = "item btn" data-target="#modal1" >
          <div className = "item-overlay">
            <a href = "#">branding & illustration design</a>
            <h3>web design</h3>
          </div>
        </div>
      </div></section>
    </div>
  )
}

export default page