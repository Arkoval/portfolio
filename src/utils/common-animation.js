import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export const animationLeft = (left, container) =>{
    gsap.from(left, 0.5, {
        x: -50,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=100%"
    }
        });
}

export const animationRight = (right, container) => {
    gsap.from(right, 0.5, {
        x: 50,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=100%"
    }
        });
}

export const animationBot = (container) => {
    gsap.from(container, 0.5, {
        y: 50,
        autoAlpha: 0,
        scrollTrigger: {
           trigger: container,
           markers: true,
           start: 'top top',
           end: '+=100%' 
        }
    })
}