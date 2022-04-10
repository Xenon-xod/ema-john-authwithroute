import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, hookError, user] = useCreateUserWithEmailAndPassword(auth);

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handelConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    const handelCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('password not matched')
            return;
        }
        if (password.length < 6) {
            setError('Password is too short')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            });

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2>SignUp</h2>
                <form onSubmit={handelCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handelConfirmPassword} type="password" name="Confirm password" id="" required />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <p style={{ color: 'red' }} > {hookError}</p>
                    <input className='input-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already have an account ? <Link className='form-link' to="/login">Log in</Link>
                </p>
            </div>
        </div >
    );
};

export default Signup;