import React from 'react';
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <nav className="nav-bar">
            <h1 className="title">Concert Pals</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/groups">Groups</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/create-event" aria-label="Add An Event"><i className="fa-solid fa-plus"></i></Link></li>
                <li><Link to="/profile" aria-label="View Your Profile"><i className="fa-solid fa-circle-user"></i></Link></li>
            </ul>
        </nav>
    )
}