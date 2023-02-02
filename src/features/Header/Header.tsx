import React from 'react'

import { NavLink } from 'react-router-dom'

import { RequestStatusType } from '../../App/appReducer'
import logo from '../../assets/images/logo.png'
import { SvgSelector } from '../../common/svgSelector/SvgSelector'

import s from './Header.module.scss'
import Navigation from './Navigation/Navigation'

type HeaderPropsType = {
  login: string
  isAuth: boolean
  logoutUserTC: () => void
  appStatus: RequestStatusType
}
const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.navBar}>
          <Navigation />
        </div>

        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div className={s.userBox}>
              <SvgSelector svgname={'profileLight'} />
              <span className={s.userName}>{props.login}</span> -
              <button onClick={props.logoutUserTC} className={s.logoutBtn}>
                <SvgSelector svgname={'logout'} />
              </button>
            </div>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
      </div>
      {props.appStatus === 'loading' && <div className={s.loaderLine}></div>}
    </header>
  )
}

export default Header
