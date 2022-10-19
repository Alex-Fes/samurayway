import React from "react";
import {ActionTypes} from "./state";
import {usersAPI} from "../api/api";

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
// export type followingInProcessType ={
//     id: number
// }
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProcess: Array<number>
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: [1]
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
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-IN-PROCESS":
            return {
                ...state, followingInProcess: action.isFetching ?
                    [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const;
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
}) as const;
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const;
export const toggleIsFollowingInProcess = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-IN-PROCESS',
    isFetching,
    userId
}) as const;


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        });
    }
}

export const onPageChangedThunkCreation = (pageNumber: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingInProcess(true, userId))
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingInProcess(false, userId));
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingInProcess(true, userId))
        usersAPI.unFollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingInProcess(false, userId));
        })
    }
}

























