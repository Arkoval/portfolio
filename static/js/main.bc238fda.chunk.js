(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r);var i=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("h1",null,l.a.createElement("span",null,"<"),"Arkadiusz",l.a.createElement("strong",null,"Kowalski"),l.a.createElement("span",null,"/>")),l.a.createElement("a",{onClick:function(){document.querySelector(".menu").style.height="100%"},href:"#"},"MENU"))};var u=function(){return l.a.createElement("div",{className:"homePage"},l.a.createElement("div",{className:"homePage-content"},l.a.createElement("h1",null,"Hello, my name is Arek and"),l.a.createElement("h2",null,"I'm a Front End Developer")))};var s=function(){return l.a.createElement("a",{href:"#",className:"bottom-menu"},"TOP")};var o=function(){return l.a.createElement("div",{className:"skills-content"},l.a.createElement("div",{className:"skills-left"},"Skills"),l.a.createElement("div",{className:"skills-right"},l.a.createElement("div",null,l.a.createElement("h2",null,"HTML5")),l.a.createElement("div",null,l.a.createElement("h2",null,"CSS3 / SASS")),l.a.createElement("div",null,l.a.createElement("h2",null,"JAVASCRIPT ES6+")),l.a.createElement("div",null,l.a.createElement("h2",null,"REACT & HOOKS")),l.a.createElement("div",null,l.a.createElement("h2",null,"REDUX")),l.a.createElement("div",null,l.a.createElement("h2",null,"REACT ROUTER")),l.a.createElement("div",null,l.a.createElement("h2",null,"GSAP")),l.a.createElement("div",null,l.a.createElement("h2",null,"GIT")),l.a.createElement("div",null,l.a.createElement("h2",null,"ADOBE"))))},m=a(3);var d=function(e){var t=e.data,a=e.active;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"project-slide ".concat(a===t?"active":"inactive"),style:{transform:"translateX(".concat(100*-a,"%)")}},l.a.createElement("div",{className:"project-details"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.description),l.a.createElement("div",{className:"project-links"},l.a.createElement("a",{href:e.live},"LIVE"),l.a.createElement("a",{href:e.code},"CODE"))),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:e.img,alt:e.name+" photo"})))})))},g=[{id:"1",name:"Dummy Project",img:"/images/dummy-photo.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ante ac arcu mattis, eu elementum ligula auctor. In mattis ex sed magna venenatis tristique. Cras ac elit est. Maecenas ultrices, dolor nec dapibus posuere, sem urna tincidunt odio, a hendrerit urna diam aliquet ante. Praesent porttitor interdum purus vitae feugiat. In in pellentesque erat. Quisque dictum ligula nec sodales congue. Suspendisse laoreet libero lectus, in malesuada nibh euismod ut. Cras aliquet vel nisi nec p",live:"https://www.google.pl",code:"https://www.google.com"},{id:"2",name:"Dummy Project2",img:"/images/dummy-photo.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ante ac arcu mattis, eu elementum ligula auctor. In mattis ex sed magna venenatis tristique. Cras ac elit est. Maecenas ultrices, dolor nec dapibus posuere, sem urna tincidunt odio, a hendrerit urna diam aliquet ante. Praesent porttitor interdum purus vitae feugiat. In in pellentesque erat. Quisque dictum ligula nec sodales congue. Suspendisse laoreet libero lectus, in malesuada nibh euismod ut. Cras aliquet vel nisi nec p",live:"https://www.google.pl",code:"https://www.google.com"},{id:"3",name:"Dummy Project3",img:"/images/dummy-photo.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ante ac arcu mattis, eu elementum ligula auctor. In mattis ex sed magna venenatis tristique. Cras ac elit est. Maecenas ultrices, dolor nec dapibus posuere, sem urna tincidunt odio, a hendrerit urna diam aliquet ante. Praesent porttitor interdum purus vitae feugiat. In in pellentesque erat. Quisque dictum ligula nec sodales congue. Suspendisse laoreet libero lectus, in malesuada nibh euismod ut. Cras aliquet vel nisi nec p",live:"https://www.google.pl",code:"https://www.google.com"},{id:"4",name:"Dummy Project4",img:"/images/dummy-photo.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ante ac arcu mattis, eu elementum ligula auctor. In mattis ex sed magna venenatis tristique. Cras ac elit est. Maecenas ultrices, dolor nec dapibus posuere, sem urna tincidunt odio, a hendrerit urna diam aliquet ante. Praesent porttitor interdum purus vitae feugiat. In in pellentesque erat. Quisque dictum ligula nec sodales congue. Suspendisse laoreet libero lectus, in malesuada nibh euismod ut. Cras aliquet vel nisi nec p",live:"https://www.google.pl",code:"https://www.google.com"}];var p=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],c=g;return l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"projects-slider"},l.a.createElement(d,{data:c,active:a}),l.a.createElement("button",{className:"btn-left",onClick:function(){r(a<1?c.length-1:a-1)}},"\u276e"),l.a.createElement("button",{className:"btn-right",onClick:function(){a===c.length-1?r(0):r(a+1)}},"\u276f")))};var E=function(){return l.a.createElement("div",{className:"menu"},l.a.createElement("a",{onClick:function(){document.querySelector(".menu").style.height="0%"},className:"closeMenu"},"\u276e"),l.a.createElement("div",{className:"menu-content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Contact")))))};var f=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),u=i[0],s=i[1],o=Object(n.useState)(""),d=Object(m.a)(o,2),g=d[0],p=d[1];return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"contact-right"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",null,"Portfolio in English"),l.a.createElement("div",null,"Portfolio in Polish")),l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a,u,g)}},l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",value:a,name:"name",onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",name:"email",value:u,onChange:function(e){return s(e.target.value)}}),l.a.createElement("label",{htmlFor:"description"},"Message:"),l.a.createElement("textarea",{name:"description",value:g,onChange:function(e){return p(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"Send"})))},v=a(1),h=a(2);"undefined"!==typeof window&&(v.a.registerPlugin(h.a),v.a.core.globals("ScrollTrigger",h.a));var b=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){console.log(t,a,e),v.a.fromTo(t,{x:-500,autoAlpha:0,transformOrigin:"left center"},{x:-100,autoAlpha:1,scrollTrigger:{trigger:e,scrub:!0,pin:!0,start:"top top",end:"+=100%"}}),v.a.fromTo(a,{x:500,autoAlpha:0,transformOrigin:"left center"},{x:70,autoAlpha:1,scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"+=100%"}})})),l.a.createElement("div",{className:"preskills-content",ref:function(t){e=t}},l.a.createElement("div",{ref:function(e){t=e},className:"preskills-left"},"Ski"),l.a.createElement("div",{ref:function(e){a=e},className:"preskills-right"},l.a.createElement("div",{className:"square"}),"lls"))};"undefined"!==typeof window&&(v.a.registerPlugin(h.a),v.a.core.globals("ScrollTrigger",h.a));var j=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){console.log(t,a,e),v.a.fromTo(t,{x:-1e3,color:"white",transformOrigin:"left center"},{x:30,color:"black",scrollTrigger:{trigger:e,scrub:!0,pin:!0,start:"top top",end:"+=100%"}}),v.a.fromTo(a,{x:1e3,color:"black",transformOrigin:"left center"},{x:-30,color:"white",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"+=100%"}}),v.a.from(e,{background:"#FCFCFC",autoAlpha:0,scrollTrigger:{trigger:e,start:"top top",end:"+=100%"}})})),l.a.createElement("div",{className:"preprojects",ref:function(t){e=t}},l.a.createElement("h1",{ref:function(e){t=e}},"Proj"),l.a.createElement("h1",{ref:function(e){a=e}},"ects"))};var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(E,null),l.a.createElement(u,null),l.a.createElement(b,null),l.a.createElement(o,null),l.a.createElement(j,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(s,null))};a(11);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.bc238fda.chunk.js.map