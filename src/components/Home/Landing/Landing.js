import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Landing.css'

import ship from '../../../assets/svg/Home/ship.svg'
import leaves from '../../../assets/svg/Home/leaves.svg'

function Landing() {
    return (
        <div className='landing'>
            <div className='landing_left'>
                <img src={leaves} alt="" className='landing_leaf' />
                <div className='landing_left__content'>
                    <h1>We've Seen The Future, and It's Tourise-Shaped</h1>
                    <p>Vacation, the best you can get! <br />
                        Order a vacation today!
                    </p>
                    <hr className='landing__hr'/>
                    <div className='landing_btn_container'>
                        <HashLink to="#about" smooth>
                            <button className='landingBtn landing_d_btn'>Discover More</button>
                        </HashLink>
                        <Link to='/home'>
                            <button className='landingBtn landing_g_btn'>Get Started</button>
                        </Link>
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
