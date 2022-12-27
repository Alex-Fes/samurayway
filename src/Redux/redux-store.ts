import {applyMiddleware, combineReducers, createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ActionTypes} from "./state";
import {appReducer} from "./appReducer";

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>

//type for thunk
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, ActionTypes>
export type AppThunkDispatchType = ThunkDispatch<StoreType, unknown, ActionTypes>



let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store