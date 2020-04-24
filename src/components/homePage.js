import React from 'react';
import '../styles/homePage.css';
import NavBar from '../components/navBar';
import WorkHome from './workPage/workHome';
import About from '../components/about';

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
                                <h1 className='header'>Hey, I'm Liz.</h1>
                                {/* <div className='rectangle'></div> */}
                            </div>
                            <h4 className='title'>Artist</h4>
                            <h4 className='title'>Software Developer</h4>
                            <h4 className='title'>Designer</h4>
                        </div>
                        <div className='cartoon'></div>
                    </div> 
            </div>
            <div className='arrow-wrap'>
                <div className='down-arrow' onClick={ () => scrollDown() }></div> 
            </div> 
            <WorkHome scrollDown={() => scrollDown()}/>   
            <About />    
        </div>
    )
}

export default Homepage;