import React, { useEffect, useRef} from 'react';
import {animationCursor, animationText} from '../utils/common-animation'

function HomePage() {
    let text = useRef(null);
    let cursor = useRef(null);

    const words = ["Front End Developer", "Graphic Designer"]


    useEffect(() => {
        animationCursor(cursor);
        animationText(text, words)
        
    })

    return (
        <div className='homePage' id='home'>
            <div className='homePage-content'>
                <h1>Hello, my name is Arek and</h1>
    <h2>I'm a <span ref={e => {text = e}}></span><span ref={e => {cursor = e}} className='cursor'>_</span></h2>
            </div>
        </div>
    )
}

export default HomePage;