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
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

type AppPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    message: MessageType[]
}

const App = (props: AppPropsType) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}></Route>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialog={props.dialogs} message={props.message}/>}></Route>
                    <Route path='/news' render={() => <News/>}></Route>
                    <Route path='/music' render={() => <Music/>}></Route>
                    <Route path='/settings' render={() => <Settings/>}></Route>
                    <Route path='/sidebar' render={() => <Sidebar/>}></Route>
                    <Route render={() => <Footer/>}></Route>
                </div>
            </div>

    );
}


export default App;
