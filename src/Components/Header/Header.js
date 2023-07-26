import React from 'react';
import '../assets/css/HeaderNav.css';
import humberger from '../assets/images/humberger.png';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='header-menu'>
                <div className='bx-menu'>
                    <img src={humberger} alt='' />
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