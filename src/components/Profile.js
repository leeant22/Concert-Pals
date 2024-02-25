import React from 'react';
import { Footer } from './Footer.js';

export function Profile() {
    return (
        <div className="profile-page">
        <header>
        </header>
        <main className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 mt-1">
                        <div className="card text-center sidebar">
                            <div className="card-body">
                                <p><strong>Your Profile</strong></p>
                                <img src="img/profile.png" className="rounded-circle" alt="Avatar" width="150"/>
                                <div className="pt-3">
                                    <a href="#">News</a>
                                    <a href="#">Privacy</a>
                                    <a href="#">Setting</a>
                                    <a href="#">Sign Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 mt-1">
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" className="form-control" id="first-name" placeholder="First Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" className="form-control" id="last-name" placeholder="Last Name"/>
                                </div>
                            </div>
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(123)-456-7890"/>
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" id="city"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state">State</label>
                                    <select id="state" className="form-control" defaultValue="Choose...">
                                        <option value="Choose...">Choose...</option>
                                        <option value="WA">WA</option>
                                        <option value="...">...</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip"/>
                                </div>
                            </div>
                            <label htmlFor="music-preference">Music Preference</label>
                            <select id="music-preference" className="form-control" defaultValue="Choose...">
                                <option value="Choose...">Choose...</option>
                                <option value="pop">Pop</option>
                                <option value="rap">Rap</option>
                                <option value="rock">Rock</option>
                                <option value="classical">Classical</option>
                                <option value="hip-hop">Hip-Hop</option>
                                <option value="R&B">R&B</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-success mb-3">Save</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer className="pt-2"/>
        </div>
    );
}