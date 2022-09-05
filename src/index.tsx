import React from 'react';
import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // posts={store._state.ProfilePage.posts}
                    // dialogs={store._state.DialogsPage.dialogs}
                    // message={store._state.DialogsPage.message}
                    // addPostCallback={store.addPost}
                    // newPostText={store._state.ProfilePage.newPostText}
                    // newMessageText={store._state.DialogsPage.newMessageText}
                    // store={store}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
