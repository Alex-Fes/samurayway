import {applyMiddleware, combineReducers, createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>


let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store