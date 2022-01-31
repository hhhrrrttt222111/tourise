import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BiChevronDown, BiPencil } from "react-icons/bi";
import { MdArrowBackIosNew, MdArrowForwardIos, MdSecurity } from "react-icons/md";
import { MenuItem, Menu } from '@mui/material'; 

import { AuthContext } from '../../context/AuthContext'

import './Profile.css'
import EditAccount from './ProfileContent/EditAccount';
import PassSecurity from './ProfileContent/PassSecurity';

function Profile() {

    const [tab, setTab] = useState(1)

    const { handleLogout } = useContext(AuthContext)
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const logout = () => {
        handleLogout()
        navigate("/login")
    }


    return (
        <div className='profile'>
            <div className='profile_nav'>

                <Link to='/home'>
                    <MdArrowBackIosNew className='go_back'/>
                </Link>
                
                <h3>My Profile</h3>

                <div className='logout' onClick={handleClick}>
                    <img src="https://png.pngitem.com/pimgs/s/105-1050694_user-placeholder-image-png-transparent-png.png" alt="" className='profile_navImg'/>
                    <BiChevronDown className='logout_dropdown' />
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
                >
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </div>
            <div className='profile_container'>
                <div className='profile_sidebar'>
                    <div className={`sidebar_item ${tab === 1 ? 'sidebar_item_active' : ''}`} onClick={() => setTab(1)}>
                        <BiPencil />
                        <p>Edit Profile</p>
                        <MdArrowForwardIos style={{display: tab === 1 ? 'block': 'none'}}/>
                    </div>
                    <div className={`sidebar_item ${tab === 2 ? 'sidebar_item_active' : ''}`} onClick={() => setTab(2)}>
                        <MdSecurity />
                        <p>Password & Security</p>
                        <MdArrowForwardIos style={{display: tab === 2 ? 'block': 'none'}}/>
                    </div>
                </div>
                <div className='profile_content'>
                    {
                        tab === 1 ? (
                            <EditAccount />
                        ) : (
                            <PassSecurity />
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
