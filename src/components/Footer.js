import React from 'react';
import { ReactComponent as GitHub } from '../utils/github.svg';
import {ReactComponent as LinkedIn} from '../utils/linkedin.svg';
import {ReactComponent as Email} from '../utils/arroba.svg';

function Footer() {



    return (
        <div className='footer'>
            <div>
                <GitHub/>
                <h1>GitHub</h1>
                <p>Take a look at my code</p>
            </div>
            <div>
                <LinkedIn/>
                <h1>LinkedIn</h1>
                <p>Add me on LinkedIn</p>
            </div>
            <div>
                <Email/>
                <h1>Email</h1>
                <p>Contact me via email
                <strong>arkkowalski95@gmail.com</strong>
                </p>
            </div>
            
        </div>
    )
}

export default Footer;