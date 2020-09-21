import React, { useEffect, useRef, useState } from 'react';

function HomePage() {
    let text = useRef(null);
    let [index, setIndex] = useState(0)

    const texts = ["I'm a Front End Developer", "I'm a Graphic Designer"]

    // const interval = setInterval(()=> {
    //        index == 0 ? setIndex(index++) : setIndex(index--)
    //      }, 3000)

    useEffect(() => {
        
    })

    return (
        <div className='homePage' id='home'>
            <div className='homePage-content'>
                <h1>Hello, my name is Arek and</h1>
                <h2 ref={e => {text = e}}>{texts[index]}</h2>
            </div>
        </div>
    )
}

export default HomePage;