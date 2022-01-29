import React from 'react';
import Marquee from "react-fast-marquee";

import './Guide.css'

import one from '../../../assets/svg/Home/guides/1.svg'
import two from '../../../assets/svg/Home/guides/2.svg'
import three from '../../../assets/svg/Home/guides/3.svg'
import four from '../../../assets/svg/Home/guides/4.svg'
import five from '../../../assets/svg/Home/guides/5.svg'
import six from '../../../assets/svg/Home/guides/6.svg'
import seven from '../../../assets/svg/Home/guides/7.svg'
import eight from '../../../assets/svg/Home/guides/8.svg'

function Guide() {
  return (
      <div className='guide'>
          <h1>Choose from your <span className='primary'>favourite</span> Guides</h1>

          <div className='guide__container'>
            <Marquee gradient={false} speed={40} pauseOnHover={true} play={true}>
                <img className='guide_img' src={one} alt="" />
                <img className='guide_img' src={two} alt="" />
                <img className='guide_img' src={three} alt="" />
                <img className='guide_img' src={four} alt="" />
                <img className='guide_img' src={five} alt="" />
                <img className='guide_img' src={six} alt="" />
                <img className='guide_img' src={seven} alt="" />
                <img className='guide_img' src={eight} alt="" />
            </Marquee>
          </div>
      </div>
  )
}

export default Guide;
