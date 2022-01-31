import React, { useEffect, useState } from 'react'
import EventCard from './EventCard';

import { db } from '../../../firebase/firebase';
import './Event.css'
import './stars.css'

function Event() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        db.collection('events').onSnapshot(snapshot => (
            setEvents(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))

    }, []);


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
                    {events.map((event) => (
                        <EventCard 
                            name={event.data.name}
                            key={event.data.name}
                            startDate={event.data.startDate}
                            endDate={event.data.endDate}
                            description={event.data.description}
                            image={event.data.image}
                            location={event.data.location}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Event;
