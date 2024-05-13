import axios from 'axios';

const signupService = async (firstname, lastname, email, phone, password) => {
  console.log(firstname, lastname, email, phone, password);
  const apiUrl = "http://localhost:8080"; // Replace with your backend API URL

  try {
    const response = await axios.post(`${apiUrl}/user/signup`, { firstname, lastname, email, phone, password });
    const data = response.data; // Assuming response data contains success message or token
    console.log(response);

    // Handle successful signup
    if (data.msg === 'User added successfully') {
      // Redirect to login page or display a success message
      window.location.href = '/login';
    } else {
      // Handle signup errors (e.g., display error message)
      console.error(data.message || 'Signup failed');
    }
  } catch (err) {
    console.error('Signup error:', err);
    // Handle errors appropriately (e.g., display error message)
  }
};

export default signupService;
