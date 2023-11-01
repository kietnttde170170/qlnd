import React from 'react';
import './Logout.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlide';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());

    }
    return (
        <div className='logout' onSubmit={handleLogout}>
            <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
