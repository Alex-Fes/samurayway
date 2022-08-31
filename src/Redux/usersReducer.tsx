import React from "react";
import {ActionTypes} from "./state";

type UserLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};
export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state;
    }
}
export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const;
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const;
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount}) as const;
