import React from 'react'

import {Link} from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">

                <a className="navbar-brand logo" href="#">
                    Mr.Milul
                </a>
                 
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="faBars"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" smooth={true} to="header">Home 
                            <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-50}  className="nav-link" to="aboutMe">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link   smooth={true} offset={-50}  className="nav-link" to="services">Services </Link>
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true} offset={-110} className="nav-link" to="experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true}  offset={-110}className="nav-link" to="portfolio">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link  smooth={true}className="nav-link" to="contactme">contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
