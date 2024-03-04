import React from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export function Cards({month}) {
    const db = getDatabase();
    const dbEvents = ref(db, 'events');
    const eventList = [];
    let count = 0;
    onValue(dbEvents, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const currentEvent = childSnapshot.val();
            const eventMonth = currentEvent.date.substring(0, currentEvent.date.indexOf(' '));
            if(month === "" || eventMonth === month) {
                eventList.push(<CreateEvents key={count} name={currentEvent.event} date={currentEvent.date} path={currentEvent.path} source={currentEvent.source}/>);
            }
            count += 1;
        })
    })
    console.log(eventList)
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

function CreateEvents({name, date, path, source}) {
    return (
        <div className="col-xl-3 col-md-6 d-flex">
            <div className="card mb-5">
                <div className="card-body text-center">
                    <img src={path} className="card-img-top img-fluid" alt="Concert"/>
                    <cite>Source: {source}</cite>                          
                    <div className="pt-2 text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">Date: {date}</p>
                        <a href="#" className="btn btn-dark">Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}