import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";

import './MainNav.css'
import logo from '../../../assets/png/logo.png'

function MainNav() {

    let navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    return (
        <div className='mainNav'>
            <img src={logo} alt="" onClick={backHome}/>

            <div className='navbar_btn'>
                <Link to="/profile">
                    <VscAccount className='profile_icon' color='#000000' size={25}/>
                </Link>
            </div>
        </div>
    )
}

export default MainNav;
