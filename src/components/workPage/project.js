import React, { Component } from 'react';
// import '../styles/homePage.css';
import PopUp from './popup';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state= {
            popupState: false
        };
    }

    togglePopup = () => {
        this.setState({
          popupState: !this.state.popupState
        });
    }

    render() {
        const { popupState } = this.state;
        const { project_information } = this.props;
        const imgUrl = project_information.images[0];

        var workImage = {
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            width: '10rem',
            height: '10rem',
            margin: '1.5rem',
            display: 'flex',
            alignSelf: 'center',
            padding: 0
        }

        return (
            <>
               <div className='work-card'>
                    <div className='image-paragraph-wrap'>
                        <div style={workImage} alt={project_information.title}></div>
                        <div className='title-para-button-wrapping'>
                            <a id='work'><h1>{ '{ ' + project_information.title + ' }'}</h1></a>
                            <p className='work-paragraph'>{project_information.about}</p>
                            <div className='work-button-wrapping'>
                                <button className='work-button' onClick={() => this.togglePopup()}>More Info</button>              
                            </div>
                        </div>
                    </div>
                </div> 
                { !!popupState ? 
                    <PopUp info={project_information} togglePopup={this.togglePopup}/> 
                    :
                    null
                }
            </>
        )
    }
}

export default Project;