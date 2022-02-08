import React from 'react';

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
                        Don't wait until tomorrow, disocver your adventure now and feel the sensation of clonseness to nature around you
                    </p>

                    <button>Discover  </button>
                </div>
                <div className='guests__containerRight'>
                    <img src={tourist2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Guests;
