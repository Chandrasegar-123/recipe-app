// LoginPage.js

import React, { useState } from 'react';
import '../assets/styles/login.css'; // Import CSS file for styling
import logo from '../assets/images/cooklogo.png'; // Import image file
import loginService from '../service/login';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        loginService(formData.email, formData.password);
        console.log('Form submitted:', formData);
    };

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="login-container p-4">
                <div className="mb-1">
                    <img src={logo} alt="Logo" className="width:50% height:auto" style={{ width: "50%" }} />
                </div>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label className='w-25 text-start'>Email:</label>
                        <input className='w-75' type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='w-25 text-start'>Password:</label>
                        <input className='w-75' type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className='mt-3'>
                    <p styles="font-size: 5px;">Forgot your password? <a href="/reset-password">Reset password</a></p>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
