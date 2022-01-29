import React from 'react';
import Typewriter from 'typewriter-effect';

import './Events.css'
import events from '../../../assets/svg/Home/events.svg'
import lights from '../../../assets/svg/Home/lights.svg'

function Events() {
    return (
        <div className='events'>
            <div className='eventsLeft'>
                <img src={events} alt="" className='events_img' />
            </div>
            <div className='eventsRight'>
                <div className='eventsRight__container'>
                    <img src={lights} alt="" className='events_light'/>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['Festivals..', 'Carnivals..', 'Holidays..'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>
                        Stay updated on all festivals, carnivals, holidays etc..
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Events;
