import React from 'react';

import './Event.css'

function EventCard() {
    return (
        <div className='eventCard'>
            <img src="https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80" alt="" />
            <div className="singleEvent__content">
                <h2>Diwali</h2>
                <h6>Nov 4</h6>
            </div>
        </div>
    )
}

export default EventCard;
