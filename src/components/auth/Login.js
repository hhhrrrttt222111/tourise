import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase/firebase';

import './Auth.css'

import airport from '../../assets/svg/airport.svg'

import './Auth.css'

function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const { handleUser } = useContext(AuthContext);

    let navigate = useNavigate();
    function goToHome() {
        navigate("/home");
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if(email && pass) {
            auth.signInWithEmailAndPassword(email, pass)
                .then(res => {
                    console.log(res.user)
                    handleUser(res.user)
                    // if(res) {

                    // }              
                })
                .then(() => {
                    goToHome();
                })
                .catch((er) => {
                    console.log(er)
                    alert(er)
                })
        } else {
            alert('Enter email and password')
        }    
    }

    return (
        <div className='loginSignin'>
            <div className='ls__left'>
                <h3>Inspiring Destinations Within Your Reach</h3>
                <img src={airport} alt="" />
            </div>
            <div className='ls__right'>
                <div className='ls__right_container'>
                    <form className='loginSignin__form' onSubmit={handleOnClick}>
                        <h1>Login</h1>
                        <div className='ls_input_row'>
                            <div className='ls_input_container'>
                                <label>Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='ls_input'/>
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
                            <button type='submit'>Login</button>
                            <p>Don't have an account? <Link to='/signin'>Sign Up</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
