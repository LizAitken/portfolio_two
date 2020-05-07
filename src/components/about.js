import React from 'react';
import '../styles/about.css';
import { IconContext } from "react-icons";
import { GoFile, GoMail, GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import Pdf from "../images/liz_aitken_resume_2020.pdf"

const About = props => {

    return (
        <div className='App'>
           {/* <a id='about'><h1 className='about-title'>about</h1></a>  */}
           <div className='about-wrap'>
                <div className='headshot-paragraph-wrap'>
                    <div className='blob'>
                        <div className='headshot'>
                    </div>                    
                    <div className='paragraph-icon-wrap'>
                        <a id='about'><h1 className='about-title'>about</h1></a>
                        <p className='about-paragraph'>I love creating and building things. The problem solving process of creation first drew me towers the fine arts, then software development, and now UX/UI design. While designing a website for my artwork, I desired to go a bit further and do something outside of the template I was working in. Through that desire, I was introduced to a bit of HTML, CSS, and JavaScript. After that, the world of software development and website design opened up and I climbed down the rabbit hole.
                        <br/> When I am not exploring the vast universe of UX/UI design, I am probably painting or adventuring the great outdoors with my husband and my pup. Feel free to check out my artist website as well, <a href="https://www.lizaitkenart.com/" className='web-link' target = "_blank" rel="noopener noreferrer">www.lizaitkenart.com</a>.</p>     
                        <div className='icon-wrap'>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <a href={Pdf} target="_blank" rel="noopener noreferrer"><GoFile/></a>
                                <a href="https://github.com/LizAitken" target = "_blank" rel="noopener noreferrer"><GoMarkGithub /></a>
                                <a href="mailto:liz.a.aitken@gmail.com" target = "_blank" rel="noopener noreferrer"><GoMail /></a>
                                <a href="https://www.linkedin.com/in/liz-aitken-dev/" target = "_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </IconContext.Provider>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;