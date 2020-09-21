import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function PreProjectsPage() {

    let container = useRef(null);
    let left = useRef(null);
    let right = useRef(null);

    useEffect(() =>{

        gsap.fromTo(left, {
            x: -1000,
            color: 'white',
            transformOrigin: "left center",
        },
         {
                x:30,
                color:'black',
                scrollTrigger: {
                    trigger: container,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=100%"
                  },
            });
            gsap.fromTo(right, {
                x: 1000,
                color: 'black',
                transformOrigin: "left center", 
            },
             {
                    x:-30,
                    color: 'white',
                    scrollTrigger: {
                        trigger: container,
                        scrub: true,
                        start: "top top",
                        end: "+=100%"
                      },
                });
                gsap.from(container, {
                    background: '#FCFCFC',
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "+=100%"
                },
                    });
    })


    return (
        <div className='preprojects' ref={e => {container = e}}>
                <h1 ref={e => {left = e}}>Proj</h1>
                <h1 ref={e => {right = e}}>ects</h1>
        </div>
    )
}

export default PreProjectsPage;