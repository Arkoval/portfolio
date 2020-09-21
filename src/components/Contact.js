import React, { useState, useEffect, useRef } from 'react';
import {animationLeft, animationRight} from '../utils/common-animation'

function Contact(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    let right = useRef(null);
    let left = useRef(null);
    let container = useRef(null);

    useEffect(() => {
        animationLeft(left, container)
        animationRight(right, container)
    
    })

    const submitHandler = e => {
        e.preventDefault();
        console.log(name, email, description)
    }
    return <div className='contact' id='contact' ref={e => {container = e}}>
            <div className='contact-left'ref={e => {left = e}}>
                <h1>Contact</h1>
                <div>Portfolio in English</div>
                <div>Portfolio in Polish</div>
                <div className='construction-warning'>Section under construction,
                <p>please contact me via email</p>
                </div>
            </div>
            <form className='contact-form' onSubmit={submitHandler} ref={e => {right = e}}>
                <label htmlFor='name'>Name:</label>
                <input disabled type='text' value={name} name='name' onChange={e => setName(e.target.value)}/>
                <label htmlFor='email'>Email:</label>
                <input disabled type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='description'>Message:</label>
                <textarea disabled name='description' value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="submit" value="Send" />
            </form>
        </div>
}

export default Contact;