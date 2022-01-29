import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <h1>Tourise</h1>

            <div className='navbar_items'>
                <p>Shops</p>
                <p>Events</p>
                <p>Guide</p>
                <p>Wiki</p>
            </div>

            <div className='navbar_btn'>
                <Link to="/login">
                    <button className="navBtn nav_login">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="navBtn nav_signup">Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
