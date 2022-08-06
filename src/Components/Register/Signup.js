import React from 'react'
import SignUpForm from '../../Components/Register/SignUpForm'
export default function Signup() {
    return (
        <div className='login'>
            <div className="login-header">
                <h2>Create Account</h2>
                <h5>Fill in the details below to create an account</h5>
            </div>
            <SignUpForm></SignUpForm>
        </div>
    )
}
