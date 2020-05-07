import React from 'react';
import '../../styles/work.css';
import Project from './project';
import { project_info } from '../../information';

const WorkHome = () => {

    return (
        <div className="work-wrap">
            <h1 className='page-titles'>work</h1>  
            {
                project_info.map((project, index) => {
                    return (
                        <ul className='testformat' key={index}>
                            <Project project_information={project} />
                        </ul>
                    )
                })
            } 
        </div>
    )
}

export default WorkHome;