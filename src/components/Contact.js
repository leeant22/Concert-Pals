import React, { useState } from 'react';
import { Footer } from './Footer.js';

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Feedback form is submitted!");
        setSubmitted(true);
    };

    let submitMessage = null;
    if (submitted) {
        submitMessage = <p>Thank you for your feedback! We have received your submission.</p>
    }

    return (
        <><div className="contact-page">

            <h2 style={{ color: 'black', fontSize: '2rem', marginBottom: '20px', fontStyle: 'italic' }}>Contact Us</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" placeholder="First Name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" placeholder="Last Name"required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="tel" id="phone-number" placeholder="(123)-456-7890" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="example@email.com" required />
                </div>

                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea id="feedback" name="feedback" rows="4" placeholder="Lorem ipsum dolor sit amet..." required></textarea>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
            {submitMessage}
        </div>
        <Footer /></>
    );
}
