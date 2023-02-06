import React from 'react'

import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'

import { StoreType } from '../../App/store'
import { DialogType, MessageType, sendMessageActionCreator } from '../../Redux/dialogsReducer'
import { withAuthRedirect } from '../../utilits/hoc/withAuthRedirect'

import Dialogs from './Dialogs'

type MapStateToPropsType = {
  dialogs: Array<DialogType>
  message: Array<MessageType>
}
type MapDispatchToPropsType = {
  sendMessage: (newMessageText: string) => void
}
export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
  return {
    dialogs: state.DialogsPage.dialogs,
    message: state.DialogsPage.message,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessage: string) => {
      dispatch(sendMessageActionCreator(newMessage))
    },
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
