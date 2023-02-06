import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { Textarea } from '../../common/FormsControls/FormsControl'
import { maxLengthCreator, required } from '../../utilits/validators/validators'

import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import { DialogsPropsType } from './DialogsContainer'
import Message from './Message/Message'

const Dialogs = (props: DialogsPropsType) => {
  let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
  let messagesElements = props.message.map(m => (
    <Message key={m.id} id={m.id} message={m.message} />
  ))
  let addNewMessage = (value: any) => {
    props.sendMessage(value.newMessage)
  }

  return (
    <BrowserRouter>
      <div className={s.container}>
        <div className={s.mainContainer}>
          <div className={s.dialogsContainer}>{dialogElements}</div>
          <div className={s.messageContainer}>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </BrowserRouter>
  )
}
const maxLength = maxLengthCreator(200)
const AddMessageForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.formContainer}>
      <div className={s.messageTextarea}>
        <Field
          component={Textarea}
          name="newMessage"
          placeholder="Enter your message"
          validate={[required, maxLength]}
        />
      </div>

      <button className={s.sendMessageBtn}>Send</button>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
