import React from "react";
import {ActionTypes} from "./state";
import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

export type InitialStateType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
};

let initialState = {
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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}
export const setAuthUserDataAC = (userId: number, email: string, login: string) =>
    ({type: SET_USER_DATA, data: {userId, email, login}}) as const;


export const getAuthUserDataTC = () => {
    return (dispatch: any) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
    }
}


