import React from 'react'

import { NavLink } from 'react-router-dom'

import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink exact to="/" activeClassName={s.active}>
          Home
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/music" activeClassName={classes.active}>*/}
      {/*    Music*/}
      {/*  </NavLink>*/}
      {/*</div>*/}
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/sidebar" activeClassName={s.active}>
          Sidebar
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation
