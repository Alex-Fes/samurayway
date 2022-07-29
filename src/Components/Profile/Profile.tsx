import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType} from "../../Redux/state";


type ProfilePropsType = {
    newPostText: string
    posts: PostType[]
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;