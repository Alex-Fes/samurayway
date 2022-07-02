import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <App posts={state.ProfilePage.posts} dialogs={state.DialogsPage.dialogs} message={state.DialogsPage.message}/>
    </BrowserRouter>,
    document.getElementById('root')
);