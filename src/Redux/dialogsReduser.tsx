import React from "react";
import {ActionTypes, DialogsPageType, MessageType} from "./state";

let initialState = {
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
    ],
    newMessageText: ''
};
export const dialogReduser = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            };
            state.message.push(newMessage)
            state.newMessageText = '';
            return state;
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }
    // if (action.type === 'ADD-MESSAGE') {
    //     let newMessage: MessageType = {
    //         id: new Date().getTime(),
    //         message: state.newMessageText
    //     };
    //     state.message.push(newMessage)
    //     state.newMessageText = '';
    // } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
    //     state.newMessageText = action.newMessage;
    // }
    // return state;
}
export const sendMessageActionCreator = (newMessage: string) =>
    ({type: 'ADD-MESSAGE', newMessage: newMessage}) as const;
export const addMessageActionCreator = (newMessage: string) =>
    ({type: "CHANGE-NEW-MESSAGE-TEXT", newMessage: newMessage}) as const;

