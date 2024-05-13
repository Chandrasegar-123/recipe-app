// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import SignupPage from './pages/signup.jsx';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import Favourites from './pages/favourites.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  )

}

export default App;
