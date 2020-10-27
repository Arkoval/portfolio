import React from 'react';

function Navbar() {

    const openMenu = () => {
        document.querySelector('.menu').style.height = "100%";
      }

    return(
        <nav className='navbar'>
            <h1><span>&lt;</span>Arkadiusz<strong>Kowalski</strong><span>/&gt;</span></h1>
            <button onClick={openMenu}>MENU</button>
        </nav>
    )
}

export default Navbar;