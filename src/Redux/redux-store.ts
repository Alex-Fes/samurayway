import {combineReducers, createStore as createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";
import {sidebarReduser} from "./sidebarReduser";

type ReducerType = typeof redusers
type StoreType = ReturnType<ReducerType>


let redusers = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    sidebar: sidebarReduser
})


let store = createStore(redusers);

export default store;