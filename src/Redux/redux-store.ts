import {combineReducers, createStore as createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";
import {sidebarReduser} from "./sidebarReduser";

type ReducerType = typeof rootReduser
export type StoreType = ReturnType<ReducerType>


let rootReduser = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    sidebar: sidebarReduser
})


let store = createStore(rootReduser);

export default store;