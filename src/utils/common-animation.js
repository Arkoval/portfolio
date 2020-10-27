import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin)
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

export const animationCursor = (cursor) => {
    gsap.to(cursor, {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1
    })
}

export const animationText = (text, words) => {
    let masterTl = gsap.timeline({repeat: -1})

    words.forEach(word => {
        let tl = gsap.timeline({
            repeat: 1,
            yoyo: true,
            repeatDelay: 2
        });
        tl.to(text, {
            duration: 1,
            text: word
        })
        masterTl.add(tl)
    })
}

export const animationScroll = (element) => {
    gsap.to(window, {duration: 2, scrollTo: '#'+element, ease: "power2"});
}