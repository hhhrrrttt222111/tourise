import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sellers, Guides, Event, MainNav } from '../../components'

import './MainPage.css'

function MainPage() {
    return (
        <div className='mainPage'>
            <MainNav />
            <Sellers />
            <Guides />
            <Event />

            <Outlet />

        </div>
    );
}

export default MainPage;
