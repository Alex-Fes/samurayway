import React from 'react';
import './index.css';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                // posts={store._state.ProfilePage.posts}
                // dialogs={store._state.DialogsPage.dialogs}
                // message={store._state.DialogsPage.message}
                // addPostCallback={store.addPost}
                // newPostText={store._state.ProfilePage.newPostText}
                // newMessageText={store._state.DialogsPage.newMessageText}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

