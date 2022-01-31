import React from 'react';

import './Event.css'

function EventCard({ name, startDate, endDate, description, image, location }) {
    return (
        <div className='eventCard' key={name}>
            <img src={image} alt="" />
            <div className="singleEvent__content">
                <h2>{name}</h2>
                <h6>{startDate} - {endDate}</h6>
            </div>
        </div>
    )
}

export default EventCard;
