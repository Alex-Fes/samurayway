import React from 'react'

import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { DialogType, MessageType, sendMessageActionCreator } from '../../Redux/dialogsReducer'
import { StoreType } from '../../Redux/redux-store'

import Dialogs from './Dialogs'

// type DialogsPropsType = {
//     // dialog: DialogType[]
//     // message: MessageType[]
//     // newMessageText: string
//     // dispatch: (action: ActionTypes) => void
//     // store: any
// }

// const DialogsContainer = () => {
//     //let state = store.getState();
//     // let dialogElements = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
//     // let messagesElements = props.message.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let sendMessage = () => {
//                     //props.addMessageCallback(newMessage.current.value)
//                     store.dispatch(sendMessageActionCreator(state.DialogsPage.newMessageText))
//                 }
//                 let addMessage = (newMessageTextBody: string) => {
//                     //props.changeNewMessageTextCallback(e.currentTarget.value)
//                     //  props.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
//                     store.dispatch(addMessageActionCreator(newMessageTextBody))
//                 }
//                 return <Dialogs dialog={state.DialogsPage.dialogs}
//                                 message={state.DialogsPage.message}
//                                 sendMessage={sendMessage}
//                                 newMessageText={state.DialogsPage.newMessageText}
//                                 changeNewMessageTextCallback={addMessage}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
  dialogs: Array<DialogType>
  message: Array<MessageType>
  //newMessageText: string

  //isAuth: boolean - авторизация будет браться  в HOC
}
type MapDispatchToPropsType = {
  //onSubmit: ()=> void
  sendMessage: (newMessageText: string) => void
  //changeNewMessageTextCallback: (newMessageTextBody: string) => void
}
export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
  return {
    dialogs: state.DialogsPage.dialogs,
    message: state.DialogsPage.message,
    // newMessageText: state.DialogsPage.newMessageText,
    //isAuth: state.auth.isAuth - авторизация будет браться  в HOC
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessage: string) => {
      dispatch(sendMessageActionCreator(newMessage))
    },
    // changeNewMessageTextCallback: (newMessageTextBody: string) => {
    //     dispatch(addMessageActionCreator(newMessageTextBody))
  }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
