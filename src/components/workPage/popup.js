import React, { Component } from 'react';
import '../../styles/popup.css';
import Carousel, { Modal, ModalGateway } from 'react-images';
import ReactPlayer from 'react-player';

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modalIsOpen: false
        };
    }

    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };
    

    render () {
        const { info, togglePopup } = this.props;
        const { modalIsOpen } = this.state;

        const customStyles = {
            view: (base, state) => ({
                ...base,
                filter: state.interactionIsIdle ? 'grayscale(100%)' : null,
                overflow: 'hidden',
                position: 'relative',
                transition: 'filter 300ms',
              }),
              footerCount: () => ({
                  fontSize: '1.5rem'
              })
          }

    return (
        <div className='popup'>
            <div className='popup-wrap'>
                <div className='button-wrap'>
                    <button className='popup-button' onClick={() => togglePopup()}>X</button>
                </div>
                <div className='title-wrap'>
                    <h1>{info.title}</h1>
                    { info.tools ? 
                        <div className='modal-image'>
                            <img className='head-photo' 
                                alt={'A photo of ' + info.title}
                                src={info.main_images[0].source}
                                onClick={() => this.toggleModal()}>
                            </img>
                            <div className='image-writing' onClick={() => this.toggleModal()}>Click to See More Photos</div>
                        </div>
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
                <div className='video-wrap'>
                    {info.movie ? 
                        <ReactPlayer className='video'
                            url={ info.movie[0] }
                            controls={true}
                            width={'80%'}
                            />
                        :
                        null
                    }
                </div>

                { info.tools ? 
                <div className='main-side-wrap'>
                    <div className='main-work-wrap'>
                        <div className='about-work-wrap'>
                            <h3 className='about-title-p'>About the Project</h3>
                            <p className='work-p'>{info.about}</p>
                            <p className='work-p'>{ info.moreInfo }</p>
                            <p className='work-p'>{info.moreInfoTwo}</p>
                        </div>
                        { info.problems ? 
                        <div className='about-work-wrap'>
                            <h3 className='about-title-p'>Challenges</h3>
                            <p className='work-p'>{info.problems}</p>
                            <p className='work-p'>{ info.moreProblems }</p>
                        </div>
                        :
                        null
                        }
                        { info.future ? 
                        <div className='about-work-wrap'>
                            <h3 className='about-title-p'>Future Thoughts</h3>
                            <p className='work-p'>{info.future}</p>
                        </div>
                        :
                        null
                        }
                    </div>
                    <div className='sidebar-wrap'>
                            { info.methodology ? 
                                <div className='side-info'>
                                    <h4 className='sidebar-title'>Methodologies</h4>
                                        <ul>{info.methodology.map((method, k) => { 
                                                return (
                                                    <li key={k} className='method-info'>{method}</li>
                                                )
                                            })

                                        }
                                        </ul>
                                </div>
                                :
                                null
                            }
                        
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
                        <h4 className='sidebar-title'>This project is private.<br /> Please contact me at <br />liz.a.aitken@gmail.com if you have any questions.</h4>
                        :
                        <button className='work-button'>
                            <a href={info.links.github || info.links.design } target='_blank' rel="noopener noreferrer">Project Source</a>
                        </button>
                        }
                    </div>
                </div> 
                :
                null
                }
            </div>
            <ModalGateway>
                            {modalIsOpen ? (
                                <Modal onClose={this.toggleModal}>
                                <Carousel views={info.main_images} styles={customStyles}/>
                                </Modal>
                            ) : null}
            </ModalGateway>
        </div>
    )
    }
}

export default PopUp;