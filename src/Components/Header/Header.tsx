import React from 'react'

import { NavLink } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'

import s from './Header.module.css'

type HeaderPropsType = {
  login: string
  isAuth: boolean
  logoutUserTC: () => void
}
const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src="../../assets/images/logo_transparent.png" alt="logo" />
        </div>
        <div className={s.navBar}>
          <Navigation />
        </div>

        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login} - <button onClick={props.logoutUserTC}>Log out</button>
            </div>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
