import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

export function Cards({month}) {
    const db = getDatabase();
    const dbEvents = ref(db, 'events');
    const [eventList, setEventList] = useState([]);
    const [deletion, setDeleted] = useState(false);
    useEffect(() => {
        const list = [];
        let count = 0;
        onValue(dbEvents, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const currentEvent = childSnapshot.val();
                const eventMonth = currentEvent.date.substring(5, 7);
                const num = Math.floor(Math.random() * 4) + 1;
                const eventSource = snapshot.val()[`event${num}`].source;
                if(month === "" || eventMonth === month) {
                    list.push(<CreateEvents key={count} eventKey={childSnapshot.key} name={currentEvent.eventName} date={currentEvent.date} location={currentEvent.location} path={currentEvent.path || `img/card${num}.png`} source={currentEvent.source || eventSource} handleDelete={handleDelete}/>);
                }
                count += 1;
            })
            setEventList([...list]);
        })
    },[month, deletion]);

    useEffect(() => {
        if (deletion) {
            setDeleted(false);
            console.log("deletion is back to false");
        }
    }, [deletion]);

    const handleDelete = async (eventKey) => {
        onValue(dbEvents, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const currentEventKey = childSnapshot.key;
                if(currentEventKey=== eventKey) {
                    const db = getDatabase();
                    const childRef = ref(db, `events/${childSnapshot.key}`);
                    remove(childRef)
                        .then(() => {
                            console.log(`Event removed successfully`);
                            return;
                        })
                        .catch((error) => {
                            console.error('Error removing event: ', error);
                        });
                }
            })
        });
        setDeleted(true);
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

function CreateEvents({eventKey,name, date, location, path, source, handleDelete}) {
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
                        <button className="btn btn-danger" onClick={() => handleDelete(eventKey)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}