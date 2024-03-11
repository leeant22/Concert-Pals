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
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
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