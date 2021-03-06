import React from 'react'
import { Landing, Navbar, Shops, Events, Guide, Wiki, About, Maps } from '../../components'

import './HomePage.css'

function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Landing />
            <About />
            <Shops />
            <Events />
            <Guide />
            <Wiki />
            <Maps />
        </div>
    )
}

export default HomePage
