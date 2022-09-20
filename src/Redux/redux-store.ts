import {combineReducers, createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>


let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})



export const store = createStore(rootReducer);

//@ts-ignore
window.store = store