import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profileReducer";
import {RootUserProfileType} from "./RootUserProfileType";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type PathParamType = {
    userId: string
}
type MapStateToPropsType = {
    profile: RootUserProfileType
    status: string
    authorizedUserId: number,
    isAuth: boolean
}

type MapDispatchToProps = {
    //setUserProfile: (profile: RootUserProfileType) => void
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void

}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamType>;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
         }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)























