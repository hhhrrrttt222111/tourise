import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Auth.css'

import airport from '../../assets/svg/airport.svg'

function SignIn() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <div className='loginSignin'>
            <div className='ls__left'>
                <h3>some random text hihisome random text hihi some random text hihi</h3>
                <img src={airport} alt="" />
            </div>
            <div className='ls__right'>
                <div className='ls__right_container'>
                    <form className='loginSignin__form'>
                        <h1>Register</h1>
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
                                <label>Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='ls_input'/>
                            </div>
                            <div className='ls_input_container'>
                                <label>Phone</label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' className='ls_input'/>
                            </div> 
                        </div>
                        <div className='ls_input_row'>
                            <div className='ls_input_container'>
                                <label>Password</label>
                                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className='ls_input'/>
                            </div>
                            <div className='ls_input_container'>
                                <label>Confirm Password</label>
                                <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className='ls_input'/>
                            </div> 
                        </div>

                        <div className='ls_input_submit'>
                            <button>Create Account</button>
                            <p>Already have an account? <Link to='/login'>Log in</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
