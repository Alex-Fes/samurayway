import React from "react";
import style from './../Dialogs.module.css'
import {BrowserRouter, NavLink, Route} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}
export default DialogItem;