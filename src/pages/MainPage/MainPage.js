import React from 'react';

import { Sellers, Guides, Event, MainNav } from '../../components'

import './MainPage.css'

function MainPage() {
    return (
        <div className='mainPage'>
            <MainNav />
            <Sellers />
            <Guides />
            <Event />
        </div>
    );
}

export default MainPage;
