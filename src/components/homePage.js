import React from 'react';
import '../styles/homePage.css';
import NavBar from '../components/navBar';
import WorkHome from './workPage/workHome';
import About from '../components/about';
import { FaRegHandPointRight } from "react-icons/fa";

const Homepage = () => {

    const scrollDown = () => { 
        window.scrollTo(window.scrollX, window.scrollY + 700);
    }
    
    return (
        <div id='home'>
            <div className='wave'>
                <NavBar />
                    <div className='main-wrap'>
                        <div className='title-wrap'>
                            <div className='header-wrap'>
                                <h1 className='hi'>Hey, I'm Liz.</h1>
                            </div>
                            <a href="#art" target="_self"><h4 className='title'>Artist <FaRegHandPointRight className='point'/></h4></a>
                            <a href="#dev" target="_self"><h4 className='title'>Software Developer <FaRegHandPointRight className='point'/></h4></a>
                            <a href="#design" target="_self"><h4 className='title'>Designer <FaRegHandPointRight className='point'/></h4></a>
                        </div>
                        <div className='cartoon'></div>
                    </div> 
            </div>
            {/* <div className='arrow-wrap'>
                <div className='down-arrow' onClick={ () => scrollDown() }></div> 
            </div>  */}
            <About />
            <WorkHome scrollDown={() => scrollDown()}/>       
        </div>
    )
}

export default Homepage;