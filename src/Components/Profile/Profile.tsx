import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, changeNewText, PostType, RootStateType, state} from "../../Redux/state";


type ProfilePropsType = {
    newPostText: string
    posts: PostType[]
    addPostCallback: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPostCallback={addPost}
                     newPostText={props.newPostText}
                     changeNewTextCallback={changeNewText}
            />
        </div>
    )
}

export default Profile;