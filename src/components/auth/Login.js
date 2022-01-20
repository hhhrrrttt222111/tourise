import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Auth.css'

import airport from '../../assets/svg/airport.svg'

import './Auth.css'

function Login() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='loginSignin'>
            <div className='ls__left'>
                <h3>some random text hihisome random text hihi some random text hihi</h3>
                <img src={airport} alt="" />
            </div>
            <div className='ls__right'>
                <div className='ls__right_container'>
                    <form className='loginSignin__form'>
                        <h1>Login</h1>
                        <div className='ls_input_row'>
                            <div className='ls_input_container'>
                                <label>Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='ls_input'/>
                            </div> 
                            <div className='ls_input_container'>

                            </div>
                        </div>
                        <div className='ls_input_row'>
                            <div className='ls_input_container'>
                                <label>Password</label>
                                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className='ls_input'/>
                            </div>
                            <div className='ls_input_container'>

                            </div>
                        </div>

                        <div className='ls_input_submit'>
                            <button>Login</button>
                            <p>Don't have an account? <Link to='/signin'>Sign Up</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
