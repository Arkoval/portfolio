import React, { useEffect, useRef } from 'react';
import {animationLeft, animationRight} from '../utils/common-animation'


function SkillsPage() {
    let right = useRef(null);
    let left = useRef(null);
    let container = useRef(null);

    useEffect(() => {
        animationLeft(left, container)
        animationRight(right, container)
    })

    return (
            <div className='skills-content' id='skills' ref={e => {container = e}}>
                <div className='skills-left' ref={e => {left = e}}>Skills</div>
                <div className='skills-right' ref={e => {right = e}}>
                    <div><h2>HTML5</h2></div>
                    <div><h2>CSS3 / SASS</h2></div>
                    <div><h2>JAVASCRIPT ES6+</h2></div>
                    <div><h2>REACT & HOOKS</h2></div>
                    <div><h2>REDUX</h2></div>
                    <div><h2>REACT ROUTER</h2></div>
                    <div><h2>GSAP</h2></div>
                    <div><h2>GIT</h2></div>
                    <div><h2>ADOBE</h2></div>
                </div>
            </div>
        

    )
}

export default SkillsPage;