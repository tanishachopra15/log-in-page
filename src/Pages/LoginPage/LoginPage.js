import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Link,useNavigate } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
    let navigate = useNavigate();

    const supabaseUrl = 'https://rirjfepqqrafebdehefw.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcmpmZXBxcXJhZmViZGVoZWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDAxMTgsImV4cCI6MjAyOTg3NjExOH0.exJTQEsTAjPzsBKHKtu-9P3MzMV-j-onbPHMPPBM7KM'
    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log(loginInfo);

    function onChangeHandler(e) {
        setLoginInfo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    async function loginDetails() {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginInfo.email,
                password: loginInfo.password,
            })
            if (error) throw error
            console.log(data)
            navigate('/home')

        } catch (error) {
            alert(error)
            // navigate('/home')
        }
    }
    
    return (
        <div className='login-page'>
            <div className='login-page-details'>
                <div>
                    <input type='email' name='email' placeholder='Email' onChange={onChangeHandler}></input>
                </div>
                <div>
                    <input type='password' name='password' placeholder='Password' onChange={onChangeHandler}></input>
                </div>
                <div>
                    <button onClick={loginDetails}>LOGIN</button>
                </div>
                <p>Don't have a Account ! 
                <br></br><Link to='/sign-up'>
                    Create an Account
                </Link></p>
            </div>
        </div>
    )
}

export default LoginPage;