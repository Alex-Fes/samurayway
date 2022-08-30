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
    totalUsersCount: 20,
    currentPage: 1
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


// {
//     id: 1,
//         photoURL: 'https://sun9-north.userapi.com/sun9-82/s/v1/ig2/LROrPaiL5M9MDIn3dvuwdP-LpBDBKFycjt-jrUJ2DSAfO3fSNsYtoK9YfL2XCterfx9ws39oOpx4ELSZn1QluH3Q.jpg?size=200x200&quality=95&crop=594,953,1157,1157&ava=1',
//     followed: true,
//     fullName: 'Alex',
//     status: 'I will be in IT',
//     location: {city: 'SPb', country: 'Russia'}
// },
// {
//     id: 2,
//         photoURL: 'https://sun9-west.userapi.com/sun9-9/s/v1/ig1/jMk1rN_OhY1TKz8NRED2eMMg_X6Dd9r9QC2H4pCDN_ODKub7Is-HA4m4oJkz-R10EjjpJINn.jpg?size=200x200&quality=96&crop=1,305,1000,1000&ava=1',
//     followed: false,
//     fullName: 'Vova',
//     status: 'Looking for a summer',
//     location: {city: 'Kiev', country: 'Ukraine'}
// },
// {
//     id: 3,
//         photoURL: 'https://sun9-west.userapi.com/sun9-38/s/v1/ig2/DMX_Z2Vudm0oDXStlp6tim8jE6VBC-xpC4tqXMi-CiX3pirE-qnaolAPjwUmbZyJzslq5-MkmIdg2Gsa4-iQootG.jpg?size=200x200&quality=96&crop=0,0,1358,1358&ava=1',
//     followed: true,
//     fullName: 'Yana',
//     status: 'Pretty miss',
//     location: {city: 'SPb', country: 'Russia'}
// },
// {
//     id: 4,
//         photoURL: 'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/h2cScXNKbiTWinCH-xpfZbPdwbl0vfZo-3I6XdfBIGfy9JA9d8Ka3ErNdj0YyHijmTXcVhSlK2PWEXzd6txFGa12.jpg?size=200x200&quality=95&crop=263,99,546,546&ava=1',
//     followed: true,
//     fullName: 'Kseniya',
//     status: 'Happy mom',
//     location: {city: 'Feodosia', country: 'Crimea'}
// }