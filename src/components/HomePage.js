import React from 'react';

function HomePage() {

    const scrollHandler = (e) => {
        console.log('scrolling')
    }

    return (
        <div className='homePage'>
            <div className='homePage-content'>
                <h1>Hello, my name is <span>Arek</span> and</h1>
                <h2>I'm a Front End Developer</h2>
            </div>
        </div>
    )
}

export default HomePage;