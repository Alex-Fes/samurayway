import React from "react";
import {addMessageActionCreator, DialogType, MessageType, sendMessageActionCreator} from "../../Redux/dialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {StoreType} from "../../Redux/redux-store";
import state from "../../Redux/state";

// type DialogsPropsType = {
//     // dialog: DialogType[]
//     // message: MessageType[]
//     // newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     // store: any
// }

// const DialogsContainer = () => {
//     //let state = store.getState();
//     // let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
//     // let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let sendMessage = () => {
//                     //props.addMessageCallback(newMessage.current.value)
//                     store.dispatch(sendMessageActionCreator(state.DialogsPage.newMessageText))
//                 }
//                 let addMessage = (newMessageTextBody: string) => {
//                     //props.changeNewMessageTextCallback(e.currentTarget.value)
//                     //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
//                     store.dispatch(addMessageActionCreator(newMessageTextBody))
//                 }
//                 return <Dialogs dialog={state.DialogsPage.dialogs}
//                                 message={state.DialogsPage.message}
//                                 sendMessage={sendMessage}
//                                 newMessageText={state.DialogsPage.newMessageText}
//                                 changeNewMessageTextCallback={addMessage}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    message:Array<MessageType>
    newMessageText:string
}
type MapDispatchToProps = {
    sendMessage: ()=>void
    changeNewMessageTextCallback: (newMessageTextBody: string) => void
}
export type DialogsPropsType = MapDispatchToProps & MapStateToPropsType;

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogs: state.DialogsPage.dialogs,
        message: state.DialogsPage.message,
        newMessageText: state.DialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeNewMessageTextCallback: (newMessageTextBody: string) => {
            dispatch(addMessageActionCreator(newMessageTextBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;