import React from "react";
import style from './../Dialogs.module.css'
import {RootStateType} from "../../../Redux/state";

type MessagePropsType ={
    id: number
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={style.message}>{props.message}</div>
};
export default Message;