import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

export function Cards({month}) {
    const db = getDatabase();
    const dbEvents = ref(db, 'events');
    const [eventList, setEventList] = useState([]);
    let count = 0;
    useEffect(() => {
        const list = [];
        onValue(dbEvents, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const currentEvent = childSnapshot.val();
                const eventMonth = currentEvent.date.substring(5, 7);
                if(month === "" || eventMonth === month) {
                    list.push(<CreateEvents key={count} name={currentEvent.eventName} date={currentEvent.date} location={currentEvent.location} path={currentEvent.path || "img/card2.png"} source={currentEvent.source || "Nainoa Shizuru"} handleDelete={handleDelete} />);
                }
                count += 1;
            })
            setEventList([...list]);
        })
    },[month]);
    // new
    const handleDelete = async (name) => {
        try {
            console.log('dbEvents:', dbEvents);
            await remove(ref(dbEvents, name));
            console.log(`Event '${name}' was deleted.`);
        } catch (error) {
            console.error('Error submitting event:', error);
        }
    }



    return (
        <div>
            <div className="container">
                <div className="row">
                    {eventList}
                </div>
            </div>
        </div>
    );
}

function CreateEvents({name, date, location, path, source, handleDelete}) {
    return (
        <div className="col-xl-3 col-md-6 d-flex">
            <div className="card mb-5">
                <div className="card-body text-center">
                    <img src={path} className="card-img-top img-fluid" alt="Concert"/>
                    <cite>Source: {source}</cite>                          
                    <div className="pt-2 text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">Date: {date}</p>
                        <p className="card-text">Location: {location}</p>
                        <button className="btn btn-dark">Details</button>
                        {/* new */}
                        <button className="btn btn-danger" onClick={() => handleDelete(name)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}