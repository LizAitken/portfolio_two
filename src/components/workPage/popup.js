import React from 'react';
import '../../styles/popup.css';

const PopUp = props => {
    const { info, togglePopup } = props;
    
    return (
        <div className='popup'>
            <div className='popup-wrap'>
                <div className='button-wrap'>
                    <button onClick={() => togglePopup()}>X</button>
                </div>
                <div className='title-wrap'>
                    <h1>{info.title}</h1>  
                    <img className='head-photo' src={info.main_images[0]} alt={'A photo of ' + info.title}></img>
                </div>
                <div className='main-side-wrap'>
                    <div className='main-work-wrap'>
                        <div className='about-work-wrap'>
                            <h3 className='about-title'>About the Project</h3>
                            <p className='work-p'>{info.about}</p>
                            { info.moreInfo !== ''} 
                            <p>{ info.moreInfo }</p>
                        </div>
                        <div className='about-work-wrap'>
                            <h3 className='about-title'>Problems Solved</h3>
                            <p className='work-p'>{info.problems}</p>
                            { info.moreProblems !== ''} 
                            <p>{ info.moreProblems }</p>
                        </div>
                    </div>
                    <div className='sidebar-wrap'>
                        <div className='side-info'>
                            <h4 className='sidebar-title'>Medium</h4>
                            <p>lorem ipsum...</p>
                        </div>
                        <div className='side-info'>
                            { info.methodology !== []}
                            <h4 className='sidebar-title'>Methodology</h4>
                            <ul>{info.methodology.map((method, k) => {
                                if (method !== '') {
                                    return (
                                        <li key={k} className='method-info'>{method}</li>
                                    )
                                }
                            })

                            }
                            </ul>
                        </div>
                        <div className='side-info'>
                            <h4 className='sidebar-title'>Tools</h4>
                            <ul>{
                                info.tools.map((tool, j) => {
                                    return (
                                        <li key={j}>{tool}</li>
                                    )
                                })
                            }                               
                            </ul>
                        </div>
                        <button className='launch'><a href={info.links.github || info.links.design } target='_blank' rel="noopener noreferrer">GitHub</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;