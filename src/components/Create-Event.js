import React, { useState } from 'react';
import { Footer } from './Footer.js';

export function CreateEventPage() {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDesc, setEventDesc] = useState("");
    const [submitForm, setSubmitForm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Successfully submitted event:", { eventName, eventDate, eventLocation, eventDesc } );
        setSubmitForm(true);
    }

    let submissionMessage = null;
    if(submitForm) {
        submissionMessage = <p>Your event has been submitted!</p>
    }

    return (
        <><div className="event-creation-page">
            <main>
            <h2 style={{ color: 'black' }}>Create Your Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="event-form-group">
                    <label htmlFor="eventName">What is your event called?</label>
                    <input type="text" id="eventName" value={eventName} onChange={event => setEventName(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventDate">When will your event take place?</label>
                    <input type="date" id="eventDate" value={eventDate} onChange={event => setEventDate(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventLocation">Where will your event be located?</label>
                    <input type="text" id="eventLocation" value={eventLocation} onChange={event => setEventLocation(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventDesc">Describe your event:</label>
                    <textarea id="eventDesc" value={eventDesc} onChange={event => setEventDesc(event.target.value)} rows="8" required />
                </div>
                <button type="submit">Submit Your Event</button>
            </form>
            {submissionMessage}
            </main>
        </div>
        <Footer /></>
    )
}

