import {combineReducers, createStore as createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";
import {sidebarReduser} from "./sidebarReduser";
import {usersReduser} from "./usersReduser";

type ReducerType = typeof rootReduser
export type StoreType = ReturnType<ReducerType>


let rootReduser = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser
})


let store = createStore(rootReduser);

export default store;