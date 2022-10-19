import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {ProfileContainerPropsType} from "./ProfileContainer";


// type ProfilePropsType = {
//     //props: any
//     profile: RootUserProfileType
// }

const Profile = (props: ProfileContainerPropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                // store={props.store}
            />
        </div>
    )
}

export default Profile;