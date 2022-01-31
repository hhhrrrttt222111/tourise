import React, { useState, useContext } from 'react';
import firebase from 'firebase/compat';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { auth, db } from '../../../firebase/firebase';

import './ProfileContent.css'

import { AuthContext } from '../../../context/AuthContext'
import { Button } from '@mui/material';

function PassSecurity() {
 
    const [email, setEmail] = useState('')
    const { currentUser } = useContext(AuthContext)

    const [resetOpen, setResetOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleResetOpen = () => {
        setResetOpen(true);
    };
  
    const handleResetClose = () => {
        setResetOpen(false);
    };


    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    };
  
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };
 
    const deleteAccount = () => {
        const user = firebase.auth().currentUser;
        user.delete().then(() => {
            db.collection("users").doc(currentUser.uid).delete()
                .then(() => {
                    alert('Account Deleted :)')
            });
        }).catch((error) => {
            console.log('Sign in again to delete account')
        });
        handleDeleteClose()
    }
 
    const recoverPass = () => {
        if(email) {
            auth.sendPasswordResetEmail(email).then(() => {
                alert('Password recovery E-mail sent!');
                handleResetClose()
              }).catch(function(error) {
                // An error happened.
            });
        } else {
            alert('Confirm your email')
        }        
    }

    return (
        <div className='profileContent'>
            <div className='passSec'>
                <div className='resetPass'>
                    <Button onClick={handleResetOpen}>Reset Password</Button>
                    <Dialog 
                        fullWidth
                        open={resetOpen} 
                        onClose={handleResetClose}
                        PaperProps={{
                            style: {
                                backgroundColor: '#f5f0e1',
                            },
                        }}
                    >
                        <DialogTitle>Reset Password</DialogTitle>
                        <DialogContent>
                            <div className='addLoan__body'>
                                <div className='edit_input_container'>
                                    <label>Confirm your Email</label>
                                    <input id="email" type="text" placeholder={currentUser.email} value={email} onChange={(e) => setEmail(e.target.value)} className='edit_input'/>
                                </div>
                                
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <button onClick={recoverPass} className='profile_btns'>Send</button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='resetPass'>
                    <Button onClick={handleDeleteOpen}>Delete my Account</Button>
                    <Dialog 
                        fullWidth
                        open={deleteOpen} 
                        onClose={handleDeleteClose}
                        PaperProps={{
                            style: {
                                backgroundColor: '#f5f0e1',
                            },
                        }}
                    >
                        <DialogTitle>Reset Password</DialogTitle>
                        <DialogContent>
                            <div className='addLoan__body'>
                                <div className='edit_input_container'>
                                    <label>Are you sure you want to delete your account? 
                                        <br /> This action cannot be undone</label>
                                </div>
                                
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <button onClick={deleteAccount} className='profile_btns'>Delete</button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
      );
}

export default PassSecurity;
