import React, { useState, useEffect, useContext } from 'react'

import { db } from '../../../firebase/firebase';
import './ProfileContent.css'

import { AuthContext } from '../../../context/AuthContext'

function Bookings() {

    const [bookings, setBookings] = useState([])

    const { currentUser } = useContext(AuthContext);


    useEffect(() => {
        db.collection('users').doc(currentUser.uid).collection('bookings').orderBy('createdAt', 'desc').onSnapshot(snapshot => (
            setBookings(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))
    }, [currentUser.uid]);
    

    return (
        <div className='profileContent'>
            <div className='bookings__header'>
                <h1>Booking History</h1>
            </div>
            <div className='bookings__container'>
                {bookings.map((book) => (
                    <div className='booked_card' key={book.id}>
                        <div className='booked__left'>
                            <h1>{book.data.destination}</h1>
                            <h3>{book.data.location}</h3>
                        </div>
                        <div className='booked__left'>
                            <h1>x{book.data.people}</h1>
                            <h3>₹{book.data.amount}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookings;
