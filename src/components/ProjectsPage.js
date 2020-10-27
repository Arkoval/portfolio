import React, { useEffect, useState } from 'react';
import Project from './Project';
import Data from '../dummyData';

function ProjectsPage() {
    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const {data} = Data;

    const goLeftHandler = () => { 
        active < 1 ? setActive(data.length -1) : setActive(active - 1);
        // x < 1 ? setActive(data.length -1) : setActive(x - 1);

    }

    const goRightHandler = () => {
        active === data.length -1 ? setActive(0) : setActive(active + 1);
        // x < data.length - 1 ? setActive(x + 1) : setActive(0);
           
    }
    useEffect(() => {
        setIsMobile(window.screen.width <= 610);
    }, [isMobile])


    return (
        isMobile ?
        <div className={'projects'} id='projects'>
            <div className='m-projects-slider'>
            <Project data={data} active={active} isMobile={isMobile}/>
            </div>
        </div>
        :
        <div className={'projects'} id='projects'>
            <button className='btn-left' onClick={goLeftHandler}>&#10094;</button>
            <div className='projects-slider'>
            <Project data={data} active={active}/>
            </div>
            <button className='btn-right' onClick={goRightHandler}>&#10095;</button>
        </div>
    )
}

export default ProjectsPage;


// import React, { useEffect, useState } from 'react';
// import Project from './Project';
// import Data from '../dummyData';

// function ProjectsPage() {
//     const [active, setActive] = useState(0);
//     const [isMobile, setIsMobile] = useState(false);
//     const {data} = Data;

//     const goLeftHandler = () => { 
//         active < 1 ? setActive(data.length -1) : setActive(active - 1);
//         // x < 1 ? setActive(data.length -1) : setActive(x - 1);

//     }

//     const goRightHandler = () => {
//         active === data.length -1 ? setActive(0) : setActive(active + 1);
//         // x < data.length - 1 ? setActive(x + 1) : setActive(0);
           
//     }
//     useEffect(() => {
//         setIsMobile(window.screen.width <= 610);
//         console.log(isMobile)
//     })


//     return (
//         isMobile ?
//         <div className={'m-projects'} id='projects'>
//             <Project data={data} active={active} isMobile={isMobile}/>
//         </div>
//         :
//         <div className={'projects'} id='projects'>
//             <button className='btn-left' onClick={goLeftHandler}>&#10094;</button>
//             <div className='projects-slider'>
//             <Project data={data} active={active}/>
//             </div>
//             <button className='btn-right' onClick={goRightHandler}>&#10095;</button>
//         </div>
//     )
// }

// export default ProjectsPage;