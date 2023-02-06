import React from 'react'

import userPic from '../../../assets/images/user-circle-icon-png.png'
import s from '../Dialogs.module.scss'
type MessagePropsType = {
  id: number
  message: string
}
const Message = (props: MessagePropsType) => {
  return (
    <div className={s.messages}>
      <img src={userPic} alt="" />
      <span>{props.message}</span>
    </div>
  )
}

export default Message
