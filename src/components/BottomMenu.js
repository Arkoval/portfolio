import React from 'react';
import {animationScroll} from '../utils/common-animation'


function BottomMenu() {

    const goToTop= e => {
        animationScroll(e.target.name)
    }
    return (<div className='bottom-menu'>
        <button onClick={goToTop} name='home'  >TOP</button>
    </div>
        
    )
}

export default BottomMenu;