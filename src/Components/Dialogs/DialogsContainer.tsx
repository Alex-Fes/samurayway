import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTypes, DialogType, MessageType} from "../../Redux/state";
import {addMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogsReduser";
import Dialogs from "./Dialogs";
import store from "../../Redux/redux-store";

type DialogsPropsType = {
    // dialog: DialogType[]
    // message: MessageType[]
    // newMessageText: string
    // dispatch: (action: ActionTypes) => void
    store: any
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state = store.getState();
    // let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    // let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
    let sendMessage = () => {
        //props.addMessageCallback(newMessage.current.value)
        props.store.dispatch(sendMessageActionCreator(state.DialogsPage.newMessageText))
    }
    let addMessage = (newMessageTextBody: string) => {
        //props.changeNewMessageTextCallback(e.currentTarget.value)
        //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
        props.store.dispatch(addMessageActionCreator(newMessageTextBody))
    }
debugger
    return <Dialogs dialog={state.DialogsPage.dialogs}
                    message={state.DialogsPage.message}
                    sendMessage={sendMessage}
                    newMessageText={state.DialogsPage.newMessageText}
                    changeNewMessageTextCallback={addMessage}/>
    //
    // (
    //     <BrowserRouter>
    //         <div className={style.dialogs}>
    //             <div className={style.dialogsItems}>
    //                 {dialogElements}
    //             </div>
    //             <div className={style.messages}>
    //                 {messagesElements}
    //                 <textarea placeholder={'Enter your message'}
    //                           ref={newMessage}
    //                           value={props.newMessageText}
    //                           onChange={addMessageHandler}/>
    //                 <button onClick={sendMessage}>Send</button>
    //             </div>
    //         </div>
    //     </BrowserRouter>
    // )
}

export default DialogsContainer;