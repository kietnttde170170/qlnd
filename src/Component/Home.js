import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{ color: 'wheat' }}>
            <div className='header'>
                <Link style={{ color: '#fff' }} to={'/home'}>Home</Link>
                <Link style={{ color: '#fff' }} to={'/user'}>User</Link>
                <Link style={{ float: 'right', backgroundColor: 'red', borderRadius: '5px' }} to="/">Logout</Link>

            </div>
            <h2>Welcome to my page</h2>
        </div>
    )
}

export default Home
