import React from 'react';
import '../styles/about.css';
import { IconContext } from "react-icons";
import { GoFile, GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import Pdf from "../images/liz_aitken_resume_2020.pdf"

const About = props => {
    const { scrollDown } = props;

    return (
        <div className='App'>
           <a id='about'><h1 className='page-titles'>about</h1></a> 
           <div className='about-wrap'>
                <div className='headshot-paragraph-wrap'>
                    <div className='headshot'></div>
                    <div className='paragraph-icon-wrap'>
                        <p className='about-paragraph'>I love creating and building things. The problem-solving process of creation first drew me towards the fine arts and has now drawn me to software development. While designing a website for my artwork, I desired to go a bit further and do something outside of the template I was working in. <br/>Through that desire, I was introduced to a bit of HTML, CSS, and JavaScript. After that, the world of software development opened up and I climbed down the rabbit hole.
                        <br/> When I am not exploring the vast universe of software development, I am probably painting or adventuring the great outdoors with my husband and my pup. Feel free to check out my artist website as well, <a href="https://www.lizaitkenart.com/">www.lizaitkenart.com</a>.</p>     
                        <div className='icon-wrap'>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <a href={Pdf} target = "_blank"><GoFile/></a>
                                <GoMail />
                                <FaLinkedin />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow-wrap'>
                <div className='down-arrow' onClick={ () => scrollDown() }></div> 
            </div> 
        </div>
    )
}


export default About;