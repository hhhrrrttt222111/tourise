import React from 'react';
import EventCard from './EventCard';

import './Event.css'
import './stars.css'

function Event() {
    return (
        <div className='event'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='eventLeft'>
                <h1><span className='evt_invert'>Upcoming</span> <br />Events</h1>
            </div>
            <div className='eventRight'>
                <div className='eventContainer'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </div>
    )
}

export default Event;
