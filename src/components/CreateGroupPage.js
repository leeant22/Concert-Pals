import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { Footer } from './Footer.js';

export function CreateGroupPage() {
    const [groupName, setGroupName] = useState("");
    const [eventName, setEventName] = useState("");
    const [groupCapacity, setGroupCapacity] = useState("");
    const [ageRange, setAgeRange] = useState("");
    const [creatorEmail, setCreatorEmail] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [submitForm, setSubmitForm] = useState(false);

    const db = getDatabase();
    const dbGroups = ref(db, 'groups');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Successfully submitted group:", { groupName, eventName, groupCapacity, ageRange, creatorEmail, eventDate });
    //     setSubmitForm(true);
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newGroupData = {
            groupName,
            eventName,
            groupCapacity,
            ageRange,
            creatorEmail,
            eventDate,
        };

        // Push new group data to Firebase
        try {
            await push(dbGroups, newGroupData);
            setSubmitForm(true);
        } catch (error) {
            console.error("Error submitting group:", error);
        }
    };

    let submissionMessage = null;
    if (submitForm) {
        submissionMessage = <p>Your group has been submitted!</p>;
    }

    return (
        <>
            <div className="event-creation-page">
                <main>
                <h2>Create Group</h2>
                    <form onSubmit={handleSubmit} className="group-form">
                        <div className="event-form-group">
                            <label htmlFor="groupName">Group Name:</label>
                            <input type="text" id="groupName" value={groupName} onChange={(event) => setGroupName(event.target.value)} required />
                        </div>
                        <div className="event-form-group">
                            <label htmlFor="eventName">Event Name:</label>
                            <input type="text" id="eventName" value={eventName} onChange={(event) => setEventName(event.target.value)} required />
                        </div>
                        <div className="event-form-group">
                            <label htmlFor="groupCapacity">Group Capacity:</label>
                            <input type="number" id="groupCapacity" value={groupCapacity} onChange={(event) => setGroupCapacity(event.target.value)} required />
                        </div>
                        <div className="event-form-group">
                            <label htmlFor="ageRange">Age Range:</label>
                            <input type="text" id="ageRange" value={ageRange} onChange={(event) => setAgeRange(event.target.value)} required />
                        </div>
                        <div className="event-form-group">
                            <label htmlFor="creatorEmail">Your Email:</label>
                            <input type="email" id="creatorEmail" value={creatorEmail} onChange={(event) => setCreatorEmail(event.target.value)} required />
                        </div>
                        <div className="event-form-group">
                            <label htmlFor="eventDate">Event Date:</label>
                            <input type="date" id="eventDate" value={eventDate} onChange={(event) => setEventDate(event.target.value)} required />
                        </div>
                        <button type="submit" className="submit-button">Submit Your Group</button>
                    </form>
                    {submissionMessage}
                </main>
            </div>
            <Footer />
        </>
    )
}