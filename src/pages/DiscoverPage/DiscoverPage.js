import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'

import DiscoverCard from './DiscoverCard';
import { db } from '../../firebase/firebase';
import './DiscoverPage.css'

function DiscoverPage() {

    const [destinations, setDestinations] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        db.collection('destination').onSnapshot(snapshot => (
            setDestinations(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))

    }, []);

    const filteredDestination = destinations.filter((art) => {
        return art.data.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div className='discoverPage'>
            <Link to='/home'>
                <MdArrowBackIosNew className='go_back_discover'/>
            </Link>
            <div className='discoverPage__header'>
                <h1>FIND <span className='primary'>POPULAR</span> <br /> DESTINATIONS</h1>
            </div>
            <div className='discoverPage__search'>
                <input className='discoverPage__input' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a destination..'/>
            </div>
            <div className='discoverPage__container'>
                {filteredDestination.map((dest) => (
                        <DiscoverCard 
                            name={dest.data.name}
                            key={dest.id}
                            id={dest.id}
                            rating={dest.data.rating}
                            cost={dest.data.cost}
                            description={dest.data.description}
                            image={dest.data.image}
                            location={dest.data.location}
                        />
                    ))}
            </div>
        </div>
    )
}

export default DiscoverPage;
