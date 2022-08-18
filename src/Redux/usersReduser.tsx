import React from "react";
import {ActionTypes} from "./state";



export type InitialStateType = typeof initialState;

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Alex',
            status: 'I will be in IT',
            location: {city: 'SPb', country: 'Russia'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Vova',
            status: 'Looking for a summer',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Yana',
            status: 'Pretty miss',
            location: {city: 'SPb', country: 'Russia'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Kseniya',
            status: 'Happy mom',
            location: {city: 'Feodosia', country: 'Crimea'}
        }
    ]
};
export const usersReduser = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}
export const followAC = (userId: any) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: any) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users}) as const;
