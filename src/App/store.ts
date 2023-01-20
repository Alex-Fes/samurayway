import { applyMiddleware, combineReducers, compose, createStore as createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { authReducer } from '../features/auth/authReducer'
import { dialogReducer } from '../Redux/dialogsReducer'
import { profileReducer } from '../Redux/profileReducer'
import { AppActionsType } from '../Redux/types'
import { usersReducer } from '../Redux/usersReducer'

import { appReducer } from './appReducer'

type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>

//type for thunk
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreType,
  unknown,
  AppActionsType
>
export type AppThunkDispatchType = ThunkDispatch<StoreType, unknown, AppActionsType>

export const rootReducer = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogReducer,
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
