import React from 'react';

export function Cards({events, month}) {
    const eventList = events.map((item, index) => {
        const eventMonth = item.date.substring(0, item.date.indexOf(' '));
        if(month === '' || eventMonth === month) {
            return <CreateEvents key={index} name={item.event} date={item.date} path={item.path} source={item.source}/>;
        }
        return null;
    });
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