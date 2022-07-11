import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostType, RootStateType, state} from "../../Redux/state";


type ProfilePropsType = {
    posts: PostType[]
    addPostCallback: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPostCallback={addPost}
            />
        </div>
    )
}

export default Profile;