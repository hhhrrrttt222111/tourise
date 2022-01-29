import React from 'react'
import { Landing, Navbar, Shops, Events, Guide, Wiki } from '../../components'

import './HomePage.css'

function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Landing />
            <Shops />
            <Events />
            <Guide />
            <Wiki />
        </div>
    )
}

export default HomePage
