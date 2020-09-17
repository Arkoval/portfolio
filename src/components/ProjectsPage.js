import React, { useRef, useState } from 'react';
import Project from './Project';
import Data from '../dummyData';

function ProjectsPage() {
    const [active, setActive] = useState(0);
    const {data} = Data;

    const goLeftHandler = () => { 
        active < 1 ? setActive(data.length -1) : setActive(active - 1);
        // x < 1 ? setActive(data.length -1) : setActive(x - 1);

    }

    const goRightHandler = () => {
        active === data.length -1 ? setActive(0) : setActive(active + 1);
        // x < data.length - 1 ? setActive(x + 1) : setActive(0);
           
    }

    return (
        <div className='projects'>
            {/* <div className='projects-background'>
                <h1>Proj</h1>
                <h1>ects</h1>
            </div> */}
            <div className='projects-slider'>
            <Project data={data} active={active}/>
            <button className='btn-left' onClick={goLeftHandler}>&#10094;</button>
            <button className='btn-right' onClick={goRightHandler}>&#10095;</button>
            </div>
        </div>
    )
}

export default ProjectsPage;