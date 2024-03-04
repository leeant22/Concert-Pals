import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import './index.css';
import App from './components/App';
import buddies from './data/groups.json';


const firebaseConfig = {
  apiKey: "AIzaSyAa0Uq8ggZjAgtebhDHFtwJQxNNDC8ZagA",
  authDomain: "concert-pals.firebaseapp.com",
  databaseURL: "https://concert-pals-default-rtdb.firebaseio.com",
  projectId: "concert-pals",
  storageBucket: "concert-pals.appspot.com",
  messagingSenderId: "90361025746",
  appId: "1:90361025746:web:1fe3d97fb52494b2bbc90b"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App groups={buddies}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
