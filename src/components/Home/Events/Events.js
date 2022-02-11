import React from 'react';
import Typewriter from 'typewriter-effect';

import './Events.css'
import events from '../../../assets/svg/Home/events.svg'
import lights from '../../../assets/svg/Home/lights.svg'

function Events() {
    return (
        <div className='events' id='events'>
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
                    Getting people together is at the heart of what we love about planning parties and events around the country. So, why not take a tour of some of the world’s biggest gatherings?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Events;
