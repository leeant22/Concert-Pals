import React from 'react';
import { useState } from 'react';
import { Cards } from './Events.js';
import { Footer } from './Footer.js';

export function HomePage() {
    const [filter, setFilter] = useState("");
    const filterChange = (event) => {
        setFilter(event.target.value);
    };
    return(
        <div>
            <div className="main-page">
                <main className="home">
                    <div className='container'>
                        <label className='filter-label' htmlFor='selectMonth'>Select Month:</label>
                        <div className="row">
                            <div className='text-right'>
                                <div className="mb-3 col-3">
                                    <select className="filter" value={filter} onChange={filterChange} name='selectMonth' id='selectMonth'>
                                        <option value="">None</option>
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
                    </div>
                    <Cards month={filter}/>
                </main>
            </div>
            <Footer/>
        </div>
    );
}