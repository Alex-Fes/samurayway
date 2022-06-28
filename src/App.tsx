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
import {DialogType, MessageType, PostType} from "./Redux/state";

type AppPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    message: MessageType[]
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}></Route>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialog={props.dialogs} message={props.message}/>}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/music' component={Music}></Route>
                    <Route path='/settings' component={Settings}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
