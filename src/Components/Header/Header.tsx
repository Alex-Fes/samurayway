import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (<header className={classes.header}>
            <img
                src="logo_transparent.png" alt='logo'/>
        </header>
    )
}
export default Header;