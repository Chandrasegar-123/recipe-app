// SignupPage.js

import React, { useState } from 'react';
import '../assets/styles/signup.css'; // Your custom styles
import logo from '../assets/images/cooklogo.png'; // Your logo image
import signupService from '../service/signup';

function SignupPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., send signup request)
    signupService(formData.firstname, formData.lastname, formData.email, formData.phone, formData.password)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
            <div className="d-flex mb-1 align-items-center justify-content-center">
                    <img src={logo} alt="Logo" className="w-50 h-auto"  />
                </div>
              <h2 className="text-center">Sign Up</h2>
              <form className='signup-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" name="firstname" className="form-control" value={formData.firstname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" name="lastname" className="form-control" value={formData.lastname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Confirm password:</label>
                    <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
