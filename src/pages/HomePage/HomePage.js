import React from 'react'
import { Landing, Navbar } from '../../components'

import './HomePage.css'

function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Landing />
        </div>
    )
}

export default HomePage
