import React, { useEffect } from 'react';
// import dummyData from '../dummyData';

function Project({data, active}){



    return (
        <>
            {data.map((project, i) => {
                return (
                    <div key={i} className={`project-slide ${active === i ? 'active' : 'inactive'}`}
                    style={{transform: `translateX(${-active*100}%)`}}>
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
                )
            }
                )}
        </>
    )
}

export default Project;