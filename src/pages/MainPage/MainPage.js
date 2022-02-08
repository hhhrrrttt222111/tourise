import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sellers, Guides, Event, Guests } from '../../components'

import './MainPage.css'

function MainPage() {
    return (
        <div className='mainPage'>
            <Guests />
            <Sellers />
            <Guides />
            <Event />

            <Outlet />

        </div>
    );
}

export default MainPage;
