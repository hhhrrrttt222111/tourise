import React, { useState, useEffect, useContext } from 'react';
import { MdLocationOn } from "react-icons/md";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useParams, useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat';

import { db } from '../../firebase/firebase';

import { AuthContext } from '../../context/AuthContext'

import './Checkout.css'

function Checkout() {

    const [dest, setDest] = useState([])
    const [people, setPeople] = useState(1)

    const { id } = useParams();
    let navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        var docRef = db.collection("destination").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setDest(doc.data())
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, [id])

    const addPerson = () => {
        if(people < 10) {
            setPeople(people+1)
        }
    }
    const reducePerson = () => {
        if(people > 1) {
            setPeople(people-1)
        }
    }

    const bookDestination = () => {
        db.collection('users').doc(currentUser.uid).collection('bookings').add({
            destination: dest.name,
            destId: id,
            location: dest.location,
            people: people,
            amount: dest.cost*people,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            alert('Succefully Booked')
        }).then(() => {
            navigate('/home')
        })
    }


    return (
        <div className='checkout'>
            <div className='checkout__container'>
                <div className='checkout__left'>
                    <img src={dest.image} alt="" />
                    <div className='sl__body'>
                        <p>Number of people</p>
                        <div className='sl__options'>
                            <div className="slider_btns">
                                <div className="slider_btns_action">
                                    <IoIosRemove className="slider_subtractBtn" onClick={reducePerson}/>
                                        <input type='text' value={people} disabled />
                                    <IoIosAdd className="slider_addBtn" onClick={addPerson}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='checkout__right'>
                    <div className='checkout_content'>
                        <h1 className='checkout_name'>{dest.name}</h1>
                        <p>{dest.description}</p>
                        <h2><MdLocationOn className='checkout_location_icon'/> {dest.location}</h2>
                        <h2>₹ {(dest.cost * people)}</h2>
                    </div>
                    <div className='checkout_btns'>
                        <button onClick={bookDestination} className='bookNow_btn'>Book Now</button>
                        <button onClick={() => { navigate('/discover') }} className='cancelOrder_btn'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
