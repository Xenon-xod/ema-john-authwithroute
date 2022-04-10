import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handelNameBlur = event => {
        setname(event.target.value);
    }

    const handelphoneBlur = event => {
        setphone(event.target.value);
    }

    const handeladdressBlur = event => {
        setaddress(event.target.value);
    }

    const handelCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);

    }

    return (
        <div className='form-container'>
            <div>
                <h2>Shipping Information </h2>
                <form onSubmit={handelCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handelNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">phone</label>
                        <input onBlur={handelphoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handeladdressBlur} type="phone" name="address" id="" required />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <input className='input-submit' type="submit" value="SignUp" />
                </form>
            </div>
        </div >
    );
};

export default Shipment;