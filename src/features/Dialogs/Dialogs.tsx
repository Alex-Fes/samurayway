import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { Textarea } from '../../common/FormsControls/FormsControl'
import { maxLengthCreator, required } from '../../utilits/validators/validators'

import DialogItem from './DialogItem/DialogItem'
import style from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer'
import Message from './Message/Message'

//
// type DialogsPropsType = {
//     dialogs: DialogType[]
//     message: MessageType[]
//     newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     changeNewMessageTextCallback: (newMessageTextBody: string) => void
//     sendMessage:()=> void
// }

// type newMessageFormType = {
//   newMessage: string
// }

const Dialogs = (props: DialogsPropsType) => {
  let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
  let messagesElements = props.message.map(m => (
    <Message key={m.id} id={m.id} message={m.message} />
  ))
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
  let addNewMessage = (value: any) => {
    props.sendMessage(value.newMessage)
  }

  return (
    <BrowserRouter>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogElements}</div>
        <div className={style.messages}>
          {messagesElements}
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </BrowserRouter>
  )
}
const maxLength = maxLengthCreator(10)
const AddMessageForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessage"
          placeholder="Enter your message"
          validate={[required, maxLength]}
        />
        {/*<textarea placeholder={'Enter your message'}*/}
        {/*          ref={newMessage}*/}
        {/*          value={props.newMessageText}*/}
        {/*          onChange={onAddMessageHandler}/>*/}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
