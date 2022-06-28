import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Redux/state";

ReactDOM.render(
    <App posts={state.ProfilePage.posts} dialogs={state.DialogsPage.dialogs} message={state.DialogsPage.message}/>,
    document.getElementById('root')
);