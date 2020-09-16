import React, { useState } from 'react';

function Contact(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        console.log(name, email, description)
    }

    return <div className='contact'>
            <div className='contact-right'>
                <h1>Contact</h1>
                <div>Portfolio in English</div>
                <div>Portfolio in Polish</div>
            </div>
            <form className='contact-form' onSubmit={submitHandler} >
                <label htmlFor='name'>Name:</label>
                <input type='text' value={name} name='name' onChange={e => setName(e.target.value)}/>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='description'>Message:</label>
                <textarea name='description' value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="submit" value="Send" />
            </form>
        </div>
}

export default Contact;