import React from "react";
import {ActionTypes} from "./state";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
// export type DialogsPageType = {
//     dialogs: Array<DialogType>
//     message: Array<MessageType>
//     newMessageText: string
// }

export type InitialStateType = typeof initialState;

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Yana'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vetal'}
    ] as Array<DialogType>,
    message: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo Yo'}
    ] as Array<MessageType>,
    newMessageText: '' as string
};

export const dialogReduser = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            };
            // state.message.push(newMessage)
            // state.newMessageText = '';
            return {...state,message: [...state.message, newMessage],newMessageText: ''};
        case "CHANGE-NEW-MESSAGE-TEXT":
            // state.newMessageText = action.newMessage;
            return {...state,newMessageText:action.newMessage};
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
export const sendMessageActionCreator = () =>
    ({type: 'ADD-MESSAGE'}) as const;
export const addMessageActionCreator = (newMessage: string) =>
    ({type: "CHANGE-NEW-MESSAGE-TEXT", newMessage: newMessage}) as const;

