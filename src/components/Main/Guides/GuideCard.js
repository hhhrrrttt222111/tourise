import React from 'react';

import './Guides.css'

import { RiShieldStarLine } from "react-icons/ri";

function GuideCard({ name, username, profilePic, verified }) {
    return (
        <div className='guideCard' key={username}>
            {verified && (
                <RiShieldStarLine color='#00e64d' size={22} className='verifed_icon'/>
            )}
            <img src={profilePic} alt="" />
            <div className='guideCard__content'>
                <h2>{name}</h2>
            </div>
            <button>Visit Profile</button>
        </div>
    )
}

export default GuideCard;
