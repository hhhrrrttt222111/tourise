import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebase';

import './Admin.css'

function EventForm() {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')


    const handleAddGuide = (e) => {
        e.preventDefault()
        if(name && location && startDate && endDate && description && image) {
            db.collection('events').doc(name).set({
                name: name,
                location: location,
                startDate: startDate,
                endDate: endDate,
                description: description,
                image: image,
            })
            .then(() => {
                setName('')
                setLocation('')
                setStartDate('')
                setEndDate('')
                setDescription('')
                setImage('')

                alert('Successfully Added')
            })

        } else {
            alert('Enter all the fields')
        } 
    }

    return (
        <div className='admin'>
            <Link to='/home'>
                <AiOutlineHome className='admin_home'/>
            </Link>
            <form className='loginSignin__form' onSubmit={handleAddGuide}>
                <h1>Add New Event</h1>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Diwali' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Kochi' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Start Date</label>
                        <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder='03/06/2022' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>End Date</label>
                        <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder='05/06/2022' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Image URL</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='ls_input'/>
                    </div> 
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Add Event</button>
                </div>

            </form>
        </div>
    )
}

export default EventForm;
