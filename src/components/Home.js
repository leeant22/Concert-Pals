import React from 'react';
import { useState } from 'react';
import { Cards } from './Events.js';
import { Footer } from './Footer.js';

export function HomePage({data}) {
    const [filter, setFilter] = useState('');
    const filterChange = (event) => {
        setFilter(event.target.value);
    };
    return(
        <div>
            <div className="main-page">
                <main className="home">
                    <div className='container'>
                        <div className="row">
                            <div className='text-right'>
                                <select className="filter mb-3 col-3" value={filter} onChange={filterChange}>
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Cards events={data} month={filter}/>
                </main>
            </div>
            <Footer/>
        </div>
    );
}