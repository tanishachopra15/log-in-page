import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {

    const navigate=useNavigate()
    function LogOut() {
        sessionStorage.removeItem('token')
        navigate('/')
    }
    
    return (
        <div className='link-container'>
            {/* <Link to='/login'> <div>Login</div></Link> */}
            {/* <Link to='/sign-up'> <div>Signup</div></Link> */}
            <Link to='/todo'><div>Todo List</div></Link>
            <Link to='/expense'> <div>Expense Tracker</div></Link>
            <Link to='/product'> <div>Product Details</div></Link>
            <button onClick={LogOut}>LogOut</button>
        </div>
    )
}

export default HomePage;