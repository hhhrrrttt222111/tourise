
import React, { useEffect, useState } from 'react'

import GuideCard from './GuideCard';
import { db } from '../../../firebase/firebase';
import './Guides.css'

function Guides() {

    const [guides, setGuides] = useState([])

    useEffect(() => {
        db.collection('guides').onSnapshot(snapshot => (
            setGuides(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))

    }, []);


    return (
        <div className='guides'>
            <h1>Guides</h1>
            <div className='guides_container'>
                {
                    guides.map((guide) => (
                        <GuideCard 
                            name={guide.data.name}
                            username={guide.data.username}
                            key={guide.data.username}
                            profilePic={guide.data.profilePic}
                            verified={guide.data.verified}
                            // phone={guide.data.phone}
                            // address={guide.data.address}
                            // pincode={guide.data.pincode}
                            // 
                            // languages={guide.data.languages}
                            // documentURL={guide.data.documentURL}
                        />
                    ))
                }
            </div>
        </div>
        )
}

export default Guides;
