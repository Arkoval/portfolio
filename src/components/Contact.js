import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {animationLeft, animationRight} from '../utils/common-animation'

function Contact(){
    let right = useRef(null);
    let left = useRef(null);
    let container = useRef(null);
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [fieldErrors, setFieldErrors] = useState({});
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validationRules = {
        name: val => val.length > 3, 
        email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        message: val => !!val

    }
    const validate = () => {
        let errors = {};
        let hasErrors = false;
        for (let key of Object.keys(inputs)){
            errors[key] = !validationRules[key](inputs[key]);
            hasErrors |= errors[key]
        }
        setFieldErrors(prev => ({...prev, ...errors}));
        return !hasErrors;
    };

    const renderFieldError = field => {
        if(fieldErrors[field]){
            return <p className='errorMsg'>Please enter a valid {field}.</p>
        }
    }

    const handleChange = e => {
        e.persist();
        setInputs(prev => ({
            ...prev, [e.target.id]: e.target.value
        }));
    };
    const handleServerResponse = (ok, msg) => {
        setServerState({
            submitting: false,
            status: {ok, msg}
        });
        if(ok){
            setFieldErrors({})
            setInputs({
                name: '',
                email: '',
                message: ''
            });
        }
    };
    const submitHandler = e => {
        e.preventDefault();
        if (!validate()){
            return;
        }
        setServerState({ submitting: true });
        axios({
            method: 'POST',
            url: 'https://formspree.io/xaylybye',
            data: inputs
        })
        .then(resp =>{
            handleServerResponse(true, 'Message sent, Thank You! :)');
        })
        .catch(resp => {
            handleServerResponse(false, resp.response.data.error);
        });
    }

    useEffect(() => {
        if (Object.keys(fieldErrors).length > 0) {
            validate();
          }

    },[inputs])

    useEffect(() => {
        animationLeft(left, container);
        animationRight(right, container);
        
    },[])

    return <div className='contact' id='contact' ref={e => {container = e}}>
            <div className='contact-left'ref={e => {left = e}}>
                <h1>Contact</h1>
                <div>Portfolio in English</div>
                <div>Portfolio in Polish</div>
                <div className='construction-warning'>Section under construction,
                <p>please contact me via email</p>
                </div>
            </div>
            <form className='contact-form' onSubmit={submitHandler} ref={e => {right = e}} noValidate>
                <label htmlFor='name'>Name:</label>
                <input
                    id='name' 
                    type='text'
                    value={inputs.name}
                    name='name'
                    className={fieldErrors.name ? "error" : ""}
                    onChange={handleChange}
                />
                {renderFieldError('name')}
                <label htmlFor='email'>Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className={fieldErrors.email ? "error" : ""}
                    onChange={handleChange}
                    value={inputs.email}
                />
                {renderFieldError('email')}
                <label htmlFor='message'>Message:</label>
                <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    className={fieldErrors.message ? "error" : ""}
                    value={inputs.message}
                />
                {renderFieldError('message')}
                {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : "success"}>
                    {serverState.status.msg}
                </p>
                )}
                <button type="submit" disabled={serverState.submitting}>
                    Submit
                </button>
                
            </form>
        </div>
}

export default Contact;