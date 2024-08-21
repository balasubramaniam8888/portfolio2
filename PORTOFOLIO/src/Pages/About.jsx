import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";



function About() {
  return (
      <>
      <div className="container mt-5">
        <div className=" row">
          <h1 className=" display-5 border-bottom border-black">About Me <i class="bi bi-arrow-down"></i></h1>
          <div className="col  mt-5  p-5">
            <p className="display-4">
              " Well Qualified mechanical engineer with 
              experience interested to learn javascript ,So recently completed
              my M_E_R_N Stack Development now looking for a job opportunity"...
            </p>
            <div className="col-5  mt-5 display-3 d-flex justify-content-between p-3  link">
            <a href="https://www.linkedin.com/in/balasubramaniam8888" target="_blank">
            <FaLinkedinIn />
            </a>
            <a href="https://github.com/balasubramaniam8888" target="_blank">
              <FaSquareGithub />
            </a>
            <a href="https://white-josselyn-77.tiiny.site/" target="_blank">
            <PiReadCvLogoFill />
            </a>
          </div>
          </div>
        </div>
      

   
           
   
    
    
    
    
      </div>
    </>
  )
}

export default About