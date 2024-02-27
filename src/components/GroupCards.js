import React from 'react';

export function GroupCards({ groups, event }) {
    const groupList = groups.map((group, index) => {
        // Assuming the date is stored in the 'eventDate' field
        if (event === '' || group.eventName === event) {
            return <CreateGroup key={index} groupName={group.groupName} eventName={group.eventName} eventDate={group.eventDate} groupCapacity={group.groupCapacity} creatorEmail={group.creatorEmail} />;
        }
        return null;
    });

    return (
        <div>
            <div className="container">
                <div className="row">
                    {groupList}
                </div>
            </div>
        </div>
    );
}

function CreateGroup({ groupName, eventName, eventDate, groupCapacity, creatorEmail }) {
    return (
        <div className="col-xl-3 col-md-6 d-flex">
            <div className="card mb-5">
                <div className="card-body text-center">
                    <div className="pt-2 text-center">
                        <h2 className="card-title">{groupName}</h2>
                        <p className="card-text">{eventName}</p>
                        <p className="card-text">Event Date: {eventDate}</p>
                        <p className="card-text">Group Capacity: {groupCapacity}</p>
                        <p>If interested, contact group creator: {creatorEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}