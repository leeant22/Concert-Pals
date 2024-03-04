import React from 'react';
import { useState } from 'react';
import { GroupCards } from './GroupCards.js';
import { Footer } from './Footer.js';

export function GroupsPage({data}) {
    const [filter, setFilter] = useState('');
    const filterChange = (eventName) => {
        setFilter(eventName.target.value);
    };
    return(
        <div>
            <div className="main-page">
                <main className="home">
                    <div className='container'>
                        <label className='filter-label' htmlFor='selectEvent'>Select Event:</label>
                        <div className="row">
                            <div className='text-right'>
                                <select className="filter mb-3 col-3" value={filter} onChange={filterChange} name='selectEvent' id='selectEvent'>
                                    <option value="">Select Event</option>
                                    <option value="Event 1">Event 1</option>
                                    <option value="Event 2">Event 2</option>
                                    <option value="Event 3">Event 3</option>
                                    <option value="Event 4">Event 4</option>
                                    <option value="Event 5">Event 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <GroupCards groups={data} event={filter}/>
                </main>
            </div>
            <Footer/>
        </div>
    );
}