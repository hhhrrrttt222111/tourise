import React from 'react';

import { Sellers, Guides } from '../../components'

import './MainPage.css'

function MainPage() {
    return (
        <div className='mainPage'>
            <Sellers />
            <Guides />
        </div>
    );
}

export default MainPage;
