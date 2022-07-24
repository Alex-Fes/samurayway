import React from "react";
import {ActionTypes, DialogsPageType, MessageType} from "./state";


export const dialogReduser = (state: DialogsPageType, action: ActionTypes) => {
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

