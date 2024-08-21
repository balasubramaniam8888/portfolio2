import React from 'react'
import { Link , useNavigate} from 'react-router-dom'


function Navbar() {
   
  const navigate = useNavigate()
 
 
    return (
    <div>
 <nav className="navbar navbar-expand-lg  navbar border-bottom border-black">
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-evenly  col-12">
            <a className="nav-link " onClick={() => navigate("/")}>
              Home
            </a>
            <a className="nav-link "  onClick={() => navigate("/about")}>
              About
            </a>

            <a className="nav-link"  onClick={() => navigate("/Skills")}>
              Skills
            </a>
            <a className="nav-link"   onClick={() => navigate("/projects")}>
              Projects
            </a>
            <a className="nav-link"   onClick={() => navigate("/ProfessionalExpreience")}>
            ProfessionalExpreience
            </a>
            <a className="nav-link"  onClick={() => navigate("/Intrests")}>
            Intrests
            </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar