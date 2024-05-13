import axios from 'axios';
import { useLocation } from 'react-router-dom';

// dotenv.config();

const loginService = async (email, password) => {
    console.log(email, password);
    const apiUrl = "http://localhost:8080";
  try {
    const response = await axios.post(`${apiUrl}/user/login`, { email, password });
    const token = response.data;
    console.log(response);

    // Set HttpOnly cookie with the Secure flag (assuming backend sends it)
    document.cookie = `jwtToken=${token}`; // Secure flag for HTTPS only
    window.location.href = '/home';
    
    // useLocation().push('/home'); 
  } catch (err) {
    console.log("error");

    console.error('Login error:', err);
    // Handle login error (e.g., display error message)
  }
};

export default loginService;