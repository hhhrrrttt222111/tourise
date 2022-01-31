import React, { useState, useEffect, useContext } from 'react'
import { HiPencil } from "react-icons/hi";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { db } from '../../../firebase/firebase';
import './ProfileContent.css'

import { AuthContext } from '../../../context/AuthContext'

function EditAccount() {

    const [info, setInfo] = useState([])
    const { currentUser } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [location, setLocation] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [open, setOpen] = useState(false);

    const handleImageOpen = () => {
      setOpen(true);
    };
  
    const handleImageClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        var docRef = db.collection("users").doc(currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setInfo(doc.data());
                setName(info.name)
                setUsername(info.username)
                setPhone(info.phone)
                setEmail(info.email)
                setDob(info.dob)
                setLocation(info.location)
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, [currentUser.uid, info.name, info.username, info.phone, info.email, info.dob, info.location]);
    

    const updateProfile = () => {
        db.collection("users").doc(currentUser.uid).update({
            name: name,
            username: username,
            phone: phone,
            dob: dob,
            location: location
        }).then(() => {
            alert('Profile Updated :)')
        });
    }

    const updateProfileImage = () => {
        db.collection("users").doc(currentUser.uid).update({
            profilePhoto: imageUrl
        }).then(() => {
            alert('Profile Picture Updated :)')
        });
    }


    return (
        <div className='profileContent'>
            <div className='edit_profilePic'>
                <div className="phi_img">
                    <img src={info.profilePhoto} alt="" />
                    <HiPencil className="edit_image" onClick={handleImageOpen}/>
                </div>
                <Dialog 
                    fullWidth
                    open={open} 
                    onClose={handleImageClose}
                    PaperProps={{
                        style: {
                            backgroundColor: '#f5f0e1',
                        },
                    }}
                >
                    <DialogTitle>Add Image</DialogTitle>
                    <DialogContent>
                        <div className='addLoan__body'>
                            <div className='edit_input_container'>
                                <label>Image URL</label>
                                <input id="image" type="text" placeholder='https://unsplash.com/photos/qwerrty123' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className='edit_input'/>
                            </div>
                            
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={updateProfileImage} className='profile_btns'>Save</button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className='edit_info'>
                <div className='edit_input_container'>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='edit_input'/>
                </div>
                <div className='edit_input_container'>
                    <label>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='edit_input'/>
                </div>
                <div className='edit_input_container'>
                    <label>Email</label>
                    <input value={email} type="text" className='edit_input' disabled/>
                </div>
                <div className='edit_input_container'>
                    <label>Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} type="text" className='edit_input'/>
                </div>
                <div className='edit_input_container'>
                    <label>Date of Birth</label>
                    <input value={dob} onChange={(e) => setDob(e.target.value)} type="text" className='edit_input' placeholder='dd/mm/yyyy'/>
                </div>
                <div className='edit_input_container'>
                    <label>Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className='edit_input' placeholder='Location URL'/>
                </div>
            </div>
            <div className='save_profile'>
                <button onClick={updateProfile} className='profile_btns'>Save</button>
            </div>
        </div>
    );
}

export default EditAccount;
