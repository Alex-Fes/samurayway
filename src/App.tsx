import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StoreType} from "./Redux/state";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

type AppPropsType = {
    // posts: PostType[]
    // dialogs: DialogType[]
    // message: MessageType[]
    // addPostCallback: (postMessage: string) => void
    // newPostText: string
    // newMessageText: string
    store: StoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState();

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    posts={state.ProfilePage.posts}
                    newPostText={state.ProfilePage.newPostText}
                    addPostCallback={props.store.addPost.bind(props.store)}
                    changeNewTextCallback={props.store.changeNewText.bind(props.store)}/>}></Route>
                <Route path='/dialogs'
                       render={() => <Dialogs dialog={state.DialogsPage.dialogs}
                                              message={state.DialogsPage.message}
                                              newMessageText={state.DialogsPage.newMessageText}
                                              changeNewMessageTextCallback={props.store.changeNewMessageText.bind(props.store)}
                                              addMessageCallback={props.store.addMessage.bind(props.store)}
                       />}></Route>
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
