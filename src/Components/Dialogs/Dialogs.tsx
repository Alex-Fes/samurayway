import React from "react";
import style from './Dialogs.module.css'
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../Redux/state";

type DialogsPropsType = {
    dialog: DialogType[]
    message: MessageType[]
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
    let newMessage = React.createRef<HTMLTextAreaElement>();
    let sendMessage = () => alert(newMessage.current?.value);


    return (
        <BrowserRouter>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <textarea ref={newMessage}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;