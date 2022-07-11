import React from 'react';
import {rerenderEntireTree} from "../reRender/rerenderEntireTree";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
            {id: 3, message: 'Common', likeCount: 10}
        ]
    },
    DialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Yana'},
            {id: 4, name: 'Dima'},
            {id: 5, name: 'Vetal'}
        ],
        message: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo Yo'}
        ]
    },
    sidebar: {}
}

export const addPost = (postMessage: string)=>{
    // debugger
    let newPost: PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    };
    state.ProfilePage.posts.push(newPost);
    rerenderEntireTree(state);
};