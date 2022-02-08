import React from 'react';
import DiscoverCard from './DiscoverCard';

import './DiscoverPage.css'

function DiscoverPage() {
    return (
        <div className='discoverPage'>
            <div className='discoverPage__header'>
                <h1>FIND <span className='primary'>POPULAR</span> <br /> DESTINATIONS</h1>
            </div>
            <div className='discoverPage__container'>
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </div>
        </div>
    )
}

export default DiscoverPage;
