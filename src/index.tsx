import React from 'react';
import './index.css';
import {addPost, state, subscribe} from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App posts={state.ProfilePage.posts}
                 dialogs={state.DialogsPage.dialogs}
                 message={state.DialogsPage.message}
                 addPostCallback={addPost}
                 newPostText={state.ProfilePage.newPostText}
                 newMessageText={state.DialogsPage.newMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree();

subscribe(rerenderEntireTree);

