import React, { Component } from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { StoreType } from '../../App/store'
import {
  getStatus,
  getUserProfile,
  savePhotoTC,
  updateStatus,
  updateUserDataTC,
} from '../../Redux/profileReducer'
import { withAuthRedirect } from '../../utilits/hoc/withAuthRedirect'

import Profile from './Profile'
import { ProfileDataFormReduxFormType } from './ProfileInfo/ProfileDataForm/ProfileDataForm'
import { RootUserProfileType } from './RootUserProfileType'

class ProfileContainer extends Component<ProfileContainerPropsType> {
  refreshProfile() {
    let userId = +this.props.match.params.userId

    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(
    prevProps: Readonly<ProfileContainerPropsType>,
    prevState: Readonly<ProfileContainerPropsType>,
    snapshot?: any
  ) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    )
  }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isOwner: false,
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhotoTC,
    updateUserDataTC,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

//TYPES =====================================
export type PathParamType = {
  userId: string
}
type MapStateToPropsType = {
  profile: RootUserProfileType
  status: string
  authorizedUserId: number
  isAuth: boolean
  isOwner: boolean
}

type MapDispatchToProps = {
  //setUserProfile: (profile: RootUserProfileType) => void
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhotoTC: (photoFile: any) => void
  updateUserDataTC: (formData: ProfileDataFormReduxFormType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType &
  MapDispatchToProps &
  RouteComponentProps<PathParamType>
