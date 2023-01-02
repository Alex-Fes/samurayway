import React from 'react'

import { NavLink } from 'react-router-dom'

import style from './../Dialogs.module.css'

type DialogPropsType = {
  name: string
  id: number
}

const DialogItem = (props: DialogPropsType) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
