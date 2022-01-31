import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebase';

import './Admin.css'

function SellerForm() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [website, setWebsite] = useState('')
    const [instagram, setInstagram] = useState('')


    const handleAddGuide = (e) => {
        e.preventDefault()
        if(name && address && phone && description && image) {
            db.collection('sellers').doc(name).set({
                name: name,
                address: address,
                phone: phone,
                website: website,
                instagram: instagram,
                description: description,
                image: image,
            })
            .then(() => {
                setName('')
                setAddress('')
                setPhone('')
                setWebsite('')
                setDescription('')
                setImage('')
                setInstagram('')

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
                <h1>Add New Seler</h1>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Beach Store' className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Kochi' className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}  className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Website</label>
                        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className='ls_input'/>
                    </div>
                    <div className='ls_input_container'>
                        <label>Instagram</label>
                        <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className='ls_input'/>
                    </div> 
                </div>
                <div className='ls_input_row'>
                    <div className='ls_input_container'>
                        <label>Image</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='ls_input'/>
                    </div>
                </div>

                <div className='ls_input_submit'>
                    <button type='submit'>Add Seller</button>
                </div>

            </form>
        </div>
    )
}

export default SellerForm;
