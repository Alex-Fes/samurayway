import React from 'react'

import { NavLink } from 'react-router-dom'

import { SvgSelector } from '../../common/svgSelector/SvgSelector'

import s from './Navigation.module.scss'

const Navigation = () => {
  return (
    <>
      <NavLink exact to="/" className={s.item}>
        <SvgSelector svgname={'profile'} />
        Home
      </NavLink>

      <NavLink to="/profile" className={s.item}>
        <SvgSelector svgname={'profileLight'} />
        Profile
      </NavLink>

      <NavLink to="/dialogs" className={s.item}>
        <SvgSelector svgname={'dialogs'} />
        Message
      </NavLink>

      <NavLink to="/news" className={s.item}>
        <SvgSelector svgname={'news'} />
        News
      </NavLink>

      <NavLink to="/users" className={s.item}>
        <SvgSelector svgname={'users'} />
        Users
      </NavLink>

      <NavLink to="/settings" className={s.item}>
        Settings
      </NavLink>
    </>
  )
}

export default Navigation
