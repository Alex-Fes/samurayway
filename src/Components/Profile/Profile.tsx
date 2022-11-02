import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


const Profile = (props: ProfileContainerPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
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