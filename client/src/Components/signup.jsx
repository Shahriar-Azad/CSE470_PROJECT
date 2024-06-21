import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {
            username, email, password,
        }).then(response => {
            if (response.data.status) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="username">Username:</label>
                <br />
                <input type='text' placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />

                <br />

                <label htmlFor="email">Email:</label>
                <br />

                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <br />

                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" placeholder='******'
                    onChange={(e) => setPassword(e.target.value)} />

                <br />
                <br />


                <button type="submit" className='sign-up-button'>Sign Up</button>
                <br/>
                <p>Have an Account? <Link to="/login" className='lg'>Login</Link> </p>


            </form>
        </div>
    )
}

export default Signup;