import React from 'react';
// import dummyData from '../dummyData';

function Project({data, x}){

    return (
        <>
            {data.map(project => 
                <div key={project.id} className='project-slide' style={{transform: `translateX(${10 + x*100}%)`}}>
                    <div className='project-details'>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div className='project-links'>
                        <a href={project.live}>LIVE</a>
                        <a href={project.code}>CODE</a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <img src={project.img} alt={project.name + ' photo'}/>
                    </div>

                </div>
                )}
        </>
    )
}

export default Project;