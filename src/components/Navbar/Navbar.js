import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './Navbar.css'

import logo from '../../assets/png/logo.png'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />

            <div className='navbar_items'>
                <HashLink to="#about" className='nav_item' smooth>
                    About
                </HashLink>
                <HashLink to="#shops" className='nav_item' smooth>
                    Shops
                </HashLink>
                <HashLink to="#events" className='nav_item' smooth>
                    Events
                </HashLink>
                <HashLink to="#guide" className='nav_item' smooth>
                    Guide
                </HashLink>
                <HashLink to="#wiki" className='nav_item' smooth>
                    Wiki
                </HashLink>
            </div>

            <div className='navbar_btn'>
                <Link to="/login">
                    <button className="navBtn nav_login">Login</button>
                </Link>
                <Link to="/signin">
                    <button className="navBtn nav_signup">Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
