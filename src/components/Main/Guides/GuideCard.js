import React from 'react';

import './Guides.css'

import { RiShieldStarLine } from "react-icons/ri";

function GuideCard() {
    return (
        <div className='guideCard'>
            <RiShieldStarLine color='#00e64d' size={22} className='verifed_icon'/>
            <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" />
            <div className='guideCard__content'>
                <h2>Hemanth R</h2>
            </div>
            <button>Visit Profile</button>
        </div>
    )
}

export default GuideCard;
