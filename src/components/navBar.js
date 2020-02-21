import React from 'react';
import '../styles/navBar.css';

const NavBar = () => {
    return (
        <div className="nav-wrap">
            <ul className="nav-list">
                <a href="#work" target="_self"><li>work</li></a>
                <a href="#about" target="_self"><li>about</li></a>
                <a href="#contact" target="_self"><li>contact</li></a>
            </ul>                  
        </div>
    )
}


export default NavBar;