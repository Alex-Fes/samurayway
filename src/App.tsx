import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}


export default App;
