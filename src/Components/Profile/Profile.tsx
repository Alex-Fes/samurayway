import React from "react";
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType ={
posts: Array<MyPostsPropsType>
}


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}
export default Profile;