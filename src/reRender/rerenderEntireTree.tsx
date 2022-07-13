import {addPost, RootStateType} from "../Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) => {
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