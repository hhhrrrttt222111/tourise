import React from 'react';

import { Sellers, Guides, Event } from '../../components'

import './MainPage.css'

function MainPage() {
    return (
        <div className='mainPage'>
            <Sellers />
            <Guides />
            <Event />
        </div>
    );
}

export default MainPage;
