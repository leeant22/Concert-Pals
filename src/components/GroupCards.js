import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, child } from 'firebase/database';

export function GroupCards({event}) {
    const db = getDatabase();
    const dbGroups = ref(db, 'groups');
    const [groupList, setGroupList] = useState([]);
    let count = 0;
    useEffect(() => {
        const list = [];
        onValue(dbGroups, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const currentGroup = childSnapshot.val();
                const eventName = currentGroup.eventName;
                if(event === "" || eventName === event) {
                    list.push(<CreateGroup key={count} groupName={currentGroup.groupName} eventName={currentGroup.eventName} eventDate={currentGroup.eventDate} groupCapacity={currentGroup.groupCapacity} creatorEmail={currentGroup.creatorEmail} />);
                }
                count += 1;
            })
            setGroupList([...list]);
        })
    },[event]);
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

// export function GroupCards({ groups, event }) {
//     const groupList = groups.map((group, index) => {
//         if (event === '' || group.eventName === event) {
//             return <CreateGroup key={index} groupName={group.groupName} eventName={group.eventName} eventDate={group.eventDate} groupCapacity={group.groupCapacity} creatorEmail={group.creatorEmail} />;
//         }
//         return null;
//     });

//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     {groupList}
//                 </div>
//             </div>
//         </div>
//     );
// }



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