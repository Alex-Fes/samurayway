import React from "react";
import style from './Dialogs.module.css'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialog = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Yana'},
    {id: 4, name: 'Dima'},
    {id: 5, name: 'Vetal'}
]
let message = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo Yo'}
]
let dialogElements = dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = message.map(m => <Message message={m.message} id={m.id}/>)


const Dialogs = () => {
    return (
        <BrowserRouter>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;