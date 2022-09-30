import React from 'react';

import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h3 className='logo'>Be-pro Wrestler</h3>
            <div className='menu'>
                <a href='/home'>Blog</a>
            </div>
        </nav>

    );
};

export default Header;