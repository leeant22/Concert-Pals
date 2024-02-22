import React from 'react';
import { Cards } from './Events.js';
import { Footer } from './Footer.js';

export function HomePage({data, images}) {
    return(
        <div>
            <div className="main-page">
                <main className="home">
                    <Cards events={data} images={images}/>
                </main>
            </div>
            <Footer/>
        </div>
    );
}