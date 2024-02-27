import { NavBar } from './Nav.js';
import { HomePage } from './Home.js';
import { Profile } from './Profile.js';
import { CreateEventPage } from './Create-Event.js';
import { CreateGroupPage } from './CreateGroupPage';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './Contact.js';

function App(props) {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage data={props.events}/>}/>
                <Route path="/groups" element={<HomePage data={props.events}/>}/>
                <Route path="/create-group" element={<CreateGroupPage />} />
                <Route path="/contact" element={<ContactForm/>}/>
                {/* <Route path="/create-event" element={<HomePage data={props.events}/>}/> */}
                <Route path="/create-event" element={<CreateEventPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;