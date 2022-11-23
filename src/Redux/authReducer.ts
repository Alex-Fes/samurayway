import {ActionTypes} from "./state";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_LOGIN_DATA = 'SET-LOGIN-DATA';

export type InitialStateType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
};

let initialState: InitialStateType = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
};

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}
export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}}) as const;

export const getAuthUserDataTC: any = () => {
    return (dispatch: Dispatch) => {
       return  authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const logoutUserTC = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(0, '', '', false))
                }
            })
    }
}



















