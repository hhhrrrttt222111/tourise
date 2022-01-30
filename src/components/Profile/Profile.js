import React, { useState, useEffect, useContext } from 'react'
import firebase from 'firebase/compat';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase/firebase';
import './Profile.css'

function Profile() {

    const [info, setInfo] = useState([])
    const { currentUser, handleLogout } = useContext(AuthContext)
    let navigate = useNavigate();
// eslint-disable-next-line
    const deleteAccount = () => {
        const user = firebase.auth().currentUser;
        user.delete().then(() => {
            // User deleted.
        }).catch((error) => {
            console.log('Sign in again to delete account')
        });
    }

    console.log(currentUser.uid)
// eslint-disable-next-line
    const logout = () => {
        handleLogout()
        navigate("/login")
    }

    useEffect(() => {
        // db.collection('users').doc(currentUser.uid).onSnapshot(snapshot => (
        //     setInfo(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data()
        //         }))
        //     )
        // ))
        var docRef = db.collection("users").doc(currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setInfo(doc.data());
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


    }, [currentUser.uid]);

    console.log(info)

    return (
        <div className='profile'>
            
        </div>
    )
}

export default Profile
