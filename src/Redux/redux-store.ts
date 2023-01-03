import { applyMiddleware, combineReducers, compose, createStore as createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { appReducer } from './appReducer'
import { authReducer } from './authReducer'
import { dialogReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { sidebarReducer } from './sidebarReducer'
import { ActionTypes } from './state'
import { usersReducer } from './usersReducer'

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>

//type for thunk
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreType,
  unknown,
  ActionTypes
>
export type AppThunkDispatchType = ThunkDispatch<StoreType, unknown, ActionTypes>

let rootReducer = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.__store__ = store
