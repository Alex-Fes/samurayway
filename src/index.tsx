import React from 'react';
import './index.css';
import {state} from "./Redux/state";
import {rerenderEntireTree} from "./reRender/rerenderEntireTree";

rerenderEntireTree(state);