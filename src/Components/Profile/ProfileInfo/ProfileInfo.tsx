import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={classes.img}>
                    <img
                        src="https://www.imgfinancialgroup.com/sites/default/files/users/imgfinancialgroup/images/001-coastal.jpg"
                        alt=''/>
                </div>
                <div className={classes.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;