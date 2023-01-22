import React from 'react'

import { ProfileContainerPropsType } from './ProfileContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Profile = (props: ProfileContainerPropsType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhotoTC}
        updateUserDataTC={props.updateUserDataTC}
      />
      {/*<MyPostsContainer />*/}
    </div>
  )
}

export default Profile
