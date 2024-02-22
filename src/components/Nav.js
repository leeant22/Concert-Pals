import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export function NavBar() {
    const[menu, setMenu] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    useEffect(() => {
        const handleResize = () => {
          setIsWideScreen(window.innerWidth > 640);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <div>
            {isWideScreen ? (
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
            ) :
            (
            <div>
                <div><i className="fa-solid fa-bars"></i></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/create-event" aria-label="Add An Event"><i className="fa-solid fa-plus"></i></Link></li>
                    <li><Link to="/profile" aria-label="View Your Profile"><i className="fa-solid fa-circle-user"></i></Link></li>
                </ul>
            </div>
            )}
        </div>
    )
}