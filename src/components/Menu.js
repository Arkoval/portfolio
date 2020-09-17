import React from 'react'

function Menu() {

    const closeMenu = () => {
        document.querySelector('.menu').style.height = "0%";
      }

    return(
        <div className='menu'>
            <a onClick={closeMenu} className='closeMenu'>&#10094;</a>
            <div className="menu-content">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;