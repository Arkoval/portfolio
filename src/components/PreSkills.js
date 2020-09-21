import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function PreSkillsPage() {
    let container = useRef(null);
    let left = useRef(null);
    let right = useRef(null);

    useEffect(() =>{
        gsap.fromTo(left, {
            x: -500,
            autoAlpha: 0, 
            transformOrigin: "left center",
        },
         {
                x:-100,
                autoAlpha:1,
                scrollTrigger: {
                    trigger: container,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=100%"
                  },
            });
            gsap.fromTo(right, {
                x: 500,
                autoAlpha: 0, 
                transformOrigin: "left center", 
            },
             {
                    x:70,
                    autoAlpha:1,
                    scrollTrigger: {
                        trigger: container,
                        scrub: true,
                        start: "top top",
                        end: "+=100%"
                      },
                });
    })

    return (
            <div className='preskills-content' ref={e => {container = e}}>
                <div ref={e => {left = e}} className='preskills-left'>Ski</div>
                <div ref={e => {right = e}} className='preskills-right'><div className='square'></div>lls</div>
                
            </div>
        

    )
}

export default PreSkillsPage;