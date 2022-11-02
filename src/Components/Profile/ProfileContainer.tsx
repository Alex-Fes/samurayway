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
}

type MapDispatchToProps = {
    //setUserProfile: (profile: RootUserProfileType) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamType>;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';}
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
    status: state.ProfilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default withAuthRedirect(connect(mapStateToProps,
//     {getUserProfile})(WithUrlDataContainerComponent));
//























