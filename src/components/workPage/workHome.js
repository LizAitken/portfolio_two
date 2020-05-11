import React from 'react';
import '../../styles/work.css';
import Project from './project';
import { design, dev, art } from '../../information';

const WorkHome = () => {

    return (
        <div className="work-wrap">
        <a id='design'><h1 className='page-titles'>UX/UI Design</h1></a> 
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

        <a id='dev'><h1 className='page-titles'>Software Development</h1></a>
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