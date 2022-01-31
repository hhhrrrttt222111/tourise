import React from 'react';
import GuideCard from './GuideCard';

import './Guides.css'

function Guides() {
    return (
        <div className='guides'>
            <h1>Guides</h1>
            <div className='guides_container'>
                <GuideCard />
                <GuideCard />
                <GuideCard />
                <GuideCard />
                <GuideCard />
            </div>
        </div>
        )
}

export default Guides;
