import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}


const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )

}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Alex' id={1}/>
                <DialogItem name='Sasha' id={2}/>
                <DialogItem name='Yana' id={3}/>
                <DialogItem name='Dima' id={4}/>
                <DialogItem name='Vetal' id={5}/>
            </div>
            <div className={style.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Yo Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;