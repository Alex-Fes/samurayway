import React from "react";
import classes from "./ProfileInfo.module.css";
import {RootUserProfileType} from "../RootUserProfileType";
import {Preloader} from "../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
    profile: RootUserProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <div className={classes.img}>
                    <img
                        src="https://www.imgfinancialgroup.com/sites/default/files/users/imgfinancialgroup/images/001-coastal.jpg"
                        alt=''/>
                </div>
                <div className={classes.descriptionBlock}>
                    <img src={props.profile.photos.large} alt=""/>
                    ava + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;