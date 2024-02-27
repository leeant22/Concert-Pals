import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export function NavBar() {
    const[menu, setMenu] = useState(false);
    const [wideScreen, setWideScreen] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleClick = () => {
        toggleMenu();
    }

    useEffect(() => {
        const handleResize = () => {
          setWideScreen(window.innerWidth > 640);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div>
            {wideScreen ? (
                <nav className="nav-bar">
                    <h1 className="title">Concert Pals</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/groups">Groups</Link></li>
                        <li><Link to="/create-group" aria-label="Create Group">Create Group</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/create-event" aria-label="Add An Event"><i className="fa-solid fa-plus"></i></Link></li>
                        <li><Link to="/profile" aria-label="View Your Profile"><i className="fa-solid fa-circle-user"></i></Link></li>
                    </ul>
                </nav>
            ) :
            (
            <nav className="nav-bar">
                <div onClick={handleClick}>
                    <i className={`hamburger ${menu ? "fas fa-times" : "fa-solid fa-bars"}`} />
                </div>
                <div className={`show-menu ${menu ? "visible" : "hide"}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/groups">Groups</Link></li>
                        <li><Link to="/create-group">Create Group</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='shift'>
                </div>
                <div className={!menu ? "show-icons" : "hide-icons"}>
                    <ul>
                        <li><Link to="/create-event" aria-label="Add An Event"><i className="fa-solid fa-plus"></i></Link></li>
                        <li><Link to="/profile" aria-label="View Your Profile"><i className="fa-solid fa-circle-user"></i></Link></li>
                    </ul>
                </div>
            </nav>
            )}
        </div>
    )
}