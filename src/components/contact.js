import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className='contact-wrap'>
           <a id='contact'><h1 className='page-titles'>contact</h1></a>
           <p>Please feel free to send me a message! I would love to hear from you.</p>
           <div className='form-wrap'>
                <form>
                    <input placeholder='Name'/>
                    <input placeholder='E-mail'/>
                    <textarea placeholder='What would you like to contact me about?'/>
                </form>
            </div>
            <a href="#home" target="_self"><p className='back-link'>Back to the top!</p></a>
        </div>
    )
}

export default Contact;