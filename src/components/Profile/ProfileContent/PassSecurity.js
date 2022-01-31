import React, { useState, useContext } from 'react';
import firebase from 'firebase/compat';


import { auth, db } from '../../../firebase/firebase';

import './ProfileContent.css'

import { AuthContext } from '../../../context/AuthContext'

function PassSecurity() {
// eslint-disable-next-line
    const [email, setEmail] = useState('')
    const { currentUser } = useContext(AuthContext)
// eslint-disable-next-line
    const deleteAccount = () => {
        const user = firebase.auth().currentUser;
        user.delete().then(() => {
            db.collection("users").doc(currentUser.uid).delete()
                .then(() => {
                    alert('Profile Updated :)')
            });
        }).catch((error) => {
            console.log('Sign in again to delete account')
        });
    }
// eslint-disable-next-line
    const recoverPass = () => {
        auth.sendPasswordResetEmail(email).then(() => {
            alert('Password recovery E-mail sent!');
          }).catch(function(error) {
            // An error happened.
        });
        
    }

    return (
        <div className='profileContent'>
            <h1>Pass Security</h1>
        </div>
      );
}

export default PassSecurity;
