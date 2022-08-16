import React from "react";
import {ActionTypes} from "./state";

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
    newPostText: '' as string
};
export const profileReduser = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            return {...state,posts: [...state.posts,newPost],newPostText: ''};
        case "CHANGE-NEW-TEXT":
            // state.newPostText = action.newText;
            return {...state,newPostText: action.newText};
        default:
            return state;
    }
}
export const addPostActionCreator = () =>
    ({type: 'ADD-POST' }) as const;
export const onChangePostActionCreator = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText: newText}) as const;
