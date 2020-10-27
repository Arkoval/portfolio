import React from 'react'
import { animationScroll } from '../utils/common-animation';

function Menu() {

    const closeMenu = () => {
        document.querySelector('.menu').style.height = "0%";
      }
    const goToHandler = e => {
        closeMenu()
        animationScroll(e.target.name)
    }

    return(
        <div className='menu'>
            <button onClick={closeMenu} className='closeMenu'>&#10094;</button>
            <div className="menu-content">
                <ul onClick={goToHandler}>
                    <li ><button name="home" >Home</button></li>
                    <li><button name="skills" >Skills</button></li>
                    <li><button name="projects" >Projects</button></li>
                    <li><button name="contact">Contact</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;