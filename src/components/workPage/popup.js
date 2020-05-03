import React from 'react';
import '../../styles/popup.css';
import Carousel from 'react-images';

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
                    { info.title !== 'Illustrations' ? 
                    <Carousel views={info.main_images} />
                    :        
                    <div className='top_images_wrap'>
                        { info.main_images.map((image, indexImage) => {
                            return (
                                <img className='head-photo' 
                                alt={'A photo of ' + info.title}
                                src={image}
                                key={indexImage}>
                        </img>
                            )
                        })}  
                    </div> 
                    }
                </div>

                {info.movie ? 
                    <video width="80%"  controls src={info.movie}></video>
                    :
                    null
                }

                { info.title !== 'Illustrations' ? 
                <div className='main-side-wrap'>
                    <div className='main-work-wrap'>
                        <div className='about-work-wrap'>
                            <h3 className='about-title'>About the Project</h3>
                            <p className='work-p'>{info.about}</p>
                            <p>{ info.moreInfo }</p>
                        </div>
                        <div className='about-work-wrap'>
                            <h3 className='about-title'>Problems Solved</h3>
                            <p className='work-p'>{info.problems}</p>
                            <p>{ info.moreProblems }</p>
                        </div>
                    </div>
                    <div className='sidebar-wrap'>
                        <div className='side-info'>
                            { info.methodology == '' ? 
                            null
                            :
                                <h4 className='sidebar-title'>Methodologies</h4>
                            }
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
                        {info.links.design || info.links.github == 'private' ?
                        <h4 className='sidebar-title'>This project is private.<br /> Please contact me at <br />liz.a.aitken@gmail.com <br />if you have any questions.</h4>
                        :
                        <button className='launch'>
                            <a href={info.links.github || info.links.design } target='_blank' rel="noopener noreferrer">Project Source</a>
                        </button>
                        }
                    </div>
                </div> 
                :
                null
                }
            </div>
        </div>
    )
}

export default PopUp;