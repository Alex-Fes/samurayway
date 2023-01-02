import React from 'react'

import MyPostsContainer from './MyPosts/Post/MyPostsContainer'
import { ProfileContainerPropsType } from './ProfileContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props: ProfileContainerPropsType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer
      // posts={props.posts}
      // newPostText={props.newPostText}
      // dispatch={props.dispatch}
      // store={props.store}
      />
    </div>
  )
}

export default Profile
