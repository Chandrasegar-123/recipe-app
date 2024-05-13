// Header.js

import React from 'react';
import '../assets/styles/header.css';
import logo from '../assets/images/cooklogo.png'; // Import the logo image
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 mt-0">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourites">Favourite</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-outline-primary" onClick={handleSignOut}>Sign Out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function handleSignOut() {
    // Implement logic for signing out
}

export default Header;
