import React, { useState } from 'react';
import '../assets/css/HeaderNav.css';
import iconHumberger from '../assets/images/humberger.png';
import iconHumbergerClose from '../assets/images/humberger-close.png';
import logo from '../assets/images/logo.png';

const Header = () => {

    const [humberger, setHumberger] = useState(true);

    const ShowMenu = ()=>{
        setHumberger(!humberger);
    }

    return (
        <header>
            <div className='container'>
                <div className='header-menu'>
                    <div className='bx-menu'>
                        <div onClick={ShowMenu} className='icon-humberger'>
                            {
                                humberger ? 
                                <img src={iconHumberger} alt='' />
                                : 
                                <img src={iconHumbergerClose} alt='' />
                            }
                        </div>
                        {
                            humberger ? 
                            null : <div className='bx-open-menu'>lorem ipsum </div>
                        }  
                    </div>
                </div>
                <div className='header-logo'>
                    <img src={logo} alt='' />
                </div>
            </div>
        </header>
    )
}

export default Header