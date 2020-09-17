import React from 'react';
import {ReactComponent as Enso} from '../utils/enso.svg'

function HomePage() {

    const scrollHandler = (e) => {
        console.log('scrolling')
    }

    return (
        <div className='homePage'>
            <div className='homePage-content'>
                <h1>Hello, my name is <span>Arek</span> and</h1>
                <h2>I'm a Front End Developer</h2>
                <Enso onScroll={scrollHandler} className='enso'/>
            </div>
        </div>
    )
}

export default HomePage;