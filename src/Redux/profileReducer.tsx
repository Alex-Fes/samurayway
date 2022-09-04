import React from "react";
import {ActionTypes} from "./state";
import {RootUserProfileType} from "../Components/Profile/RootUserProfileType";



const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type InitialStateType = typeof initialState;
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
        {id: 3, message: 'Common', likeCount: 10}
    ] as Array<PostType>,
    newPostText: '' as string,
    profile: {} as RootUserProfileType
};
export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case CHANGE_NEW_TEXT:
            // state.newPostText = action.newText;
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST}) as const;
export const onChangePostActionCreator = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText}) as const;
export const setUserProfile = (profile: RootUserProfileType) => ({type: SET_USER_PROFILE, profile}) as const;
