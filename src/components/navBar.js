import React from 'react';
import '../styles/navBar.css';
import { IconContext } from "react-icons";
import { GoFile, GoMail, GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import Pdf from "../images/liz_aitken_resume_2020.pdf";
import Article from "../images/interface.png";

const NavBar = () => {
    return (
        <div className="nav-wrap">
            <div className="sticky">
                <div className='icon-wrap-nav'>
                    <IconContext.Provider value={{ className: 'nav-icons' }}>
                        <a href={Pdf} target="_blank" rel="noopener noreferrer"><GoFile/></a>
                        <a href="https://github.com/LizAitken" target = "_blank" rel="noopener noreferrer"><GoMarkGithub /></a>
                        <a href="mailto:liz.a.aitken@gmail.com" target = "_blank" rel="noopener noreferrer"><GoMail /></a>
                        <a href="https://www.linkedin.com/in/liz-aitken-dev/" target = "_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://hypepotamus.com/people/liz-aitken/" target="_blank" rel="noopener noreferrer"><img className='nav-icons' src={Article} alt='Article link'/></a>
                    </IconContext.Provider>
                </div>
            </div>
            <ul className="nav-list">
                <a href="#art" target="_self"><li>Art</li></a>
                <a href="#dev" target="_self"><li>Software Development</li></a>
                <a href="#design" target="_self"><li>UX/UI Design</li></a>
            </ul>                  
        </div>
    )
}


export default NavBar;