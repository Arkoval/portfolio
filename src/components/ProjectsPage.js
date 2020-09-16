import React, { useState } from 'react';
import Project from './Project';
import Data from '../dummyData';

function ProjectsPage() {
    const [page, setPage] = useState(0)
    // const {data} = Data;

    const goLeftHandler = () => { 
        setPage(page - 1)
        console.log(page);
    }

    const goRightHandler = () => {
        setPage(page + 1)
        console.log(page)
    }

    return (
        <div className='projects'>
            <div className='projects-background'>
                <h1>Proj</h1>
                <h1>ects</h1>
            </div>
            <Project/>
            <button onClick={goLeftHandler}>Left</button>
            <button onClick={goRightHandler}>right</button>
        </div>
    )
}

export default ProjectsPage;