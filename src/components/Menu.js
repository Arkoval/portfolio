import React from 'react'

function Menu() {

    const closeMenu = () => {
        document.querySelector('.menu').style.height = "0%";
      }
    const goToHandler = e => {
        closeMenu()
        console.log(e.target.href)
    }

    return(
        <div className='menu'>
            <a onClick={closeMenu} className='closeMenu'>&#10094;</a>
            <div className="menu-content">
                <ul onClick={goToHandler}>
                    <li ><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;