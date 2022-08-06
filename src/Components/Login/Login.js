import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
    return (
        <div className='login'>
            <div className="login-header">
                <h2>Welcome Back!</h2>
                <h5>Please login to you account</h5>
            </div>
            <LoginForm ></LoginForm>
        </div>
    )
}
