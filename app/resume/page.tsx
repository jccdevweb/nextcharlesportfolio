import React from 'react'
import {
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid'
const Resume = () => {

  return (
    <div><section id="resume-section" className = "resume container">
    <div className = "title">
      <h2>resume</h2>
      <div>
        <h2>resume</h2>
      </div>
    </div>

   
    <div className = "row">
      <div className = "even-col">
        <div className = "row-left">
          <h1>Experience</h1>
        </div> 
        <div className = "item">
          <div className = "icon">
            {/* <i className = "fas fa-briefcase"></i> */}
            <BriefcaseIcon style={{width:'25px'}}/>
          </div>
          <span>Dec 2019 - June 2020</span>
          <h2>Full Stack Developer - <span>GiraffeBuilder</span></h2>
          <p className = "text">GiraffeBuilder provides award-winning local social media marketing, custom content creation and curation for professionals.</p>
        </div>

        <div className = "item">
          <div className = "icon">
            {/* <i className = "fas fa-briefcase"></i> */}
            <BriefcaseIcon style={{width:'20px'}}/>
          </div>
          <span>Sept 2018 - Sept 2019</span>
          <h2>Dev Ops / Web Developer - <span>eMarketing Concepts</span></h2>
          <p className = "text">A powerful digital software and marketing services designed to drive sales. helped countless brands reach client goals. Have the proven digital marketing solutions that create explosive business success.</p>
        </div>

        <div className = "item">
          <div className = "icon">
            {/* <i className = "fas fa-briefcase"></i> */}
            <BriefcaseIcon style={{width:'20px'}}/>
          </div>
          <span>Jan 2017 - Sept 2018</span>
          <h2>Server Support Specialist - <span>GoDaddy</span></h2>
          <p className = "text">Is a very popular web host and domain registrar. They spend a lot of money on advertising, including during the Superbowl, the pinnacle of exposure when it comes to ads. </p>
        </div>
       </div>
            <div className = "even-col">
              <div className = "row-left">
                <h1>Education</h1>
              </div> 
              <div className = "item">
                <div className = "icon">
                <AcademicCapIcon style={{width:'25px'}}/>
                </div>
                 <span>Jan 2015 </span>
                  <h2>Bachelor of Science in Computer Science - <span>Access Computer College</span></h2>
                  <p className = "text">Fundamentals of Front-End and Back-End development</p>
              </div>
              </div>
    </div>
  </section></div>
  )
}

export default Resume