import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
    logoutUserTC: ()=> void
}
const Header = (props: HeaderPropsType) => {
    return (<header className={classes.header}>
            <img
                src="logo_transparent.png" alt='logo'/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ?<div>{props.login} - <button onClick={props.logoutUserTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;