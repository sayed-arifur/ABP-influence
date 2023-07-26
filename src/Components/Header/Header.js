import React, { useState } from 'react';
import '../assets/css/HeaderNav.css';
import iconHumberger from '../assets/images/humberger.png';
import iconHumbergerClose from '../assets/images/humberger-close.png';
import iconHumbergerCloseWhite from '../assets/images/humberger-close-white.png';

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
                                null
                            }
                        </div>
                        {
                            humberger ? 
                            null : <div className='bx-open-menu'>
                                <div className='container'>
                                    <div onClick={ShowMenu} className='icon-humberger close-icon-humberger'>
                                        {
                                            humberger ? 
                                            null
                                            : 
                                            <img src={iconHumbergerCloseWhite} alt='' />
                                        }
                                    </div>
                                    <div className='list-open-menu'>
                                        <ul>
                                            <li>Home</li>
                                            <li>Works</li>
                                            <li>Blog</li>
                                            <li>About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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