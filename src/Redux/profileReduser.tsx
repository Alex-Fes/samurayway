import React from "react";
import {ActionTypes, PostType, ProfilePageType} from "./state";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
        {id: 3, message: 'Common', likeCount: 10}
    ],
    newPostText: ''
};
export const profileReduser = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    // if (action.type === 'ADD-POST') {
    //     let newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: state.newPostText,
    //         likeCount: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === 'CHANGE-NEW-TEXT') {
    //     state.newPostText = action.newText;
    // }
    // return state;
}
export const addPostActionCreator = (newPost: string) =>
    ({type: 'ADD-POST', newPost: newPost}) as const;
export const onChangePostActionCreator = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText: newText}) as const;
