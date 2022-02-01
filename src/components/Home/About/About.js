import React from 'react';

import './About.css'

import aboutImg from '../../../assets/svg/Home/aboutImg.svg'

function About() {
    return (
        <div className='about' id="about">
            <div className="about-body">
                <div className="about-description">
                    <div className="about-text">
                        <h2>What we do</h2>
                        <p>Tourise is a portal that improves the interaction between the local communities and the tourists.</p>
                    </div>
                    <div className="about-text">
                        <h2>Sign up as Guides</h2>
                        <p>People can sign up as guides and make themselves available for tourists to hire them.</p>
                    </div>
                    <div className="about-text">
                        <h2>Find nearby shops</h2>
                        <p>Tourists can choose between local sellers to buy crafts and other homemade materials</p>
                    </div>                     

                </div>
                <div className="about-img">
                    <img src = {aboutImg} alt="Rzume"/>
                </div>
            </div>
        </div>
    )
}

export default About;
