import React from 'react';
import { Link } from 'react-router-dom';

import MainNav from '../MainNav/MainNav'
import './Guests.css'

import tourist2 from '../../../assets/png/tourist2.png'

function Guests() {
    return (            
        <div className='guests'>
            <MainNav />
            <div className='guests__container'>
                <div className='guests__containerLeft'>
                    <h1>LIVE <span className='primary'>YOUR</span> <br /> ADVENTURE</h1>
                    <p>
                        Don't wait until tomorrow, discover your adventure now and feel the sensation of clonseness to nature around you
                    </p>
                    <Link to='/discover'>
                        <button className='guest_discover_btn'>Discover  </button>
                    </Link>
                </div>
                <div className='guests__containerRight'>
                    <img src={tourist2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Guests;
