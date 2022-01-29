import React from 'react'
import { Landing, Navbar, Shops } from '../../components'

import './HomePage.css'

function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Landing />
            <Shops />
        </div>
    )
}

export default HomePage
