import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {BrowserRouter, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";


//
// type DialogsPropsType = {
//     dialogs: DialogType[]
//     message: MessageType[]
//     newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     changeNewMessageTextCallback: (newMessageTextBody: string) => void
//     sendMessage:()=> void
// }

type newMessageFormType = {
    newMessage: string
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    // let newMessage = React.createRef<HTMLTextAreaElement>();
    // let onSendMessage = () => {
    //     //props.sendMessage()
    //     // props.dispatch(sendMessageActionCreator(props.newMessageText))
    // }
    // let onAddMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newMessageTextBody = e.currentTarget.value
    //     //props.changeNewMessageTextCallback(newMessageTextBody)
    //     //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
    //     // props.dispatch(addMessageActionCreator(e.currentTarget.value))
    // }


    let addNewMessage = (value: newMessageFormType) => {
        props.sendMessage(value.newMessage)
    }
    return (
        <BrowserRouter>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <AddMessageFormRedux
                        onSubmit={addNewMessage}
                    />

                </div>
            </div>
        </BrowserRouter>
    )
}

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessage" placeholder="Enter your message"/>
            {/*<textarea placeholder={'Enter your message'}*/}
            {/*          ref={newMessage}*/}
            {/*          value={props.newMessageText}*/}
            {/*          onChange={onAddMessageHandler}/>*/}
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;