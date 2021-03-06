import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTypes, DialogType, MessageType} from "../../Redux/state";
import {addMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogsReduser";

type DialogsPropsType = {
    dialog: DialogType[]
    message: MessageType[]
    newMessageText: string
    // dispatch: (action: ActionTypes) => void
    changeNewMessageTextCallback: (newMessageTextBody: string) => void
    sendMessage:()=> void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
    let newMessage = React.createRef<HTMLTextAreaElement>();
    let onSendMessage = () => {
        props.sendMessage()
        // props.dispatch(sendMessageActionCreator(props.newMessageText))
    }
    let onAddMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageTextBody = e.currentTarget.value
        props.changeNewMessageTextCallback(newMessageTextBody)
        //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
        // props.dispatch(addMessageActionCreator(e.currentTarget.value))
    }
    return (
        <BrowserRouter>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <textarea placeholder={'Enter your message'}
                              ref={newMessage}
                              value={props.newMessageText}
                              onChange={onAddMessageHandler}/>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;