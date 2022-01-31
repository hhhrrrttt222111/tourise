import React from 'react';
import SellerCard from './SellerCard';

import './Sellers.css'

function Sellers() {
    return (
        <div id='shops' className='sellers'>
            <h1>Nearby shops and sellers</h1>
            <div className='sellers_container'>
                <SellerCard />
                <SellerCard />
                <SellerCard />
                <SellerCard />
                <SellerCard />
                <SellerCard />
            </div>
        </div>
    )
}

export default Sellers;
