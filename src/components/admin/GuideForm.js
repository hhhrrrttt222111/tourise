import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebase';

import './Admin.css'

function GuideForm() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [languages, setLanguages] = useState('')
    const [documentURL, setDocumentURL] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [password, setPassword] = useState('')


    const handleAddGuide = (e) => {
        e.preventDefault()
        if(password === 'necro21') {
            if(name && username && phone && address && pincode && profilePic && languages) {
                db.collection('guides').doc(username).set({
                    name: name,
                    username: username,
                    phone: phone,
                    profilePic: profilePic,
                    address: address,
                    pincode: pincode,
                    documentURL: documentURL,
                    languages: languages,
                    verified: true
                })
                .then(() => {
                    setName('')
                    setUsername('')
                    setPhone('')
                    setAddress('')
                    setPincode('')
                    setLanguages('')
                    setDocumentURL('')
                    setProfilePic('')
                    setPassword('')
    
                    alert('Successfully Added')
                })
    
            } else {
                alert('Enter all the fields')
            } 
        } else {
            alert('Invalid ADMIN PASSWORD!!!')
        }
    }

    return (
        <div className='admin'>
            <Link to='/home'>
                <AiOutlineHome className='admin_home'/>
            </Link>
            <form className='loginSignin__form' onSubmit={handleAddGuide}>
                <h1>Add New Guide</h1>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} placeholder='Phone' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Pincode</label>
                        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, ""))} className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Languages</label>
                        <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder='English, Hindi, Malayalam' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Document URL</label>
                        <input type="text" value={documentURL} onChange={(e) => setDocumentURL(e.target.value)} className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Profile Pic URL</label>
                        <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Admin Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='ls_input'/>
                    </div>
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Add Guide</button>
                </div>

            </form>
        </div>
    )
}

export default GuideForm;
