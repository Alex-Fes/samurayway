import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/state";


type ProfilePropsType = {
    newPostText: string
    posts: PostType[]
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback:(newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPostCallback={props.addPostCallback}
                     newPostText={props.newPostText}
                     changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    )
}

export default Profile;