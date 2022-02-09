import React from 'react'
import { Link } from 'react-router-dom';

import './DiscoverPage.css'

function DiscoverCard({ name, id, location, rating, cost, description, image }) {
    return (
        <div className='discoverCard' key={id}>
            <div className='discoverCard__img'>
                <img src={image} alt="" />
            </div>
            <div className='discoverCard__content'>
                <h2>{name}</h2>
                <p>{location}</p>
            </div>
            <div className='discoverCard__actions'>
                    <h3><span className='sec__bold'>₹{cost}</span>/Person</h3>
                    <Link to={`/checkout/${id}`}>
                        <button>Book</button>
                    </Link>
                </div>
        </div>
    )
}

export default DiscoverCard;
