import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

type DialogsPropsType = {
    id:number
    message: string
    likeCount: number
}


const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile />}></Route>
                    <Route path='/dialogs' render={()=> <Dialogs />}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/music' component={Music}></Route>
                    <Route path='/settings' component={Settings}></Route>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
