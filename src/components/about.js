import React from 'react';
import '../styles/about.css';
import One from '../images/graphic.png';
import Two from '../images/computer.png';
import Three from '../images/magic-wand.png';
import Four from '../images/electronics.png';

const About = props => {

    return (
           <div className='about-wrap'>
                    <p className='begin-p'>I love creating and building things. Although I stay flexible with my communication, I usually have a fairly consistent approach to my projects. Whatever I am doing usually begins with a pencil and paper. Below is a bit of information about my UX/UI Design process.</p>            
                    <div className='paragraph-icon-wrap'>
                        <div className='process-icon-title-wrap'>
                            <img src={One} alt='Touch icon' className='process-icon'/>
                            <h2>Brain Storming</h2>
                        </div>
                        <p className='about-paragraph'>
                            The first step in my process is gathering the requirements and sketching out on paper a general ideation of the project. We hash out alot of the research (including user personas) in this stage.
                        </p>  
                    </div>
                    <div className='paragraph-icon-wrap'>
                        <div className='process-icon-title-wrap'>
                            <img src={Two} alt='Touch icon' className='process-icon'/>
                            <h2>Wireframing</h2>
                        </div>
                        <p className='about-paragraph'>
                            Then, I get into the flow of the site. Not too detailed now! I just want a general overview of where and how things should go. 
                        </p>  
                    </div>
                    <div className='paragraph-icon-wrap'>
                        <div className='process-icon-title-wrap'>
                            <img src={Three} alt='Touch icon' className='process-icon'/>
                            <h2>Designing</h2>
                        </div>
                        <p className='about-paragraph'>
                            In this step, I use my previous steps to inform a more detailed layer. This is where we bring in the colors, fonts, icons, cool buttons, etc...Really, the intentional glamour phase.
                        </p>  
                    </div>
                    <div className='paragraph-icon-wrap'>
                        <div className='process-icon-title-wrap'>
                            <img src={Four} alt='Touch icon' className='process-icon'/>
                            <h2>Prototyping</h2>
                        </div>
                        <p className='about-paragraph'>
                            Through the prototyping phase, we add a little animation magic to our project. A few mico-interactions here and there...linking together each interface with some awesome transitions. 
                        </p>  
                    </div>

            </div>
    )
}


export default About;