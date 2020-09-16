import React, { useRef, useState } from 'react';
import Project from './Project';
import Data from '../dummyData';

function ProjectsPage() {
    const [x, setX] = useState(0)
    const currentSlide = useRef(1)
    const {data} = Data;

    const goLeftHandler = () => { 
        x === 0 ? setX(-(data.length - 1)) : setX(x + 1);
    }

    const goRightHandler = () => {
        x === -(data.length - 1) ? setX(0) : setX(x - 1);
        
    }

    return (
        <div className='projects'>
            {/* <div className='projects-background'>
                <h1>Proj</h1>
                <h1>ects</h1>
            </div> */}
            <div className='projects-slider'>
            <Project x={x} data={data} currentSlide={currentSlide}/>
            <button className='btn-left' onClick={goLeftHandler}>&#10094;</button>
            <button className='btn-right' onClick={goRightHandler}>&#10095;</button>
            </div>
        </div>
    )
}

export default ProjectsPage;