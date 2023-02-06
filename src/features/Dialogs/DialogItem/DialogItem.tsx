import React from 'react'

import { NavLink } from 'react-router-dom'

import userPic from '../../../assets/images/user-circle-icon-png.png'
import style from '../Dialogs.module.scss'
type DialogPropsType = {
  name: string
  id: number
}

const DialogItem = (props: DialogPropsType) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={style.dialogItem + ' ' + style.active}>
      <img src={userPic} alt="" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
