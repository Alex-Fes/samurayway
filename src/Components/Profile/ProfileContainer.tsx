import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {getUserProfile} from "../../Redux/profileReducer";
import {RootUserProfileType} from "./RootUserProfileType";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type PathParamType = {
    userId: string
}
type MapStateToPropsType = {
    profile: RootUserProfileType
    isAuth: boolean
}
type MapDispatchToProps = {
    //setUserProfile: (profile: RootUserProfileType) => void
    getUserProfile: (userId: string) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamType>;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId).then(response => {
        //     this.props.getUserProfile(response.data)
        // })
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />;
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);