import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

export type AppPropsType = {
    // posts: PostType[]
    // dialogs: DialogType[]
    // message: MessageType[]
    // addPostCallback: (postMessage: string) => void
    // newPostText: string
    // newMessageText: string
    // store: any
}

const App = (props: AppPropsType) => {
    //const state = props.store.getState();

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    // store={props.store}
                    // dispatch={props.store.dispatch.bind(props.store)}
                    // posts={state.ProfilePage.posts}
                    // newPostText={state.ProfilePage.newPostText}
                />}></Route>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           // store={props.store}
                           // dispatch={props.store.dispatch.bind(props.store)}
                           // dialog={state.DialogsPage.dialogs}
                           // message={state.DialogsPage.message}
                           // newMessageText={state.DialogsPage.newMessageText}
                       />}></Route>
                <Route path='/news' render={() => <News/>}></Route>
                <Route path='/music' render={() => <Music/>}></Route>
                <Route path='/users' render={() => <UsersContainer/>}></Route>
                <Route path='/settings' render={() => <Settings/>}></Route>
                <Route path='/sidebar' render={() => <Sidebar/>}></Route>
                <Route render={() => <Footer/>}></Route>
            </div>
        </div>

    );
}


export default App;
