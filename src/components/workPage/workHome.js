import React from 'react';
import '../../styles/work.css';
import Project from './project';
import { design, dev, art } from '../../information';
import Build from '../../images/build_icon@2x.png';
import Design from '../../images/design_icon@2x.png';

const WorkHome = () => {

    return (
        <div className="work-wrap">
            <div className='rep-title-wrap'>            
                <img className='rep-icon' src={Design} alt='Build icon'/>
                <a id='design'><h1 className='page-titles'>UX/UI Design</h1></a> 
            </div>
            <div className="project-divider-wrap"> 
                <ul className='cards'>
                    {
                        design.map((project, index) => {
                            return (
                                        <Project project_information={project} key={index}/>
                                )
                            })
                    }
                </ul>
            </div>
            <div className='rep-title-wrap'>            
                <img className='rep-icon' src={Build} alt='Build icon'/>
                <a id='dev'><h1 className='page-titles'>Software Development</h1></a>
            </div>
            <div className="project-divider-wrap">  
                <ul className='cards'>
                    {
                        dev.map((project, index) => {
                            return (
                                        <Project project_information={project} key={index}/>
                                )
                            })
                    }
                </ul>
            </div>

            <a id='art'><h1 className='page-titles'>Art</h1></a> 
            <div className="project-divider-wrap"> 
                <ul className='cards'>
                    {
                        art.map((project, index) => {
                            return (
                                        <Project project_information={project} key={index}/>
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WorkHome;