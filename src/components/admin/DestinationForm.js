import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebase';

import './Admin.css'

function DestinationForm() {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [cost, setCost] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [password, setPassword] = useState('')


    const handleAddGuide = (e) => {
        e.preventDefault()
        if(password === 'necro21') {
            if(name && location && cost && description && image) {
                db.collection('destination').doc().set({
                    name: name,
                    location: location,
                    cost: cost,
                    rating: 0,
                    description: description,
                    image: image,
                })
                .then(() => {
                    setName('')
                    setLocation('')
                    setCost('')
                    setDescription('')
                    setImage('')
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
                <h1>Add New Destination</h1>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Serayu Rafting' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Central Java, Indonesia' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Cost/person (₹)</label>
                        <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} placeholder='500' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='ls_input'/>
                    </div>
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Image URL</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='ls_input'/>
                    </div> 
                    <div className='ls_input_container'>
                        <label>Admin Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='ls_input'/>
                    </div>
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Add Destination</button>
                </div>

            </form>
        </div>
    )
}

export default DestinationForm;
