import React, { useState } from 'react';
import './SignupPage.css';
import { createClient } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })

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

    async function handleSubmit() {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: loginInfo.email,
                password: loginInfo.password,
            })
            if (error) throw error
            console.log(data);

        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className='signup-page'>
            <input type='email' name='email' placeholder='Email' onChange={onChangeHandler}></input>
            <input type='password' name='password' placeholder='Password' onChange={onChangeHandler}></input>
            <button onClick={handleSubmit}>Submit</button>
            <p>Already have a Account ! <Link to='/login'>
                LOGIN
            </Link></p>
        </div>
    )
}


export default SignupPage;