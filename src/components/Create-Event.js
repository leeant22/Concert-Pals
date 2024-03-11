import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { Footer } from './Footer.js';

export function CreateEventPage() {
    const [eventName, setEventName] = useState("");
    const [date, setEventDate] = useState("");
    const [location, setEventLocation] = useState("");
    const [description, setEventDesc] = useState("");
    const [submitForm, setSubmitForm] = useState(false);
    const db = getDatabase();
    const dbEvents = ref(db, 'events');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let num = Math.floor(Math.random() * 4) + 1;
        let eventSource = "";
        if (num === 1){
            eventSource = "Yvette de Wit";
        } else if (num === 2){
            eventSource = "Nainoa Shizuru";
        } else if (num === 3){
            eventSource = "Danny Howe";
        } else{
            eventSource = "Yannis Papanastasopoulos";
        }

        let source = eventSource;
        let path = `img/card${num}.png`;

        const newEventData = {
            eventName,
            date,
            location,
            description,
            source,
            path
        };
        try {
            await push(dbEvents, newEventData);
            setSubmitForm(true);
        } catch (error) {
            console.error('Error submitting event:', error);
        }
    };

    let submissionMessage = null;
    if(submitForm) {
        submissionMessage = <p>Your event has been submitted! Check the Home page!</p>
    }

    return (
        <><div className="event-creation-page">
            <main>
            <h2>Create Your Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="event-form-group">
                    <label htmlFor="eventName">What is your event called?</label>
                    <input type="text" id="eventName" value={eventName} onChange={event => setEventName(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventDate">When will your event take place?</label>
                    <input type="date" id="eventDate" value={date} onChange={event => setEventDate(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventLocation">Where will your event be located?</label>
                    <input type="text" id="eventLocation" value={location} onChange={event => setEventLocation(event.target.value)} required />
                </div>
                <div className="event-form-group">
                    <label htmlFor="eventDesc">Describe your event:</label>
                    <textarea id="eventDesc" value={description} onChange={event => setEventDesc(event.target.value)} rows="8" required />
                </div>
                <button type="submit">Submit Your Event</button>
            </form>
            {submissionMessage}
            </main>
        </div>
        <Footer /></>
    )
}

