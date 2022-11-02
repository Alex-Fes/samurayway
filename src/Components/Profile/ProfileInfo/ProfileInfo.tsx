import React from "react";
import classes from "./ProfileInfo.module.css";
import {RootUserProfileType} from "../RootUserProfileType";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: RootUserProfileType
    status: string
    updateStatus: (status: string) => void
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
                    <img src={props.profile.photos.large} alt="" width={'200px'} height={'200px'}/>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}/>
                    <span>About me: {props.profile.aboutMe}</span>
                    {/*<ul>Contacts:*/}
                    {/*    <li>{props.profile.contacts.facebook}</li>*/}
                    {/*    <li>{props.profile.contacts.github}</li>*/}
                    {/*    <li>{props.profile.contacts.vk}</li>*/}
                    {/*    <li>{props.profile.contacts.youtube}</li></ul>*/}

                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;



























