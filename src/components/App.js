import { Navigate } from 'react-router-dom';
import { NavBar } from './Nav.js';
import { HomePage } from './Home.js';
import { Profile } from './Profile.js';
import { CreateEventPage } from './Create-Event.js';
import { CreateGroupPage } from './CreateGroupPage';
import { GroupsPage } from './Groups.js';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './Contact.js';

function App(props) {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/groups" element={<GroupsPage data={props.groups}/>}/>
                <Route path="/create-group" element={<CreateGroupPage />} />
                <Route path="/contact" element={<ContactForm/>}/>
                {/* <Route path="/create-event" element={<HomePage data={props.events}/>}/> */}
                <Route path="/create-event" element={<CreateEventPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;