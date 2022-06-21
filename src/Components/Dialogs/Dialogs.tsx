import React from "react";
import style from './Dialogs.module.css'
import {BrowserRouter, NavLink, Route} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
    id: number
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

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
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <BrowserRouter>
                    {dialogElements}
                </BrowserRouter>
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;