import React, { useState } from 'react';
import { NavBar } from './Nav.js';
import { HomePage } from './Home.js';
import { Profile } from './Profile.js';
import { CreateEventPage } from './Create-Event.js';
import { Route, Routes } from 'react-router-dom';

function App(props) {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage data={props.events}/>}/>
                <Route path="/groups" element={<HomePage data={props.events}/>}/>
                <Route path="/contact" element={<HomePage data={props.events}/>}/>
                {/* <Route path="/create-event" element={<HomePage data={props.events}/>}/> */}
                <Route path="/create-event" element={<CreateEventPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;