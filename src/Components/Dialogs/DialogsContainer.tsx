import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTypes, DialogType, MessageType} from "../../Redux/state";
import {addMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogsReduser";
import Dialogs from "./Dialogs";
import store from "../../Redux/redux-store";
import StoreContext, {Provider} from "../../StoreContext";

type DialogsPropsType = {
    // dialog: DialogType[]
    // message: MessageType[]
    // newMessageText: string
    // dispatch: (action: ActionTypes) => void
    // store: any
}

const DialogsContainer = () => {
    //let state = store.getState();
    // let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    // let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let sendMessage = () => {
                    //props.addMessageCallback(newMessage.current.value)
                    store.dispatch(sendMessageActionCreator(state.DialogsPage.newMessageText))
                }
                let addMessage = (newMessageTextBody: string) => {
                    //props.changeNewMessageTextCallback(e.currentTarget.value)
                    //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
                    store.dispatch(addMessageActionCreator(newMessageTextBody))
                }
                return <Dialogs dialog={state.DialogsPage.dialogs}
                                message={state.DialogsPage.message}
                                sendMessage={sendMessage}
                                newMessageText={state.DialogsPage.newMessageText}
                                changeNewMessageTextCallback={addMessage}/>
            }}
        </StoreContext.Consumer>
    )
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