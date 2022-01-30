import React from 'react';
import { AiOutlineShop } from "react-icons/ai";

import './Shops.css'
import shop from '../../../assets/svg/Home/shop.svg'

function Shops() {
    return (
        <div className='shops' id='shops'>
            <div className='shops__cards'>
                <div className='shopCard big__card'>
                    <AiOutlineShop className='shopCard__icon'/>
                    <h2>Choose between local sellers </h2>
                </div>
                <div className='double__card'>
                    <div className='shopCard mt__neg'>
                        <AiOutlineShop className='shopCard__icon'/>
                        <h2>Tourists can choose between local sellers</h2>
                    </div>
                    <div className='shopCard mt__neg'>
                        <AiOutlineShop className='shopCard__icon'/>
                        <h2>Tourists can choose between local sellers</h2>
                    </div> 
                </div>
            </div>
            <div className='shops__img'>
                <img src={shop} alt="shop" />
            </div>
        </div>
    )
}

export default Shops;
