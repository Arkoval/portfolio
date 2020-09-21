import React from 'react';
import {ReactComponent as GitHub } from '../utils/github.svg';
import {ReactComponent as LinkedIn} from '../utils/linkedin.svg';
import {ReactComponent as Email} from '../utils/arroba.svg';


function Footer() {
    
    return (
        <div className='footer'>
            <div className='footer-social'>
                <a href='https://github.com/arkoval'><GitHub className='github'/></a>
                <h1>GitHub</h1>
                <p>Take a look at my code</p>
            </div>
            <div className='footer-social'>
                <a href='https://www.google.pl'><LinkedIn className='linkedin'/></a>
                <h1>LinkedIn</h1>
                <p>Add me on LinkedIn</p>
            </div>
            <div className='footer-social'>
                <a href='mailto: arkkowalski95@gmail.com'><Email className='email'/></a>
                <h1>Email</h1>
                <p>Contact me via email</p>
                <strong> arkkowalski95@gmail.com</strong>
            </div>
            
        </div>
    )
}

export default Footer;