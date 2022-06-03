import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    );
}


export default App;
