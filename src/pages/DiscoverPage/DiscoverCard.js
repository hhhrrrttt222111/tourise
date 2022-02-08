import React from 'react';

import './DiscoverPage.css'

function DiscoverCard() {
    return (
        <div className='discoverCard'>
            <div className='discoverCard__img'>
                <img src="https://indiathrills.com/wp-content/uploads/2020/01/Kullu-river-rafting.jpg" alt="" />
            </div>
            <div className='discoverCard__content'>
                <h2>Serayu Rafting</h2>
                <p>Central Java, Indonesia</p>
            </div>
            <div className='discoverCard__actions'>
                    <h3><span className='sec__bold'>₹500</span>/Person</h3>
                    <button>Book</button>
                </div>
        </div>
    )
}

export default DiscoverCard;
