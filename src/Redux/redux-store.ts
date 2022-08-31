import {combineReducers, createStore as createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";
import {sidebarReduser} from "./sidebarReduser";
import {usersReducer} from "./usersReducer";

type ReducerType = typeof rootReduser
export type StoreType = ReturnType<ReducerType>


let rootReduser = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer
})


let store = createStore(rootReduser);

export default store;