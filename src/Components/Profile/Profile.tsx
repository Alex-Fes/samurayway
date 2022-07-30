import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type ProfilePropsType = {
    // newPostText: string
    // posts: PostType[]
    // dispatch: (action: ActionTypes) => void
    store: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    )
}

export default Profile;