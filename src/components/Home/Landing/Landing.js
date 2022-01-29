import React from 'react';

import './Landing.css'

import ship from '../../../assets/svg/Home/ship.svg'

function Landing() {
    return (
        <div className='landing'>
            <div className='landing_left'>
                <div className='landing_left__content'>
                    <h1>I've Seen The Future, and It's Tourisio-Shaped</h1>
                    <p>Vacation, the best you can get! <br />
                        Order a vaction today!
                    </p>
                    <hr className='landing__hr'/>
                    <div className='landing_btn_container'>
                        <button className='landingBtn landing_d_btn'>Discover More</button>
                        <button className='landingBtn landing_g_btn'>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='landing_right'>
                <img src={ship} alt="" />
            </div>
        </div>
    )
}

export default Landing;
