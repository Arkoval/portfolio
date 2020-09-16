import React from 'react';
import dummyData from '../dummyData';

function Project(){
    const {data} = dummyData;

    return (
        <>
            {data.map(project => 
                <div key={project.id} className='project'>
                    <div className='projectDetails-container'>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div className='project-links'>
                        <a href={project.live}>LIVE</a>
                        <a href={project.code}>CODE</a>
                        </div>
                    </div>
                    <div className='project-screen'>
                        <img src={project.img} alt={project.name + ' photo'}/>
                    </div>

                </div>
                )}
        </>
    )
}

export default Project;