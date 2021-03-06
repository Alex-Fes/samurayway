import React from "react";
import style from './../Dialogs.module.css'


type MessagePropsType ={
    id: number
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div>

        <div className={style.message}>{props.message}</div>
    </div>

};
export default Message;