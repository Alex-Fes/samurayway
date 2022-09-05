import {combineReducers, createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReduser";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>


let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})



export const store = createStore(rootReducer);

//@ts-ignore
window.store = store