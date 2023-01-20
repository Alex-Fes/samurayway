import React from 'react'

import { AppActionsType } from './types'

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

export type InitialStateType = typeof initialState

let initialState = {
  dialogs: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Yana' },
    { id: 4, name: 'Dima' },
    { id: 5, name: 'Vetal' },
  ] as Array<DialogType>,
  message: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo Yo' },
  ] as Array<MessageType>,
  // newMessageText: '' as string
}

export const dialogReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      // eslint-disable-next-line no-case-declarations
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: action.newMessage,
      }

      return { ...state, message: [...state.message, newMessage] }

    default:
      return state
  }
}
export const sendMessageActionCreator = (newMessage: string) =>
  ({ type: 'ADD-MESSAGE', newMessage } as const)
// export const addMessageActionCreator = (newMessage: string) =>
//     ({type: "CHANGE-NEW-MESSAGE-TEXT", newMessage: newMessage}) as const;
