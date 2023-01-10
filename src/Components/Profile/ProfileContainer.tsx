import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getStatus, getUserProfile, savePhotoTC, updateStatus } from '../../Redux/profileReducer'
import { StoreType } from '../../Redux/redux-store'

import Profile from './Profile'
import { RootUserProfileType } from './RootUserProfileType'

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
}
export type ProfileContainerPropsType = MapStateToPropsType &
  MapDispatchToProps &
  RouteComponentProps<PathParamType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhotoTC }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
