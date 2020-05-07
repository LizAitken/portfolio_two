import React, { Component } from 'react';
import PopUp from './popup';
import '../../styles/work.css';

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

        var workImage = {
            width: '80%',
            margin: '1rem',
            display: 'flex',
            alignSelf: 'center',
            padding: 0,
            top: '50%',
            left: '50%'
        }

        return (
            <>
               <div className='work-card'>
                    <img style={workImage} src={project_information.images[0]} alt={'Example image of ' + project_information.title}></img>
                    <div className='image-paragraph-wrap'>
                        <div className='title-para-button-wrapping'>
                            <a id='work'><h1>{ '{ ' + project_information.title + ' }'}</h1></a>
                            { project_information.icons != '' ?
                                project_information.icons.map((image, index) => {
                                    return (
                                        <img className='type-icon' src={image} key={index}></img>
                                    )
                                })
                                :
                                null
                            }
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