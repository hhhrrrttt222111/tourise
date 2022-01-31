import React, { useEffect, useState } from 'react'
import SellerCard from './SellerCard';

import { db } from '../../../firebase/firebase';
import './Sellers.css'

function Sellers() {

    const [sellers, setSellers] = useState([])

    useEffect(() => {
        db.collection('sellers').onSnapshot(snapshot => (
            setSellers(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))

    }, []);

    return (
        <div id='shops' className='sellers'>
            <h1>Nearby shops and sellers</h1>
            <div className='sellers_container'>
                {
                    sellers.map((seller) => (
                        <SellerCard 
                            name={seller.data.name}
                            address={seller.data.address}
                            phone={seller.data.phone}
                            description={seller.data.description}
                            website={seller.data.website}
                            instagram={seller.data.instagram}
                            image={seller.data.image}
                            key={seller.data.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sellers;
