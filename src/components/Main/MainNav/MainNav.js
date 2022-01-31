import React from 'react';
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";

import './MainNav.css'

function MainNav() {
    return (
        <div className='mainNav'>
            <h1>Tourise</h1>

            <div className='navbar_btn'>
                <Link to="/profile">
                    <VscAccount className='profile_icon' color='#000000' size={25}/>
                </Link>
            </div>
        </div>
    )
}

export default MainNav;
